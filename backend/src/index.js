import {app} from './app.js'
import dotenv from 'dotenv';
import {dbConnection} from './db/index.js'

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 3000

dbConnection()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})