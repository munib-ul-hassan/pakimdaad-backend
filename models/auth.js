const mongoose = require("mongoose");
const auth = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    phone: Number,
    gender: String,
    address: String,
    city: String,
    postal_code:Number,
    password: String,
    nic:Number,
    image:String,   


  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", auth);
