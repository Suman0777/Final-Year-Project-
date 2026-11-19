import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGOBD_URL, {
            serverSelectionTimeoutMS: 5000,
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

const ReportSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    describtion:{
        type: String,
        required: true
    },
    reporttype:{
        type: String,
        required: true
    }
})

const Report = mongoose.model("Report", ReportSchema);

export default Report;