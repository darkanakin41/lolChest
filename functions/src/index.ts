// import * as functions from 'firebase-functions';
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors');
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
