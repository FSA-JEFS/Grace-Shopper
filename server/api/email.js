const router = require("express").Router();
var nodemailer = require("nodemailer");
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const { isLoggedIn, isAdmin, isSelfOrAdmin } = require("./gatekeepers");
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: +process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const generateHTML = (filename, options = {}) => {
  // filename is either email-layout or password-reset
  const html = pug.renderFile(`${__dirname}/../../public/email/${filename}.pug`, options);
  const inlined = juice(html);
  return inlined;
};

router.post("/sendCheckoutMail", isLoggedIn, function(req, res) {
  const mailOptions = req.body
  mailOptions.subject = 'Thank You For Your Order! 🐶'
  mailOptions.from = 'Puppy Basket <noreply@fighdo.com>'
  const html = generateHTML('checkout', req.body)
  mailOptions.html = html
  mailOptions.text = htmlToText.fromString(html)
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.err('nodemailer error', error);
      res.sendStatus(500)
    } else {
      res.json(response)
    }
  });
});

module.exports = router;
