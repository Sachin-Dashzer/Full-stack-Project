import connectdb from "./db/index.js";
import express from 'express';

const app = express();

const PORT = process.env.PORT || 8000;

connectdb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log(err)
})