const express = require('express');
const contactCtrl = require('../controllers/contactus_ctrl');

const router = express.Router();

router.post('/',contactCtrl.createContactus)
router.post('/send', (req, res) => {
  
    try {
      const mailOptions = {
        from: req.body.email,
        to: 'lecture867@gmail.com',
        subject: req.body.subject,
        html: req.body.message,
      };
  
      transporter.sendMail(mailOptions, (err, info) => {
        res.send(
          {
            success: true,
            message: "thank u for contacting us"
          }
        );
      });
    } catch (error) {
      res.status(500).send(
        {
          success: false,
          message: "something went wrong, please try later",
        },
        console.log("blaa1")
      );
    }
  });
  


module.exports = router;