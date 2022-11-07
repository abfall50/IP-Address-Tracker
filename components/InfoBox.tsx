import { NextPage } from "next";

interface InfoBoxProps {
  location: any;
}

function BoxField(props: any) {
  return (
    <div className="w-full h-1/4 flex flex-col justify-center items-center lg:h-full lg:items-start lg:pl-5 lg:pr-2 lg:pt-8 lg:gap-2 lg:justify-start">
      <span className="font-[Rubik] text-xs tracking-widest font-normal text-[#969696] lg:font-semibold lg:text-sm">
        {props.name}
      </span>
      <span className="font-[Rubik] text-xl font-semibold tracking-wide text-center overflow-hidden lg:font-bold lg:text-2xl lg:text-left">{props.info}</span>
    </div>
  );
}

const InfoBox: NextPage<InfoBoxProps> = (props) => {
  const { location } = props;

  return (
    <>
      <div className="w-full h-4/6 flex justify-center items-center md:w-2/3 lg:w-4/5 lg:items-start pt-14">
        <div className="w-full h-[85%] bg-white border-0 rounded-2xl flex flex-col justify-center items-center lg:flex-row lg:h-1/2">
          <BoxField info={location?.ip} name="IP Address"></BoxField>
		  <div className="w-0 h-1/2 border border[#969696] hidden lg:block"></div>
          <BoxField info={`${location.location.city}, ${location.location.country} ${location.location.postalCode}`} name="Location"></BoxField>
		  <div className="w-0 h-1/2 border border[#969696] hidden lg:block"></div>
          <BoxField info={`UTC ${location.location.timezone}`} name="Timezone"></BoxField>
		  <div className="w-0 h-1/2 border border[#969696] hidden lg:block"></div>
          <BoxField info={location.isp} name="ISP"></BoxField>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
