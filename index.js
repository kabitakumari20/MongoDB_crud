const  mongoose = require("mongoose")
// connection creation and creatin a new db

mongoose.connect('mongodb://localhost:27017/store_data',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>console.log("connection succesful...."))
  .catch((err=>console.log(err)));
  // schema defines the structure of document default value ,validators etc/.
  const dataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    live:Boolean,
    date:{type:Date,default:Date.now}
  })
  // A Mongoose model is a wrapper on the Mongoose schema.
  //  A Mongoose schema defines the structure of the document, 
  // default values, validators, etc., whereas a Mongoose model provides an 
  // interface to the database for creating, querying, updating, deleting records, etc
  // collection creation
  const Data=new mongoose.model("Data",dataSchema)
  const createDocument=async()=>{
try{
  
  // Insert a document
  const data_storing=new Data({
    name:"manvi",
    age:23,  
    live:true,
  

  
  })
  const learning=new Data({
    name:"express",
    age:2,
    live:true,
  
  })
  const data1=new Data({
    name:"kabita",
    age:1,
    live:true,
  })

  const result=await Data.insertMany([data_storing,learning,data1]);
  // console.log(result)
}catch(err){
  console.log(err);
}
  }
  createDocument();

  //read data --------------------

  const getDocument=async  () =>{
    // for all data
    const result=await Data.find()
    // for particular data
    // const result=await Data.find({name:"manvi"})
    console.log(result)
    console.log("all data read")

  }

  getDocument();

createDocument()

// for updating data----------------------------


const updateDocument = async (_id) =>{
  try{
    const result = await Data.findByIdAndUpdate({_id},{
      $set :{
        name:"kabita kumari"
      }
    },{
      new:true,
      useFindAndModify:false
    });
    // console.log(result);
    // console.log("update data successfully")
  }catch(err){
    console.log(err)
  }
}

updateDocument ("61c2a5b99c956ed43fdd5502")

const deleteDocument =  async (_id)=>{
  try {
    const result = await Data.findByIdAndDelete({_id});
  
    // console.log(result)
    // console.log("data delete successfully")

  }catch(err){
    console.log(err)
  }
 
}
deleteDocument("61c2a6398fb82d4b0fc4460f")