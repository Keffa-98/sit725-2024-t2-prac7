const { expect } = require("chai");
const { response } = require("express");
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

describe("Cats Api", () => {
  const url = "http://localhost:3000/api/cats";
  it("should return status code 200", (done) => {
    request(url, (error, response, body) => {
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
  it("should return non-empty response body", (done) => {
    request(url, { json: true }, (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body).to.be.an("object");
      done();
    });
  });
  it("response data should be an array", (done) => {
    request(url, { json: true }, (error, response, body) => {
      expect(body.data).to.be.an("array");
      done();
    });
  });

  it("response body message should be 'cats fetched successfully'", (done) => {
    request(url, { json: true }, (error, response, body) => {
      expect(error).to.be.null;
      expect(response.statusCode).to.equal(200);
      expect(body).not.to.be.empty;
      expect(body.message).to.equal("cats fetched successfully");
      done();
    });
  });
});
