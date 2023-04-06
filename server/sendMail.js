const nodemailer = require("nodemailer");


exports.sendEmail = function (req, res) {
    // define the transporter
    var transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "singhbalram054@gmail.com",
            pass: "singh@054", 
        },
    });

    // Define the email
    var mailOptions = {
        from: 'singhbalram054@gmail.com',
        to: "balram.kumar@jupitice.com",
        subject: "Hello Subject ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    };

    // We send the email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
};