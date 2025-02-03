/**
 * @jest-environment jsdom
 */


const { handleSubmit } = require("../views/js/handleSubmit")

describe('handleSubmit', ()=> {
    it('returns something', () => {
        expect(handleSubmit).toBeDefined();
    })
})
