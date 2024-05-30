import mongoose, { Mongoose } from "mongoose";

//defining the schema
const moviesSchems = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    ratings: {type: Number,required: true, min: 1, max: 5},
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v=> v >= 10,
    },
    genre: { type: Array},
    isActive: { type: Boolean},
    comments:[
        {value:{type: String}, published: {type: Date, default: Date.now} },
    ],
});


//creating model

const MovieModel = mongoose.model('Movie', moviesSchems);

// const cereateDOC = async () =>{
//     try {
//         const m1 = new MovieModel({
//             name: "Extraction 2",
//             ratings: 4,
//             money: 60000,
//             genre:['action', 'adventure'],
//             isActive: true,
//             comments: [ {value: "that was an amzing movie"} ]

//         });

//         const result = await m1.save();
//         console.log(result);
// //creating new document

//     } catch (error) {
//         console.log("error");
        
//     }
// }


//Inserting Many

// const InsertManyDocs = async () =>{
//     try {
//         const m1 = new MovieModel({
//             name: "Extraction 2",
//             ratings: 4,
//             money: 60000,
//             genre:['action', 'adventure'],
//             isActive: true,
//             comments: [ {value: "that was an amzing movie"} ]

//         });
//         const m2 = new MovieModel({
//             name: "Herny porter",
//             ratings: 5,
//             money: 68500,
//             genre:['action'],
//             isActive: true,
//             comments: [ {value: "Henry Porter does unrealistic htings"} ]

//         });
//         const m3 = new MovieModel({
//             name: "Unexpendable 2",
//             ratings: 5,
//             money: 125000,
//             genre:['action', 'drama'],
//             isActive: true,
//             comments: [ {value: "All stars movie"} ]

//         });
//         const m4 = new MovieModel({
//             name: "Karma 2",
//             ratings: 3,
//             money: 9000,
//             genre:['action', 'drama'],
//             isActive: true,
//             comments: [ {value: "Movie under Masu's Production"} ]

//         });
//         const m5 = new MovieModel({
//             name: "Kapuni 2",
//             ratings: 4,
//             money: 13000,
//             genre:['action', 'drama'],
//             isActive: true,
//             comments: [ {value: "Movie under Lamata's Production"} ]

//         });

//         const result = await MovieModel.insertMany([m1, m2, m3 ,m4 ,m5]);
//         console.log(result);

//     } catch (error) {
//         console.log("error");
        
//     }
// };


// retrieving all data 

// const AllDocs = async () =>{
//     try {
//         const result = await MovieModel.find();
//         // console.log(result);

//         console.clear();
//         //iterating over
//         result.forEach((movie) =>{
//             console.log(movie.money);
//         })



//     } catch (error) {
//         console.log("error");
        
//     }
// };


//retrieving single Doc

const SingleDoc = async () =>{
    try {
        const result = await MovieModel.findById("665850c7aaa4017b390d1fba");
        console.log(result);

    } catch (error) {
        console.log("error");
        
    }
};

export default SingleDoc;