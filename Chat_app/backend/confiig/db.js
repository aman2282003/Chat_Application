const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL, {});
    console.log(`Mongodb connected succesfully: ${con.connection.host}`);
  } catch (error) {
    console.log(`error ${error.message}`);
    process.exit();
  }
};

module.exports = connectDb;
