const path = require('path');
const hbs = require('hbs');
const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

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
        title: 'Mike Santry Website',
        name: 'Mike Santry'
    });
});


app.listen(port, () => {
    console.log('site is up and running');
})