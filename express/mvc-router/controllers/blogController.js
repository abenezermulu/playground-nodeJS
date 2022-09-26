const blog_index = (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "How to defeat boeser",
      snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  res.render("index", {
    title: "Ninja site",
    blogs: blogs,
    noBlogs: "No blogs to display",
  });
};

const blog_create = (req, res) => {
  res.render("create-blog", {
    title: "Create blog",
  });
};

module.exports = {
    blog_index, 
    blog_create
}