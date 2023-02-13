import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client;
let clientPromise;

console.log('connecting to db');
client = new MongoClient(uri, options)
clientPromise = client.connect();
console.log('db connected');

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
// export default clientPromise;


export const getDb = async () => {

  	let db = null;

	try {
		client = await clientPromise;
		db = client.db("nextcrm");
	} catch (e) {}

  	return db;
}

export const closeDb = async () => {

	try {
		console.log('closing db');
		client.close();
		console.log('db closed');
	} catch (e) {}
}