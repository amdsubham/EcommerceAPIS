const mogoose = require('mongoose')

const { DB_CON_STRING } = process.env


module.exports = () => {
    console.log(DB_CON_STRING)
    // mogoose.connect("mongodb://localhost/ecommerce")
    mogoose.connect(DB_CON_STRING)
        .then(() => console.log('DB Connection Successfull'))
        .catch(err => console.log(err.message))
}