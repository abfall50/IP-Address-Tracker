import Head from "next/head";
import { useState } from "react";
import InfoBox from "../components/InfoBox";
import InputField from "../components/InputField";
import Map from "../components/Map";

export default function Home({ data }: any) {
  const [location, setLocation] = useState<any>(data);

  return (
    <>
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>IP Address Tracker</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className="w-full h-2/5 bg-[url('../public/pattern-bg.png')] bg-no-repeat bg-cover bg-center lg:h-[35%]"></div>
      <Map location={location} />
      <div className="w-full h-3/5 top-0 left-0 absolute flex justify-center">
        <div className="w-5/6 h-full flex flex-col justify-center items-center lg:w-full">
          <div className="w-full h-1/6 flex justify-center items-center">
            <span className="font-[Rubik] text-2xl text-white font-semibold lg:text-5xl">
              IP Address Tracker
            </span>
          </div>
          <InputField setLocation={setLocation} />
          <InfoBox location={location} />
        </div>
      </div>
    </div>
    </>
  );
}

/**
 * It fetches the user's location data from the ipify API and returns it as props to the page
 * @returns An object with a property called props.
 */
export async function getServerSideProps() {
  const data = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
