const { expect } = require("chai");
const request = require("request");

describe("addTwoNumbers", () => {
  const url = "http://localhost:3000/addTwoNumbers/3/5";
  it("should return status 200", (done) => {
    request(url, { json: true }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return status code 200 in the body", (done) => {
    request(url, { json: true }, (error, response, body) => {
      expect(body.statusCode).to.equal(200);
      done();
    });
  });

  it("should return result as 8",done=>{
    request(url,{json:true},(error,response,body)=>{
        expect(error).to.be.null
        expect(response.statusCode).to.equal(200)
        expect(body.result).to.equal(8)
        done()
    })
  })
});


