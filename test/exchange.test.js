const User = require('../exchange.js');

let user = new User('jerome','j','b','1');

test('not valid user', () => {
    expect(user.isValid()).toBe(false);
});