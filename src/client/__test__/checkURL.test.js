const { isValidUrl } = require("../views/js/checkURL")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(isValidUrl("read")).toBeFalsy();
    })
    
    test('emails are not considered valid urls', () => {
        expect(isValidUrl("mailto:ahmed@gmail.com")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect(isValidUrl("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(isValidUrl("")).toBeFalsy();
    })
})

