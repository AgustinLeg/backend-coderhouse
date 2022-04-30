const mongoose  = require('mongoose');

const connect = async () => {
  try {
    console.log(process.env.DB_CONNECTION)
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('💾 MongoDB connected');
    
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to database');
  }
    
}

module.exports = {
  connect
}