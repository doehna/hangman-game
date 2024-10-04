import React, { useEffect, useState } from "react";
import Keyboard from "../Keyboard/Keyboard";
import Phrase from "../Phrase/Phrase";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "./Home.module.css";
import useFetch from "../../hooks/useFetch";
import { ENDPOINT } from "../../constants";

function Home() {
  const { jsonData, isLoading } = useFetch(ENDPOINT);
  const [data, setData] = useState(null);
  const [phrase, setPhrase] = useState(null);

  useEffect(() => {
    if (jsonData) {
      setData(jsonData.categories);
    }
  }, [jsonData]);

  useEffect(() => {
    const setElementAsSelected = (category, phrase) => {
      if (!data || !Array.isArray(data[category])) {
        return;
      }

      const newData = {...data};
      const selectedElement = newData[category].find((item) => item.name === phrase.name);
      if (selectedElement) {
        selectedElement.selected = true;
        setData(newData);
        console.log(newData);
      }
    };

    if (data) {
      const unselectedPhrases = data["Movies"].filter(
        (element) => element.selected !== true
      );
      const randomElementIndex = Math.floor(
        Math.random() * unselectedPhrases.length
      );
      const selectedPhrase = unselectedPhrases[randomElementIndex];

      setPhrase(selectedPhrase);
      console.log(selectedPhrase)
      setElementAsSelected("Movies", selectedPhrase);
    }
  }, []);

  console.log(data);

  return (
    <>
      <Header className={styles.header}></Header>
      {isLoading ? (
        <Loader />
      ) : (
        <>{phrase && <Phrase phrase={phrase.name}></Phrase>}</>
      )}
      <Keyboard isBlocked={isLoading}></Keyboard>
    </>
  );
}

export default Home;
