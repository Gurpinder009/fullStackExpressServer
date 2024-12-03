import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  user_name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const CollectionModel = mongoose.model("admin_users", collectionSchema);
export default AdminModel;
