const express = require('express'); 
const path = require('path'); 
const app = express(); 
const blogRoutes = require('./routes/blogRoutes');

app.listen(3000); 

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us'
    }); 
}); 

// blog routes
app.use(blogRoutes); 

app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Not found'
    }); 
});