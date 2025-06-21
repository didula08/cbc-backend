import express from 'express';  
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import jwt from 'jsonwebtoken';




let app = express();

app.use(bodyParser.json());

app.use(
    (req,res,next)=>{
        const tokenString = req.header("Authorization")
        if(tokenString != null){
            const token = tokenString.replace("Bearer ", "")

            jwt.verify(token,"cbc-batch-five#@2025", 
                (err,decoded)=>{
                    if(decoded != null){
                        req.user = decoded
                        next()
                    }else{
                        console.log("invalid token")
                        res.status(403).json({
                            message : "Invalid token"
                        })
                    }
                }
            )

        }else{
            next()
        }
    }
)
mongoose.connect("mongodb+srv://admin:123@cluster0.igwzw8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

app.use("/Users", userRouter);
app.use("/products",productRouter);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});