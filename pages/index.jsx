import Link from "next/link";
import dbConnect from "../lib/dbConnect";
import Pet from "../src/models/Pet";

const Index = () => <div></div>;

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  return { props: {} };
}

export default Index;
