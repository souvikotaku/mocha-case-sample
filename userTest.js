const assert = require("chai").assert

var expect = require('chai').expect;


describe('user model', function() {
        var user = {}

    it("User found but mobile is not verified", function(done) {
        var data = {
            name: "newone",
            email: "demo123456@demo.com",
	        mobile:"7738551072",
            mobileVerified: false
        }
        chai.request('http://localhost:3000/user')
            .post("/signup")
            .send(data)
            .end(function(err, res) {
                user = res.body
                assert.equal(res.statusCode, 200)
                done()
            })
    })
    it("User already Exists with Same Mobile Number", function(done) {
        var data = {
            name: "souvik",
            email: "souvik@gmail.com",
	        mobile:"+919123332112",
            mobileVerified: true

        }
        chai.request('http://localhost:3000/user')
            .post("/signup")
            .send(data)
            .end(function(err, res) {
                user = res.body
                assert.equal(res.statusCode, 500)
                expect(data.mobile).to.equal("+919123332112")
                done()
            })
    })
    it("User already Exists with Same Email", function(done) {
        var data = {
            name: "souvik",
            email: "souvik@gmail.com",
	        mobile:"+919123332112",
            mobileVerified: true

        }
        chai.request('http://localhost:3000/user')
            .post("/signup")
            .send(data)
            .end(function(err, res) {
                user = res.body
                assert.equal(res.statusCode, 500)
                expect(data.email).to.equal("souvik@gmail.com")
                done()
            })
    })
    it("Update the email and mobile number of the same user and store it", function(done) {
        var data = {
            name: "Chintan",
            email: "chintan@wohlig.com",
	        mobile:"+919819222221",
            mobileVerified: true

        }


        chai.request('http://localhost:3000/user')
            .post("/signup")
            .send(data)
            .end(function(err, res) {
                user = res.body
                assert.equal(res.statusCode, 200)
                expect(data.mobileVerified).to.equal(true)
                done()
            })
    })
    
    

});
