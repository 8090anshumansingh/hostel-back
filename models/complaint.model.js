import mongoose from "mongoose";

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    complaints: [
      {
        name: { type: String },
        studentId: { type: String },
        complaint: { type: String },
        type:{type:String},
        role:{type:String}
      },
    ],
  });

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;