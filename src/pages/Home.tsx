import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import homeimg1 from "../assets/homeimg1.png";
import homeimg3 from "../assets/homeimg3.png";
import homeimg2 from "../assets/homeimg2.png";
import homeimg4 from "../assets/homeimg4.png";
import homeimg5 from "../assets/homebg.svg";
type Props = {};

export default function Home({}: Props) {
  return (
    <div
      className="relative w-full h-full px-28 "
      style={{
        backgroundImage: "linear-gradient(299deg, #ffdbd4, #e9f7ff 90%)",
      }}
    >
      {/* <div className="bg-white absolute right-0 top-0 rounded-full w-[900px] h-[900px] z-[-1]"></div> */}
      <Navbar />
      <div className="relative  z-10 flex my-14 h-[550px]">
        <div className="z-10 relative flex flex-col justify-center flex-1 gap-10">
          <h1 className="text-6xl font-bold leading-[80px] ">
            Lets build <PrimaryColorText>your</PrimaryColorText> next{" "}
            <PrimaryColorText>big</PrimaryColorText> idea
          </h1>
          <p className="text-xl ">
            We at Techlego bring together the most current knowledge in No-Code
            Development and Product Management to build Top-notch applications.
            Thanks to our love for Startups, we make a terrific team for
            Innovative ideas
          </p>
          <div className="flex gap-2">
            <Button>Get Started</Button>
            <Button>Our Service</Button>
          </div>
        </div>
        <div className="z-10 relative flex-1 flex h-full ">
          <img src={homeimg1} className="z-5 h-[420px] m-auto" alt="" />
          <img
            src={homeimg5}
            className="z-[-1] h-[420px] px-auto py-auto absolute m-auto"
            alt=""
          />
          <div className="z-5">
            <img
              className=" absolute top-0 left-10 h-36"
              src={homeimg2}
              alt=""
            />
            <img
              className=" absolute bottom-10 right-10 h-36"
              src={homeimg3}
              alt=""
            />
            <img
              className=" absolute bottom-10 left-10 h-36"
              src={homeimg4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function PrimaryColorText({ children }: any) {
  return <span className="text-purple-500">{children}</span>;
}
