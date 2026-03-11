import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todoroutes from './routes/routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoroutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
