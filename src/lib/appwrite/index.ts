import { Client, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("688e09f10017621d279b");

const databases = new Databases(client);

export { databases };
