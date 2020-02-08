import React, { useState, useEffect } from "react";
import App from "../App";

const Search = props => {
  const [search, setSearch] = useState("");
  const [result] = useState([]);
  const { experience, setSearchExp } = props;

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filterExp = experience.filter(exp => {
      return exp.location.toLowerCase().includes(search.toLowerCase());
    });
    setSearchExp(filterExp);
  }, [search]);

  return (
    <div>
      <form>
        <label>
          Search Wanderlust by Location: {""}
          <input
            onChange={changeHandler}
            type="text"
            name="search"
            value={search}
          />
        </label>
      </form>

      {result.map(res => {
        return <App data={res} />;
      })}
    </div>
  );
};

export default Search;