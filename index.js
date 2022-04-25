// const express=require("express");
// const app=express();
// const dotenv=require("dotenv");
// const mongoose=require("mongoose");
// const authRoute=require("./routes/auth");
// const userRoute=require("./routes/users");
// const postRoute=require("./routes/posts");
// const categoryRoute = require("./routes/categories");
// const multer = require("multer");
// const path= require("path");
// const router = require("./routes/categories");

// dotenv.config();
// app.use(express.json());
// app.use("/images",express.static(path.join(__dirname,"/images"))) 
// //sucessfully connected mongodb
// mongoose.connect(process.env.MONGO,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true, 
//     // useFindAndModify:true  
//     // useCreateIndex:true, 
// }).then(console.log("connected to mongoDB"))
//   .catch(err=>console.log(err));


//   const storage = multer.diskStorage({
//     // destination: (req, file, cb) => {
//       destination: 'images',
//     // },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname+'_'+Date.now()+path.extname(file.originalname));
//     },
//   });

//   const upload = multer({ storage: storage });
//     router.post("/uploadImage", upload.single("file"), (req, res) => {
//     res.status(200).json("File has been uploaded");
//     res.send(req.file)
//     });

//   app.use("/api/auth",authRoute);
//   app.use("/api/users",userRoute);
//   app.use("/api/posts",postRoute); 
//   app.use("/api/categories", categoryRoute);

//   app.use(express.static(path.join(__dirname, "/client/build")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

// app.use("/",(req,res)=>{
//     console.log("bhavana url");
// })

// app.listen(process.env.PORT || 5000,()=>{
//     console.log("app is running");
// }) 



const express=require("express");
const app=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path= require("path")

dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images"))) 
//sucessfully connected mongodb
mongoose.connect(process.env.MONGO,{
    useNewUrlParser:true,
    useUnifiedTopology:true, 
    // useFindAndModify:true  
    // useCreateIndex:true, 
}).then(console.log("connected to mongoDB"))
  .catch(err=>console.log(err));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname+'_'+Date.now()+path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });
    app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
    });

  app.use("/api/auth",authRoute);
  app.use("/api/users",userRoute);
  app.use("/api/posts",postRoute); 
  app.use("/api/categories", categoryRoute);

  app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.use("/",(req,res)=>{
    console.log("bhavana url");
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("app is running");
}) 