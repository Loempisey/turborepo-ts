import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';


const app: Express = express()
const server = http.createServer(app);
const PORT: string | number = process.env.PORT || 5000

dotenv.config({path: 'nodemon.json'})
app.use(morgan('tiny'))

app.use(express.json());

app.use(express.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     // set the CORS policy
//     res.header('Access-Control-Allow-Origin', '*');
//     // set the CORS headers
//     res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
//     // set the CORS method headers
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
//         return res.status(200).json({});
//     }
//     next();
// });

app.use(cors())

app.get('/', (req: Request, res: Response)=>{
    res.send('WELCOME TO TURBOREPO')
})

server.listen(PORT, ():void=>{
    console.log(`Server is starting on port http://localhost:${PORT}`)
})