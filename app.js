const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Users = require('./models/blog')
//extract the IP address :
//yqqmYCEJtVZp3wyT

// express app :
const app = express()
// Mongodb variables set up :
const dbURI = 'mongodb+srv://fethimellal:yqqmYCEJtVZp3wyT@collection.7q8bl.mongodb.net/NodeDB?retryWrites=true&w=majority';
//connect to the database :
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((result) => app.listen(3000))
  .catch((err) => console.log(err));




// register view engine

app.set('view engine', 'ejs');

// middleware & static files:

app.use(express.static('public'));
app.use(morgan('dev'));


/* app.get('/add', (req, res) => {
  const user = new Users({
    title: 'new blog 2',
    snippet: 'about about ',
    body: 'more about',
  
  });
  user.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    })
})
app.get('/all', (req, res) => {
  Users.find()//model
  .then((result) =>{
    res.send(result);
  })
  .catch((err) =>{
    console.log(err);
  })
});
app.get('/single', (req, res) =>{
  Users.findById('613ea368fe4450eda337a441')
  .then((result) =>{
    res.send(result)
  })
  .catch((err)=>{
    console.log(err);
  })
}) */

app.get('/', (req, res) => {

  res.render('index', {
    title: 'home',
  });
});
app.get('/about', (req, res) => {
  const users = [{
      "name": "Mr. Mya Streich",
      "birthday": "2021-03-27T06:33:01.515Z",
      "phone": "1-774-216-6717 x6299",
      "zip": "87349-0528",
      "city": "Swaniawskiton",
      "email": "Scot.Dibbert@yahoo.com"
    },
    {
      "name": "Chanelle Kessler",
      "birthday": "2020-12-13T00:28:19.759Z",
      "phone": "1-411-090-1372 x5120",
      "zip": "74207-8177",
      "city": "Herzogville",
      "email": "Jordan.Schaden79@yahoo.com"
    },
    {
      "name": "Tate Emard",
      "birthday": "2021-06-25T16:58:54.030Z",
      "phone": "380-317-4641",
      "zip": "83752",
      "city": "Rempelside",
      "email": "Okey_Monahan63@hotmail.com"
    },
    {
      "name": "Estrella King",
      "birthday": "2020-11-05T22:05:52.590Z",
      "phone": "525-556-0024 x04259",
      "zip": "25065-0642",
      "city": "Joseview",
      "email": "Lexus_Sanford25@gmail.com"
    },
    {
      "name": "Sylvester Will",
      "birthday": "2021-05-10T05:08:48.732Z",
      "phone": "1-673-803-6115",
      "zip": "73405-1860",
      "city": "Boyershire",
      "email": "Kameron.Quitzon@gmail.com"
    },
    {
      "name": "Harmony Rippin",
      "birthday": "2021-07-23T01:03:00.980Z",
      "phone": "313.805.4805",
      "zip": "98634-6060",
      "city": "South Nicolas",
      "email": "Tavares14@yahoo.com"
    },
    {
      "name": "Nigel Monahan",
      "birthday": "2021-07-01T18:29:06.264Z",
      "phone": "801-967-3238",
      "zip": "94430",
      "city": "West Jaclynshire",
      "email": "Mallie19@gmail.com"
    },
    {
      "name": "Holly Olson",
      "birthday": "2021-04-17T02:44:18.830Z",
      "phone": "455-849-5884 x374",
      "zip": "43928",
      "city": "West Jedediah",
      "email": "Otha_Kessler@gmail.com"
    },
    {
      "name": "Esteban Prohaska",
      "birthday": "2020-10-29T17:28:10.745Z",
      "phone": "(824) 740-6899 x576",
      "zip": "35317-3923",
      "city": "East Adam",
      "email": "Allison_Goyette@yahoo.com"
    },
    {
      "name": "Modesto Ebert",
      "birthday": "2021-08-12T21:57:41.777Z",
      "phone": "142-080-8828 x15096",
      "zip": "74664",
      "city": "Alanisfort",
      "email": "Cleora_Bins6@gmail.com"
    },
    {
      "name": "Jamison Frami",
      "birthday": "2020-09-21T10:00:11.768Z",
      "phone": "(428) 447-7688 x1043",
      "zip": "26954-8130",
      "city": "Lauryland",
      "email": "Seamus68@yahoo.com"
    },
    {
      "name": "Mr. Tierra Cummings",
      "birthday": "2021-01-05T14:52:56.531Z",
      "phone": "184-941-1789 x20232",
      "zip": "15192",
      "city": "Donfurt",
      "email": "Boris76@gmail.com"
    },
    {
      "name": "Dr. Skye Kozey",
      "birthday": "2020-11-01T14:09:41.198Z",
      "phone": "1-935-038-6126 x397",
      "zip": "32335",
      "city": "Rosenbaumview",
      "email": "Laney90@hotmail.com"
    },
    {
      "name": "Jake Brakus",
      "birthday": "2020-12-18T14:04:30.015Z",
      "phone": "1-951-544-4507 x9645",
      "zip": "99237",
      "city": "Coryfort",
      "email": "Reina89@yahoo.com"
    },
    {
      "name": "Anissa Champlin",
      "birthday": "2020-10-17T13:43:36.398Z",
      "phone": "394-175-6733 x49366",
      "zip": "42633",
      "city": "North Guadalupeton",
      "email": "Ottis_Wiza10@gmail.com"
    },
  ];
  res.render('about', {
    title: 'about',
    users
  });
});

//blog routes 
app.get('/carousel', (req, res) => {
  Users.find().sort({createdAt: -1})
    .then((result) => {
      res.render('carousel', {title : 'all information', blogs : result });
    })
    .catch((err) => {
      console.log(err);
    })
})



app.get('/Sign-in', (req, res) => {
  res.render('Sign-in', {
    title: 'sign-in'
  });
});
app.get('/login', (req, res) => {
  res.render('login', {
    title: 'sign-in'
  });
});

// redirect


// 404 

app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
})