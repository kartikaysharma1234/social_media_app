// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routing/user-routes";
// import postRouter from "./routing/post-routes";
// import cors from "cors";

// const app = express();
// dotenv.config();

// // middlewares
// app.use(cors());
// app.use(express.json());
// app.use("/user", userRouter);
// app.use("/posts", postRouter);

// // connections
// mongoose
//   .connect(
//     `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.lmtecrc.mongodb.net/?retryWrites=true&w=majority`
//   )
//   .then(() =>
//     app.listen(5000, () =>
//       console.log("Connection Succesfull  & Listening to localhost Port 5000")
//     )
//   )
//   .catch((err) => console.log(err));




import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);





// connections
mongoose.connect(
  `mongodb+srv://kartikaysharma1234:Kd&gversus123@cluster0.lvrry.mongodb.net/traveldiaries`
)
.then(() => 
app.listen(5000, () => {
  console.log("Connection Successful && listening to local host port 5000");
})
).catch(err=>console.log(err))
 



