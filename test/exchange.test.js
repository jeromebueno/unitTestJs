const Exchange  = require('../exchange.js');
const User   = require ('../user.js');
const Product   = require ('../product.js');

jest.mock('../service/database.js')
const mockDatabase = require('../service/database.js')
const dMock = jest.fn()
mockDatabase.mockImplementation(() => {
  return {
  save:dMock
  }
});

jest.mock('../service/mailer.js')
const mockMailer = require('../service/mailer.js');
const mMock = jest.fn();
mockMailer.mockImplementation(() => {
  return {
  send:mMock
  }
});

let mailer = new mockMailer()
let database = new mockDatabase()

let minorReceiver = new User('jerome.bueno@hotmail.fr','jerome','bueno','10');
let owner = new User('test.owner@hotmail.fr','test','owner','17');
let product = new Product('mail',owner)
let exchange = new Exchange(minorReceiver,product,'2019-05-30','2019-05-30')

describe('When receiver is minor', () => {
  it('Should return true after send mail', () => {
    exchange.save()
    expect(mailer.send).toHaveBeenCalled();
    expect(database.save).not.toHaveBeenCalled();
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
