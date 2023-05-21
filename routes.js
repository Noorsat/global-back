const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


router.post('/form', (req, res) => {
    const { name, email, comment } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465, // Replace with the appropriate port number
        secure: true, // Set to true if you're using a secure connection (e.g., SSL/TLS)
        auth: {
          user: 'admin@ttskz.com',
          pass: 'jskEfWAJcg2M0CZuiqWJ'
        }
      });
      
      // Create an email message
      const mailOptions = {
        from: 'admin@ttskz.com',
        to: 'info@ttskz.com',
        subject: 'Запись с формы',
        html: `
            <div>
                <div>
                    <span style="font-weight:700">Имя:</span> ${name}
                </div>
                <div>
                    <span style="font-weight:700">Email:</span> ${email}
                </div>
                <div>
                    <span style="font-weight:700">Комментарии:</span> ${comment}
                </div>
            </div>
        `
      };
      
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error:', error);
          return res.status(400).json({message:"error"})
        } else {
          console.log('Email sent:', info.response);
          return res.status(200).json({message: "ok"})
        }
      });
});

module.exports = router;
