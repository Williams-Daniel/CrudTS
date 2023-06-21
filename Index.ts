import express,{Application} from "express"
import router from "./Router/BookRouter"

const port:number = 4455

const app:Application = express()

app.use(express.json())
.use("/api",router)

app.listen(port,()=>{
    console.log("")
    console.log(`server is running and listening to port on ${port}`)
})