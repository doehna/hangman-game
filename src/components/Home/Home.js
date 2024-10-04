import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Phrase from "../Phrase/Phrase";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import styles from "./Home.module.css";
import { DataContext } from "../DataProvider/DataProvider";

function Home() {
  const {phrase, isLoading} = React.useContext(DataContext);

  console.log(phrase);

  // useEffect(() => {
  //   if (jsonData) {
  //     setData(jsonData.categories);
  //   }
  // }, [jsonData]);

  // useEffect(() => {
  //   const setElementAsSelected = (category, phrase) => {
  //     if (!data || !Array.isArray(data[category])) {
  //       return;
  //     }

  //     const newData = {...data};
  //     const selectedElement = newData[category].find((item) => item.name === phrase.name);
  //     if (selectedElement) {
  //       selectedElement.selected = true;
  //       setData(newData);
  //       console.log(newData);
  //     }
  //   };

  //   if (data) {
  //     const unselectedPhrases = data["Movies"].filter(
  //       (element) => element.selected !== true
  //     );
  //     const randomElementIndex = Math.floor(
  //       Math.random() * unselectedPhrases.length
  //     );
  //     const selectedPhrase = unselectedPhrases[randomElementIndex];

  //     setPhrase(selectedPhrase);
  //     console.log(selectedPhrase)
  //     setElementAsSelected("Movies", selectedPhrase);
  //   }
  // }, []);

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
