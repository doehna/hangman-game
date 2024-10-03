import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Phrase from "../Phrase/Phrase";
import Header from "../Header/Header";
import styles from "./Home.css";

function Home() {

  return (
    <>
      <Header className={styles.header}></Header>
      <Phrase phrase="dupa"></Phrase>
      <Keyboard></Keyboard>
    </>
  );
}

export default Home;
