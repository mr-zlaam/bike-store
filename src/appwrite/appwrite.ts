import { Account, Client } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_BACKEND_URI as string)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);
// * Account
export const account = new Account(client);
export { ID as appwriteId } from "appwrite";
