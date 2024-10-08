import React from "react";
import RoundButton from "../RoundButton/RoundButton";
import backIcon from "../../assets/images/icon-back.svg";
import pickACategory from "../../assets/images/Pick a Category.svg";
import { DataContext } from "../DataProvider/DataProvider";
import BlueButton from "../BlueButton/BlueButton";
import { useNavigate } from "react-router-dom";

function CategoryPick() {
  const { setCategory, categories } = React.useContext(DataContext);
  let navigate = useNavigate();

  const handleCategoryClick = (event) => {
    const category = event.target.id;
    if (category) {
      setCategory(category);
      let path = `/`;
      navigate(path);
    }
  };

  return (
    <>
      <div>
        <RoundButton iconSrc={backIcon}></RoundButton>
        <img src={pickACategory} alt="Pick a category"></img>
      </div>
      <div>
        {categories &&
          categories.map((category, index) => {
            return (
              <BlueButton id={category} key={index} onClick={handleCategoryClick}>
                {category}
              </BlueButton>
            );
          })}
      </div>
    </>
  );
}

export default CategoryPick;
