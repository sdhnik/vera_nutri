import { h, render } from "preact";
import { LanguageProvider } from "./hooks/LanguageContext";
import { DataProvider } from "./hooks/DataContext";

import Layout from "./Layout";

import "./index.css";

render(
  <DataProvider>
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  </DataProvider>,
  document.getElementById("app")
);
