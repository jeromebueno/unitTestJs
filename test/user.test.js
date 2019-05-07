const User = require('../user.js');

let unvalidUser = new User('jerome','','bueno','1');
let unvalidUserEmpty = new User('dylan','dylan','','1');
let unvalidUserFirstnameNull = new User('dylan',null,'','1');
let unvalidUserLastnameNull = new User('dylan','',null,'1');
let unvalidUserNameEmpty = new User('dylan','','','1');
let unvalidUserNameNull = new User('dylan',null,null,'1');
let validUser = new User('jerome.bueno@hotmail.fr','jerome','bueno','22');
let unvalidUserAge = new User('jerome.bueno@hotmail.fr','jerome','bueno','12');

test('not valid email', () => {
    expect(unvalidUser.isValidEmail()).toBe(false);
});

test('valid email', () => {
    expect(validUser.isValidEmail()).toBe(true);
});

test('not valid name', () => {
    expect(unvalidUser.isValidName()).toBe(false);
});

test('not valid name empty ', () => {
    expect(unvalidUserEmpty.isValidName()).toBe(false);
});

test('not valid firstname null ', () => {
    expect(unvalidUserFirstnameNull.isValidName()).toBe(false);
});
test('not valid  lastname null ', () => {
    expect(unvalidUserLastnameNull.isValidName()).toBe(false);
});

test('not valid name empty ', () => {
    expect(unvalidUserNameEmpty.isValidName()).toBe(false);
});

test('not valid name null ', () => {
    expect(unvalidUserNameNull.isValidName()).toBe(false);
});

test('valid name', () => {
    expect(validUser.isValidName()).toBe(true);
});
test('valid age', () => {
    expect(validUser.isValidName()).toBe(true);
});
test('not valid user', () => {
    expect(unvalidUserAge.isValid()).toBe(false);
});

test('not valid user', () => {
    expect(unvalidUser.isValid()).toBe(false);
});

test('valid user', () => {
    expect(validUser.isValid()).toBe(true);
});


