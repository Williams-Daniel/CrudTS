import mongoose from "mongoose";

const DB_URL: string = "mongodb://0.0.0.0:27017/BOOKSTORE";

mongoose.connect(DB_URL);

mongoose.connection
  .on("open", () => {
    console.log("");
    console.log("Database is connected");
  })
  .once("error", () => {
    console.log("An error occured in connecting dayabase");
  });

export default mongoose;
