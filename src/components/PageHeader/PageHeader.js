import React from "react";
import Header from "../Header/Header";
import backIcon from "../../assets/images/icon-back.svg";
import styles from "./PageHeader.module.css";
import { useNavigate } from "react-router-dom";
import {DataContext} from "../DataProvider/DataProvider"

function PageHeader({ imgSrc, imgAlt, imgClassName }) {
  const { setIsMainMenuVisible } = React.useContext(DataContext);

  let navigate = useNavigate();

  const handleBackButton = () => {
    setIsMainMenuVisible(true);
    let path = `/`;
    navigate(path);
  };

  return (
    <Header
      handleRoundButton={handleBackButton}
      buttonIconSrc={backIcon}
      buttonAlt="Back"
      buttonStyles={styles.button}
      className={styles.header}
    >
      <img src={imgSrc} alt={imgAlt} className={imgClassName}></img>
    </Header>
  );
}

export default PageHeader;
