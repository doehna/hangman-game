import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import howToPlay from "../../assets/images/How to Play.svg";
import styles from "./HowToPlay.module.css";
import useFetch from "../../hooks/useFetch";
import { INSTRUCTIONS_ENDPOINT } from "../../constants";
import Loader from "../Loader/Loader";

function HowToPlay() {
  const { jsonData, isLoading, error } = useFetch(INSTRUCTIONS_ENDPOINT);
  const [instructions, setInstructions] = React.useState(jsonData);

  React.useEffect(() => {
    setInstructions(jsonData);
  }, [jsonData]);

  return (
    <>
      <PageHeader
        imgSrc={howToPlay}
        imgAlt={"How to play"}
        imgClassName={styles.imgClassName}
      />

      {isLoading ? (
        <Loader />
      ) : (
        instructions && (
          <ol className={styles.list}>
            {instructions["steps"].map((step, index) => {
              return (
                <li key={index} className={styles.listElement}>
                  <div className={styles.stepNumber}>{step.stepNumber}</div>
                  <h2 className={styles.header}>{step.heading.toUpperCase()}</h2>
                  <p className={styles.instruction}>{step.instruction}</p>
                </li>
              );
            })}
          </ol>
        )
      )}
    </>
  );
}

export default HowToPlay;
