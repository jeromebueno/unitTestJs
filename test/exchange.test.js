const Exchange  = require('../exchange.js');
const User   = require ('../user.js');
const Product   = require ('../product.js');

let minorReceiver = new User('jerome.bueno@hotmail.fr','jerome','bueno','10');
let owner = new User('test.owner@hotmail.fr','test','owner','17');
let product = new Product('mail',owner)
let exchange = new Exchange(minorReceiver,product,'2019-05-30','2019-05-30')

jest.mock('../service/database.js')
jest.mock('../service/mailer.js')
const Mailer = require('../service/mailer.js');
Mailer.mockImplementation(() => {
  console.log('Test mock class Mail')
})

describe('When receiver is minor', () => {
  it('Should return true after send mail', () => {
    expect(exchange.save()).toEqual(true);
  });
});

let receiver = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');
let validExchange = new Exchange(receiver,product,'2019-05-30','2019-05-30')
describe('When receiver is major', () => {
  it('Should return true after save in database', () => {
    expect(validExchange.save()).toEqual(true);
  });
});

let nullProduct = new Product(null,owner)
let unvalidExchange = new Exchange(receiver,nullProduct,'2019-05-30','2019-05-30')
describe('When exchange is not correct', () => {
  it('Should return false', () => {
    expect(unvalidExchange.save()).toEqual(false);
  });
});
