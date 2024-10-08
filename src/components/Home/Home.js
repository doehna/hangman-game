import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Phrase from "../Phrase/Phrase";
import Header from "../Header/Header";
import styles from "./Home.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import Loader from "../Loader/Loader";
import MainMenu from "../MainMenu/MainMenu";
import GameStateMenu from "../GameStateMenu/GameStateMenu";
import paused from "../../assets/images/Paused.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const { phrase, isLoading, category } = React.useContext(DataContext);
  const [isMainMenuVisible, setIsMainMenuVisible] = React.useState(false);
  const [isGameStateMenuVisible, setIsGameStateMenuVisible] =
    React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    if (!category) {
      let path = `/category`;
      navigate(path);
    }
    else {
      console.log(category);
    }
  }, []);

  return (
    <>
      {isMainMenuVisible ? (
        <MainMenu setIsMainMenuVisible={setIsMainMenuVisible} />
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
              headingSrc={paused}
              alt="Paused"
              imgClassName={styles.pausedHeader}
            />
          )}
        </>
      )}
    </>
  );
}

export default Home;
