const path = require('path');
const hbs = require('hbs');
const express = require('express');


const app = express();
const port = process.env.PORT || 3001;

// Define the paths for the express configs
const pubDirPath = path.join(__dirname, '../', '/public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(pubDirPath));


app.get('', (req, res) => {
    res.render('index', {
        title: "Welcome to Mike Santry's Website",
        pageBody: 'test'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        about: 'true',
        title: 'About',
        pageBody: 'About'
    });
});

app.get('/programming', (req, res) => {
    res.render('programming', {
        programming: 'true',
        title: "Programming",
        pageBody: 'Programming'
    });
});

app.get('/art', (req, res) => {
    res.render('art', {
        art: 'true',
        title: 'Art',
        pageBody: 'Art'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        contact: true,
        title: "Contact",
        pageBody: "Contact"
    })
})

app.get('/premium', (req, res) => {
    
    console.log('in premium');
    res.render('premium', {
        title: 'Mike Santry Premium'
    });
});


app.listen(port, () => {
    console.log('site is up and running');
})