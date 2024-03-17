import  express  from "express";
import  dotenv from "dotenv";
import mongoose from "mongoose"
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";

dotenv.config()

const app = express();

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connect the MongoDB');
      } catch (error) {
      throw error;
      }
}

mongoose.connection.on('Connect',()=>{
    console.log('MongoDB connect');
});


mongoose.connection.on('Desconnect',()=>{
    console.log('MongoDB Desconnect');
});


//middLewares

app.use(express.json());

app.use("/api/auth",authRouter);

app.use("/api/users",usersRouter);

app.use("/api/hotels",hotelsRouter);


app.use("/api/rooms",roomsRouter);

app.listen(8800,()=>{
    connect()
    console.log('Conectado  ao backend')
});

app.get("/reservas",(req,res)=>{
res.send(200,"OK");
});