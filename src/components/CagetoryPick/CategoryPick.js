import React from "react";
import pickACategory from "../../assets/images/Pick a Category.svg";
import { DataContext } from "../DataProvider/DataProvider";
import BlueButton from "../BlueButton/BlueButton";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryPick.module.css";
import PageHeader from '../PageHeader/PageHeader';

function CategoryPick() {
  const { setCategory, categories } = React.useContext(DataContext);
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
      <PageHeader imgSrc={pickACategory} imgAlt={"Pick a category"} imgClassName={styles.headerImgStyles}/>

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
