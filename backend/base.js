const { default: mongoose } = require('mongoose')
const uri = "mongodb+srv://Likkash:AishwaryaLikkash@cluster0.9qjid0n.mongodb.net/HospitalTask?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri,clientOptions)



// const mongoose = require('mongoose');
// const uri = "mongodb+srv://Likkash:AishwaryaLikkash@cluster0.9qjid0n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
// const run=async()=>{
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);