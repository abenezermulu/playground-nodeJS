const express = require('express'); 
const path = require('path'); 
const app = express(); 

app.listen(3000); 

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}, 
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}, 
        {title: 'How to defeat boeser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}, 
    ];

    res.render('index', {
        title: 'Ninja site', 
        blogs: blogs, 
        noBlogs: 'No blogs to display'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us'
    }); 
}); 

app.get('/blogs/create', (req, res) => {
    res.render('create-blog', {
        title: 'Create blog'
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Not found'
    }); 
});