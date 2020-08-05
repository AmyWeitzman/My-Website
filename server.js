const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if(error) {
        console.log(error);
    } else {
        console.log('Server is ready.');
    }
});

router.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    var mail = {
        from: email,
        to: creds.USER,
        subject: 'New Message from Website Contact Form',
        html: name + " (" + email + ")" + ": " + message
    }

    transporter.sendMail(mail, (err, data) => {
        if(err) {
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success',
            })
        }
    })
})

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3000);