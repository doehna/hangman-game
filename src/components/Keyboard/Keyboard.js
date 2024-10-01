import React from "react";
import Letter from "../Letter/Letter";
import Button from "../Button/Button";
import { ALPHABET } from "../../constants";

function Keyboard() {
  return (
    <>
      {ALPHABET.map((letter) => {
        return (
          <ol key={letter}>
            <Button>
              <Letter>{letter}</Letter>
            </Button>
          </ol>
        );
      })}
    </>
  );
}

export default Keyboard;
