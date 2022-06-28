import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import productRoute from './routes/product.js'
import cartRoute from './routes/cart.js'
import orderRoute from './routes/order.js'



const app = express()

mongoose.pluralize(null);

dotenv.config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })) 
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Connected to DB"))
.catch(err => {
    console.log(err)
})


app.get('/api/v2', () => {
    console.log("test is successfull")
})



app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running")
})
