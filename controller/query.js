const query = require('../models/query')

exports.createquery = async (req, res) => {
  try {
    
    // req.body.user_id = req.user._id;
    const { first_name,last_name, from_where, address, nic, height, color, ideal_identity, age } = req.body
    if (!(first_name&&last_name && from_where && address && nic
      && height && color && ideal_identity && age)) {
      res
        .status(200)
        .send({ message: "All input is required", success: false });
    } else {
      
      const Query = new query(req.body);
      Query.save().then((data) => {
        res.status(200).json({
          success: true,
          message: "Query saved successfully",
          data: data
        });

      })
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}
exports.updatequery = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      res
        .status(200)
        .send({ message: "Query id is required", success: false });
    } else {
      query.findOne({ _id: id }, (err, data) => {
        if (!data) {
          res
            .status(200)
            .send({ message: "This report is not exist", success: false });
        } else {
          
          query.updateOne({ _id: id },req.body, (err, result) => {
            if (result) {
              res
                .status(200)
                .send({ message: "Query Updated Successfully", data: result, success: false });
            }
          })
        }
      })
    }

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}
exports.getquery = async (req, res) => {
  try {
    if (req.query) {
      query.find(req.query, (err, data) => {
        if (err) {
          res
            .status(200)
            .send({ message: err.message, success: false });
        } else {
          if (data.length == 0) {
            res
              .status(200)
              .send({ message: "No data Exist", success: false });
          } else {
            res
              .status(200)
              .send({ message: "Data fetch successfully", data: data, success: false });
          }
        }
      })
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}
exports.deletequery = async (req, res) => {
  try { } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

exports.uploadImage = async (req,res)=>{
  try{
    const arr= []
    
    req.files?.map(item=>arr.push(item.filename))
    res.status(200).json({
      success: true,
      message: "Image uploaded Successfully",
      data:arr
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}