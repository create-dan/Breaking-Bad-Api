import React from "react";
import Spinner from "../Ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ loading, items }) => {
  return loading ? (
    <Spinner />
  ) : (
    <>
      <section className="cards">
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    </>
  );
};

export default CharacterGrid;
