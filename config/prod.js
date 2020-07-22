const { AWSAccessKeyID } = require("./dev");

module.exports ={
    MongoDB : process.env.MongoDB,
    FacebookAppID: process.env.FacebookID,
    FacebookAppSecret: process.env.FacebookSecret,
    GoogleClientID: process.env.GoogleID,
    GoogleClientSecret: process.env.GoogleSecret,
    AWSAccessKeyID: process.env.AWS_ACCESS_KEY,
    AWSSecretAccessKey: process.env.AWS_ACCESS_SECRET

};