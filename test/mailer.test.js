const nodemailer = require('nodemailer');
const Mailer =require('../service/mailer.js');

//jest.mock('nodemailer');

let mailer = new Mailer();

mailer.send('dylansettbon@gmail.com');
test('test',(done) => {
    mailer.send('dylansettbon@gmail.com',(response)=>{
        expect(response).toBe(true)
        done()
    })
})

