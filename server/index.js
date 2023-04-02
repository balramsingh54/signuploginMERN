const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const conn = require('./db_connection.js');
const { name } = require('ejs');

var app = express();

app.use(cors());

// view engine setup
app.set('view engine', 'ejs');

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.render('insert');
})

// app.get('/api', (req, res) => {
//   res.json(
//     [
//       {name: "Balram", age: 25, address: "chandigarh"},
//       {name: "suman", age: 26, address: "chandigarh"},
//       {name: "savita", age: 24, address: "chandigarh"},
//     ]
//   )
// })

app.post('/insert', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var class_no = req.body.class;
  var college_name = req.body.college - name;
  var birthday = req.body.birthday;

  var sql = `insert into student_details(name, email, class, college_name, dob) values('${name}', '${email}', '${class_no}', '${college_name}', '${birthday}')`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    res.redirect('/show');

  })
})

app.get('/show', (req, res) => {
  var sql = `select * from student_details`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.render('show', { data: result });
  })

})

app.post('/register', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var confirmPassword = req.body.confirmPassword;

  var sql = `insert into registration(name, email, password, confirmPassword) values ('${name}', '${email}', '${password}', '${confirmPassword}' )`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    var request = {
      name: name,
      email: email,
      password: password,
      insertId: result.insertId
    };

    return res.send({
      response: request
    });
  })

})

app.get('/forgot-password', (req, resp) => {
  resp.send({ name: "balram", age: 26 });
})



app.post('/', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  var sql = `select email, password from registration where email = '${email}' and password = '${password}'`;
  conn.query(sql, (err, result) => {
    if (err) throw err;

    if (result.length === 1) {
      console.log("you have logged in successfully ");
      // res.redirect("/dashboard");
      return res.send({
        email: email,
        password: password
      });
    }

    else {
      console.log("Sorry Login failed! ")
    }

  })
})

app.get('/classes', (req, res) => {
  var sql = `select * from class4`;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ data: result });
  })
})

app.listen(5000, () =>
  console.log(`app listening on port 5000`),
);

