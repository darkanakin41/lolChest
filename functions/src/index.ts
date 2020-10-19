import {Response} from "express";
import {Request} from "firebase-functions/lib/providers/https";

const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

exports.cors = functions.https.onRequest((request: Request, response: Response) => {
  cors(request, response, () => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Credentials', 'true');
  })
});
