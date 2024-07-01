import { Button } from "./ui/button";
import logoimg from '../assets/logo2.png'
const TABS = [
  {
    name: "Home",
  },
  {
    name: "Company",
  },
  {
    name: "Service",
  },
  {
    name: "Hire",
  },
];
function Navbar() {
  return (
    <div className="z-10 flex gap-2 pt-10 mx-auto justify-between items-center w-[1200px]">
      <div>
        <img src={logoimg} className="w-[100px] "/>
      </div>
      <div className="flex gap-6">
        {TABS.map((tab) => (
          <div className="font-bold text-xl  cursor-pointer">
            <div>{tab.name}</div>
          </div>
        ))}
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Navbar;
