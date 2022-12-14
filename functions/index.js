import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getDogs, testApi } from './src/dogs.js'

const app = express()
app.use(cors()); // tells it to allow cross-origin resource sharing
app.use(express.json())// allows posts with JSON bodies

// now we setup some routes
app.get('/dogs',getDogs)

app.get('/test', testApi)

//instead of app.listen to a port
// we need to 1. create a cloud function 2. point it to "app"
export const api = functions.https.onRequest(app)




















// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
