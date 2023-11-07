import mongoose, { connection } from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connextion = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("errors", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Someting goes wrong !!");
  }
}
