import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div className={`overflow-x-hidden`}>
      <Head>
        <title>RADIO VAULTS</title>
      </Head>
      <LandingPage/>
    </div>
  );
}
