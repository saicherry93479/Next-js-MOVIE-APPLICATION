import Head from "next/head";
import { Fragment } from "react";
import Header from "../components/header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

const Home = ({ results }) => {
  return (
    <Fragment>
      <Head>
        <title>Hulu App</title>
      </Head>
      <Header />
      <Nav />
      <Results resultss={results} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // console.log(request[genre].url);
  const reque = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fecthTrending.url
    }`
  );
  const reqRes = await reque.json();

  return {
    props: {
      results: reqRes.results,
    },
  };
}

export default Home;
