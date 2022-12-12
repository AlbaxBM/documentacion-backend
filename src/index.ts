import express from 'express';
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json())

const port = process.env.PORT

//routers

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});