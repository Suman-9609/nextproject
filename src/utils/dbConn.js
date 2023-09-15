import mongoose from "mongoose";

// const MONGODB_URL = process.env.MONGODB_URI;
const MONGODB_URL =
  "mongodb+srv://nextApp:fRtNMl7LEHnp8gZN@cluster0.840lkyq.mongodb.net/userdata?retryWrites=true&w=majority";

if (!MONGODB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { con: null, promise: null };
}

const dbConn = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection does not exist, we check if a promise is already in progress. If a promise is already in progress, we wait for it to resolve to get the connection
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default dbConn;