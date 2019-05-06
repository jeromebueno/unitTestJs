const Product = require('../product.js')
const User = require('../user.js')

let unvalidOwner = new User('testownerhotmail.fr','test','owner','17');
let unvalidProduct = new Product('',unvalidOwner)

let validOwner = new User('test.owner@hotmail.fr','test','owner','17');
let validProduct = new Product('mail',unvalidOwner)

test('not valid product caused by product', () => {
    expect(unvalidProduct.isValid()).toBe(false);
});

test(' valid product', () => {
    expect(validProduct.isValid()).toBe(true);
});

validProduct._owner = validOwner
test('valid product', () => {
    expect(validProduct.isValid()).toBe(true);
});

