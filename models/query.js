const { object } = require("joi");
const mongoose = require("mongoose");
const query = mongoose.Schema(
  {
    user_id: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users"
    }],
    first_name: String,
    last_name: String,
    email:String,
    contact:String,
    from_where: String,
    address: String,
    nic: String,
    images: [],
    heght: String,
    color: String,
    info: String,
    ideal_identity: String,
    age: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("query", query);
