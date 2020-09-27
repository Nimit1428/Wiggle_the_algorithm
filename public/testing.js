const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
if(bcrypt.compareSync(myPlaintextPassword, hash)){
    console.log("true")
}