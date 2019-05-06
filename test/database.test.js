const Exchange  = require('../exchange.js');
const User   = require ('../user.js');
const Product   = require ('../product.js');
const Database =require('../service/database.js');

let receiver = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');
let owner = new User('test.owner@hotmail.fr','test','owner','17');
let product = new Product('mail',owner)
let exchange = new Exchange(receiver,product,'2019-04-30','2019-04-30');
let database = new Database("test", "localhost", 'root', "password");


test('exchange valid', () => {
    expect(database.save()).toBe(JSON.parse(exchange));
});