const User = require('../user.js');

let unvalidUser = new User('jerome','','bueno','1');
let validUser = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');

test('not valid email', () => {
    expect(unvalidUser.isValidEmail()).toBe(false);
});

test('valid email', () => {
    expect(validUser.isValidEmail()).toBe(true);
});

test('not valid name', () => {
    expect(unvalidUser.isValidName()).toBe(false);
});

test('valid name', () => {
    expect(validUser.isValidName()).toBe(true);
});

test('not valid user', () => {
    expect(unvalidUser.isValid()).toBe(false);
});

test('valid user', () => {
    expect(validUser.isValid()).toBe(true);
});