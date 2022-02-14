import type { NextPage } from "next";
import { Head } from "next/document";
import Bio from "./bio";

const Home: NextPage = () => {
  return (
    <>
      <Bio />;
    </>
  );
};

export default Home;
