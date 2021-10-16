import * as pages from "./pages"
// @ponicode
describe("pages.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            pages.default({ page_num: 0 }, { type: "string" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            pages.default(true, { type: "number" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            pages.default({ page_num: 0 }, false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            pages.default({ page_num: -100 }, { type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            pages.default({ page_num: 0 }, { type: "array" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            pages.default(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
