import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin123a:admin123a@cluster0.yudvymo.mongodb.net/membership?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
