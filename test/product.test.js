const Product = require('../product.js')
const User = require('../user.js')

let unvalidOwner = new User('testownerhotmail.fr','test','owner','11');
let unvalidProduct = new Product('',unvalidOwner)

let validOwner = new User('test.owner@hotmail.fr','test','owner','17');
let validProduct = new Product('mail',unvalidOwner)

test('not valid product caused by product', () => {
    expect(unvalidProduct.isValid()).toBe(false);
});


test('not valid product caused by owner', () => {
    expect(validProduct.isValid()).toBe(false);
});

let validProduct2 = new Product('mail',validOwner)
test('valid product', () => {
    expect(validProduct2.isValid()).toBe(true);
});