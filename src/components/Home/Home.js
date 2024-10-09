import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Phrase from "../Phrase/Phrase";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import Loader from "../Loader/Loader";
import MainMenu from "../MainMenu/MainMenu";
import GameStateMenu from "../GameStateMenu/GameStateMenu";
import { useNavigate } from "react-router-dom";

function Home() {
  const { phrase, isLoading, category, isMainMenuVisible, isGameStateMenuVisible, setIsGameStateMenuVisible } = React.useContext(DataContext);

  let navigate = useNavigate();

  React.useEffect(() => {
    if (!category && !isMainMenuVisible) {
      let path = `/category`;
      navigate(path);
    }
    else {
      console.log(phrase);
    }
  }, []);

  return (
    <>
      {isMainMenuVisible ? (
        <MainMenu />
      ) : (
        <>
          <Header
            className={styles.header}
            setIsGameStateMenuVisible={setIsGameStateMenuVisible}
          ></Header>
          {isLoading ? <Loader /> : phrase && <Phrase></Phrase>}
          <Keyboard isBlocked={isLoading}></Keyboard>
          {isGameStateMenuVisible && (
            <GameStateMenu
              setIsGameStateMenuVisible={setIsGameStateMenuVisible}
              imgClassName={styles.pausedHeader}
            />
          )}
        </>
      )}
    </>
  );
}

export default Home;
