const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const blogPostArray = [
  {
    title: "First",
    desc:
      "Aliquam mattis eu leo nec gravida. Nullam at auctor metus. Curabitur pretium purus quis nisl elementum fermentum. Integer aliquam dolor sit amet tincidunt pulvinar. Proin at dignissim est, sit amet placerat magna. Pellentesque ante nulla, viverra sed elit sed, viverra tincidunt neque. Nam eros metus, tempus eget velit vitae, convallis bibendum orci. Integer nec mollis risus. Cras mollis tellus at elit mollis faucibus.",
  },
  {
    title: "Second",
    desc: "Second blog post",
  },
];

app.get("/", (req, res) => {
  res.render("index", { blogPostArray: blogPostArray });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/add", (req, res) => {
  res.render("addPost");
});

app.post("/add", (req, res) => {
  const title = req.body.title;
  const desc = req.body.description;

  const newPost = {
    title: title,
    desc: desc,
  };
  blogPostArray.push(newPost);
  res.redirect("/");
});

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
