import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 4,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
