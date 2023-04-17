require('dotenv').config(); //call and configure your dotenv package
const express = require('express');
const methodOverride = require('method-override');

const connectToDB = require("./config/db");
// Data or Models

const Logs = require('./models/Logs');

const app = express();
const PORT = 3000;

// ======Configuration=====
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//setting a middleware to run in the app which is a function which will
//run in between the request and response cycle
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
})

//parses the data from the request
app.use(express.urlencoded({extended: false}))
//override using a query value, with POST having ? _method=DELETE
app.use(methodOverride('_method'));

app.get('/logs', (req, res) => {
    // res.send('<h1>Welcome to Captains Log page</h1>')
    Logs.find({}, (error, allLogs) => {
        res.render('Index', {logs: allLogs});
    })
})

app.get('/logs/new', (req, res) => {
    res.render('New');
})

app.post('/logs', (req, res) =>{
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    // res.send(req.body);
    Logs.create(req.body, (error, createdLog) => {
        // res.send(req.body);
        res.redirect('/logs');
    })
})

app.get('/logs/seed', (req, res)=>{
    Logs.create([
        {
            title:'Cable Ship',
            entry:'1000 tons of electronics',
            shipIsBroken:true
        },
        {
            title:'Fishing Vessel',
            entry:'500 barrels of crude oil',
            shipIsBroken:false
        },
        {
            title:'Gas Turbine Ship',
            entry:'2000 tons of steel',
            shipIsBroken:false
        },
        {
            title:'Lifeboat',
            entry:'1000 tons of clothes',
            shipIsBroken:true
        },
        {
            title:'Motor Tanker',
            entry:'1000 tons of nothing',
            shipIsBroken:false
        },
        {
            title:'Nuclear Ship',
            entry:'500 barrels of petroleum',
            shipIsBroken:true
        }

    ], (err, data)=>{
        console.log(data);
        res.redirect('/logs');
    })
});

/**
 * Show Route: (returns a specific log)
 */

app.get('/logs/:id', (req, res) => {
    console.log(req.params);
    // res.send(fruits[req.params.indexOfFruitsArray])
    // res.render('fruits/Show', {fruit: fruits[req.params.indexOfFruitsArray]});
    Logs.findById(req.params.id, (error, foundLog) => {
        res.render('Show', {log: foundLog})
    })
})


//* ================================
app.listen(3000, () => {
    console.log("Server is up!");
    connectToDB();
  });