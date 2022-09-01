const express = require('express')
const app = express()
const router = express.Router()
const consola = require('consola')
const mongoose = require('mongoose')

const {Schema,model} = require('mongoose')
const dbConnection = require('./Dbconnection')
require('dotenv').config()


// swagger 



const portConnection = function(value){
    app.listen(value,(err)=>{
        if(err) throw err;
        consola.info(`server is working fine ofn port ${value}`)
    })
}






module.exports = {app,router,express,consola,portConnection,dbConnection,Schema,model,mongoose} 