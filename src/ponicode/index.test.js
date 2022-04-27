const rewire = require("rewire")
const index = rewire("../index")
const validAge = index.__get__("validAge")
// @ponicode
describe("validAge", () => {
    test("0", () => {
        let result = validAge(10.5)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = validAge(14.5)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = validAge(18)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = validAge(10.0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = validAge(30.0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = validAge(-Infinity)
        expect(result).toMatchSnapshot()
    })
})
