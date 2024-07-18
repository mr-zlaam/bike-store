"use client";

import { account } from "@/appwrite/appwrite";
import { Button } from "@/components/ui/button";

function Home() {
  async function details() {
    try {
      const session = await account.get();
      console.log(session);
    } catch (error: any) {
      console.log(error);
    }
  }
  console.log("hello world");
  return (
    <>
      <section className="text-red-500">Home</section>
      <Button onClick={details}>get Details</Button>
    </>
  );
}

export default Home;
