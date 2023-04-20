"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
// group test using describe
describe("POST /add book", () => {
    it("returns status code 201 if first name is passed", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default)
            .post("api/v1/add-book")
            .send({
            title: 'this is cool book',
            author: 'written by cool author',
            done: true,
        });
        // toEqual recursively checks every field of an object or array.
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('book');
        expect(res.body).toHaveProperty('books');
    }));
    // it("returns bad request if firstname is missing", async () => {
    //   const res = await request(app).post("/register").send()
    //   expect(res.statusCode).toEqual(201)
    // })
});
