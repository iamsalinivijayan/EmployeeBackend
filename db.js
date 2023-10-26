
const express = require('express');
const mongoose = require('mongoose');

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbURL = process.env.MONGO_URI

async function run() {
  try{
  await mongoose.connect(dbURL, connectionParams);
  console.log("Connected to the DB");
  }finally {
  }
} 
module.exports = {run}