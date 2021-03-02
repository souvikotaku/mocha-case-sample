require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator"
    ]
})
require("wohlig-framework-core")
var chai = require("chai")
    chaiHttp = require("chai-http")

chai.use(chaiHttp)
global.adminUrl = env.url + ":" + env.port + "/"

userApi = require("./userTest.js")





