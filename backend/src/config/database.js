import { connect } from 'mongoose';
import process from 'node:process';

async function configureDatabase(_, maxRetries = 5, delay = 2000) {
  const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp';
  let attempts = 0;

  const connectWithRetry = async () => {
    try {
      await connect(dbURI);

      console.log('MongoDB connected successfully');
    } catch (err) {
      attempts += 1;

      console.log(`MongoDB connection error (attempt ${attempts}): `, err);

      if (attempts > maxRetries) {
        console.log('MongoDB connection failed after maximum retries: ', err);
        process.exit(1);
      }

      console.log(`Retrying in ${delay / 1000} seconds...`);

      setTimeout(connectWithRetry, delay);
      delay *= 2; // Exponential backoff
    }
  };

  await connectWithRetry();
}

export default configureDatabase;
