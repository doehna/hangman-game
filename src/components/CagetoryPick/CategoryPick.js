import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import backIcon from "../../assets/images/icon-back.svg";
import pickACategory from "../../assets/images/Pick a Category.svg";
import { DataContext } from "../DataProvider/DataProvider";
import BlueButton from "../BlueButton/BlueButton";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryPick.module.css";

function CategoryPick() {
  const { category, setCategory, categories } = React.useContext(DataContext);
  let navigate = useNavigate();

  const handleCategoryClick = (event) => {
    const newCategory = event.target.id;

    if (newCategory) {
      setCategory(newCategory);
      let path = `/`;
      navigate(path);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <RoundButton
          imgStyles={styles.imgStyles}
          iconSrc={backIcon}
          buttonStyles={styles.button}
        ></RoundButton>
        <img
          src={pickACategory}
          alt="Pick a category"
          className={styles.pickACategory}
        ></img>
      </div>
      <div className={styles.categories}>
        {categories &&
          categories.map((category, index) => {
            return (
              <BlueButton
                id={category}
                key={index}
                className={styles.blueButton}
                onClick={handleCategoryClick}
              >
                {category.toUpperCase()}
              </BlueButton>
            );
          })}
      </div>
    </div>
  );
}

export default CategoryPick;
