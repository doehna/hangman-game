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

  return (
    <>
      <Header className={styles.header}></Header>
      {isLoading ? (
        <Loader />
      ) : (
        <>{phrase && <Phrase></Phrase>}</>
      )}
      <Keyboard isBlocked={isLoading}></Keyboard>
    </>
  );
}

export default Home;
