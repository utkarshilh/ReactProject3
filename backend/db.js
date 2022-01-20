const mangoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const connectToMongo = () => {
    mangoose.connect(mongoURI, () => {
        console.log("connected sucessfully");
    })
}
module.exports = connectToMongo;
