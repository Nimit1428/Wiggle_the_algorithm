var express = require('express');
var app = express();

//Encryption
// const bcrypt = require('bcrypt');
var key = 'real secret keys should be long and random';
var encryptor = require('simple-encryptor')(key);

//Encryption ends here


// if(bcrypt.compareSync(myPlaintextPassword, hash)){
//     console.log("true")
// }

var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.set('view engine', 'pug')
app.use('/', express.static('public'))


app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
    };
    let message = req.body.first_name
    var encrypted = encryptor.encrypt(message);
    console.log('encrypted: %s', encrypted);
    var decrypted = encryptor.decrypt(encrypted);
    // Should print 'testing'   
    console.log('decrypted: %s', decrypted);


    console.log(response);
    // let message = JSON.stringify(response)
    // const saltRounds = 10;
    // let message = req.body.first_name
    // const myPlaintextPassword = message
    // const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    // res.end(JSON.stringify(response));
    res.render('index', { message: encrypted , message2: decrypted})
})


app.get('/new', urlencodedParser, function (req, res) {

    res.render('page_2')
})

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})