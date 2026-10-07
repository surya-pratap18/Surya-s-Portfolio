import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    key: { type: String, unique: true },
    data: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true },
);
export default mongoose.model("Portfolio", schema);
