import { NextPage } from "next";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Arrow from "../public/icon-arrow.svg";

interface InputFieldProps {
  setLocation: Dispatch<SetStateAction<any>>;
}

const InputField: NextPage<InputFieldProps> = (props) => {
  const { setLocation } = props;

  const [inputValue, setInputValue] = useState("");

  /**
   * We're using the ipify API to get the location of the user's IP address
   * @returns The location of the IP address.
   */
  const onSubmit = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${inputValue}&domain=${inputValue}`
    );
    setInputValue("");

    if (res.status !== 200) {
      const current = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.IPIFY_API_KEY}`
      ).then((res) => res.json());
      setLocation(current);
      return;
    }

    const data = await res.json();
    setLocation(data);
  };

  return (
    <>
      <div className="w-full h-1/6 flex items-center lg:w-2/5">
        <input
          className="w-5/6 h-4/5 font-normal font-[Rubik] text-lg border-0 rounded-tl-2xl rounded-bl-xl outline-none pl-4 lg:text-xl"
          type="text"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-1/6 h-4/5 bg-black border-0 rounded-tr-xl rounded-br-2xl flex justify-center items-center lg:hover:bg-[#2B2B2B]"
          onClick={onSubmit}
        >
          <Image src={Arrow} alt="Arrow"></Image>
        </button>
      </div>
    </>
  );
};

export default InputField;
