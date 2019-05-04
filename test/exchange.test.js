const Exchange  = require('../exchange.js');
const User   = require ('../user.js');
const Product   = require ('../product.js');

let receiver = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');
let owner = new User('test.owner@hotmail.fr','test','owner','17');
let product = new Product('mail',owner)
let exchange = new Exchange(receiver,product,'2019-04-30','2019-04-30')

jest.mock('../service/mailer.js')
const Mailer = require('../service/mailer.js');
Mailer.mockImplementation(() => {
  return true
})

jest.mock('../service/database.js')

describe('When receiver is minor', () => {
  it('Should return true after send mail', () => {
    expect(exchange.save()).toEqual(true);
  });
});

describe('When receiver is major', () => {
  it('Should return true after save in database', () => {
    expect(exchange.save()).toEqual(true);
  });
});
