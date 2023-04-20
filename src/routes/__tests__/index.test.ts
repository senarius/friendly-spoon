import app from "../../app"
import request from "supertest"

// group test using describe
describe("POST /add book", () => {
  it("returns status code 201 if first name is passed", async () => {
    const res = await request(app)
      .post("api/v1/add-book")
      .send({
        title: 'this is cool book',
        author: 'written by cool author',
        done: true,
      })
      
    // toEqual recursively checks every field of an object or array.
    expect(res.statusCode).toEqual(201);
		expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('book')
    expect(res.body).toHaveProperty('books')
  });

  // it("returns bad request if firstname is missing", async () => {
  //   const res = await request(app).post("/register").send()
  //   expect(res.statusCode).toEqual(201)
  // })
})