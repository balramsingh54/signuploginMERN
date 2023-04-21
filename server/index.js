const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const conn = require('./db_connection.js');
//const { name } = require('ejs');
const sendEmail = require('./sendMail');

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
      response: request,
    });
  })

})



// app.get('/forgot-password', (req, resp) => {
//   return sendEmail;
// })



app.post('/', (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  var sql = `select name, email, password from registration where email = '${email}' and password = '${password}'`;
  conn.query(sql, (err, result) => {
    if (err) throw err;

    else if (result.length === 1) {
      console.log("you have logged in successfully ");
      // res.redirect("/dashboard");
      return res.send({
        email: email,
        password: password,
        name: result[0].name
      });
    }

    else {
      console.log("Sorry Login failed! ")
    }

  })
})


app.post('/addstudent', (req, resp) => {
  var section = req.body.section;
  var name = req.body.name;
  var fee = req.body.fee;
  var duefee = req.body.duefee;
  var mobile = req.body.mobile;
  var address = req.body.address;

  var sql = `insert into new_student(section, name, fee_status, total_due_fee, mobile_no, address) values ('${section}', '${name}', '${fee}', '${duefee}', '${mobile}','${address}' )`;

  conn.query(sql, (err, result) => {
    if (err) throw err;

    var formData = {
      section: section,
      name: name,
      fee_status: fee,
      total_due_fee: duefee,
      mobile_no: mobile,
      address: address,
    };

    return resp.send({
      response: result
    });
  })

})

app.get('/classes', (req, res) => {
  var sql = `select * from new_student order by id desc`;

  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ data: result });
  })
})

app.listen(5000, () =>
  console.log(`app listening on port 5000`),
);
