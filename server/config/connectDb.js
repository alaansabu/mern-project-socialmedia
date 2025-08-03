const mongoose = require('mongoose');

const connectDb = async()=>{

try {

    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection succesfull✅✅✅ ${connect.connection.host}`);
    
    
} catch (error) {
    console.log(`connection failed❌❌❌`,error)
    process.exit(1)

}


}
module.exports = connectDb;