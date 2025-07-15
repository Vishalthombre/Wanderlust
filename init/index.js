const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://vishalthombre42:Bbh8I7PpjizEir0U@dataset1.61vvfpx.mongodb.net/?retryWrites=true&w=majority&appName=Dataset1"

main().then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "6876a6563ca73b80ee3e0e24",
    geometry: {
      type: "Point",
      coordinates: [77.2090, 28.6139], // Dummy coordinates (Longitude, Latitude) — can be real if needed
    },
  }));

  await Listing.insertMany(initData.data);
  console.log("✅ Database initialized with dummy geometry.");
};

initDB();