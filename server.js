const {portConnection,dbConnection, app, express,cors} = require('./config')
const categoryRoute = require('./routes/categoryRoute')
const skillaryRoute = require('./routes/skillaryRoute')

// need static middleware

app.use(cors({
    origin: ['http://127.0.0.1:5500']
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())


// default middleware 

app.use('/category',categoryRoute)
app.use('/category',skillaryRoute)


app.all("*",(req,res,next)=>{
    res.status(404).json({
        status:'fail',
        message:`the page ${req.originalUrl} not found `
    })
}),



portConnection(process.env.PORT)



dbConnection(process.env.LOCAL)