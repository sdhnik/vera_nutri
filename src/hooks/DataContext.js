import { createContext } from "preact";
import { useState, useEffect, useContext } from "preact/hooks";

import keys from "../locales/en.json";

import { ShemaLevels } from "../shema";

const DataContext = createContext();

const defaultKeys = Object.fromEntries(
  Object.entries(keys).map(([key, _]) => [key, null])
);

export const DataProvider = ({ children }) => {
  const [pages, setPages] = useState(1);
  const [prev, setPrev] = useState(false);
  const [finish, setFinish] = useState(false);
  const [data, setData] = useState({
    ...defaultKeys,
  });

  const changePage = (number) => {
    setPrev(number < pages);
    setPages(number);
  };

  const changeData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const sendData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    ShemaLevels.forEach((shema, shemaIndex) => {
      const urlencoded = new URLSearchParams();

      shema.forEach((key, index) => {
        if (!index) {
          urlencoded.append("sheetName", key);
        } else {
          urlencoded.append(keys[key], data[key]);
        }
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        mode: 'no-cors',
        redirect: "follow",
      };
  
      fetch(
        "https://script.google.com/macros/s/AKfycbz3w0eDJT94IawEo4BkgqLwEBAwUuJr9F6h3Qgzvqh392F3sKq3CyQg6Sou30cWblUt/exec",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          if (shemaIndex === ShemaLevels.length - 1)
            setFinish(true);
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  };

  return (
    <DataContext.Provider
      value={{ pages, changePage, data, changeData, sendData, prev, finish }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
