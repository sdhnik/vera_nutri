import { h } from "preact";
import logo_with_text from "./assets/imgs/logo_with_text.svg";

import { useData } from "./hooks/DataContext";

import LangSwitch from "./components/LangSwitch";
import Home from "./views/Home";
import Level1 from "./views/Level1";
import Level2 from "./views/Level2";
import Level3 from "./views/Level3";
import Level4 from "./views/Level4";
import Level5 from "./views/Level5";
import Level6 from "./views/Level6";
import Level7 from "./views/Level7";
import Level8 from "./views/Level8";
import Finish from "./views/Finish";

const Layout = () => {
  const { pages, finish } = useData();

  const showPage = {
    1: <Home />,
    2: <Level1 />,
    3: <Level2 />,
    4: <Level3 />,
    5: <Level4 />,
    6: <Level5 />,
    7: <Level6 />,
    8: <Level7 />,
    9: <Level8 />,
  };

  return (
    <div className="bg-[#e0dcdd] min-[1024px]:bg-[url('./assets/imgs/back.webp')] min-[1024px]:bg-cover min-[1024px]:bg-[60%_top] min-h-[100vh] flex flex-col justify-center items-center p-[16px] min-[1024px]:p-[2vw] text-center">
      <a href="/vera_nutri/">
        <img
          src={logo_with_text}
          className="hidden min-[1360px]:block absolute top-[3vh] left-[6vw] h-[197px]"
        />
      </a>
      <header className="relative min-[1024px]:max-w-[660px] min-[1360px]:max-w-[800px] w-full min-h-[calc(100vh_-_32px)] min-[1024px]:min-h-[80vh] bg-white rounded-2xl shadow-xl ml-auto mr-auto min-[1024px]:mr-[6vw] flex flex-col justify-center items-center p-[24px] min-[1024px]:p-[48px]">
        {finish ? <Finish /> : showPage[pages]}

        <LangSwitch className="absolute top-[24px] right-[24px]" />
      </header>
    </div>
  );
};

export default Layout;
