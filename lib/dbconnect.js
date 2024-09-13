import { MongoClient } from "mongodb";

export async function dbConnect() {
  const client = new MongoClient(
    '"mongodb+srv://eventor:ka1amani|<@cluster0.km2vh9e.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0"'
  );
  return client;
}
