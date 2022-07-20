import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Bbcomponents/Ui/Header";
import axios from "axios";
import CharacterGrid from "./Bbcomponents/Characters/CharacterGrid";
import Search from "./Bbcomponents/Ui/Search";
const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);

      setItems(result.data);
      setLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid loading={loading} items={items} />
    </div>
  );
};

export default App;
