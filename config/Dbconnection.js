const mongoose = require('mongoose')

const dbConnection = (value)=>{
    mongoose.connect(value)

    mongoose.connection.on("connected",()=>{
        consola.success("connection establised successfully ")
    })

    mongoose.connection.on("error",(err)=>{
        consola.error(err)
    })

    mongoose.connection.on("disconnected",()=>{
        consola.info("database is temporary disconnected ")
    })
}

module.exports = dbConnection