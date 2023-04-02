const express = require('express')
const path = require('path')
// const mail = require('./mail.js');

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  //.use('/public', express.static(__dirname + '/public' ))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  // .use('/mail', (req, res) => {
    //mail.sendMail();
    // res.send("Mail Route");
  // })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))