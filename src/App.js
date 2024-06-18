import logo from "./logo.svg";
import logo_with_text from "./logo_with_text.svg";

function App() {
  return (
    <div className="bg-[#e0dcdd] min-[1024px]:bg-[url('./back.webp')] min-[1024px]:bg-cover min-[1024px]:bg-[60%_top] min-h-[100vh] flex flex-col justify-center items-center p-[16px] min-[1024px]:p-[2vw] text-center">
      <a href="/">
        <img
          src={logo_with_text}
          className="hidden min-[1360px]:block absolute top-[3vh] left-[6vw] h-[197px]"
        />
      </a>
      <header className="min-[1024px]:max-w-[660px] min-[1360px]:max-w-[800px] w-full min-h-[calc(100vh_-_32px)] min-[1024px]:min-h-[75vh] bg-white rounded-2xl shadow-xl ml-auto mr-auto min-[1024px]:mr-[6vw] flex flex-col justify-center items-center">
        <img src={logo} className="h-[40vh] pointer-events-none" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb]"
          href="https://preactjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </header>
    </div>
  );
}

export default App;
