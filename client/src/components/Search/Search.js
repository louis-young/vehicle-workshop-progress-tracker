import React, { useState } from "react";

const Search = ({ setRegistration }) => {
  const [value, setValue] = useState("");

  const submit = (event) => {
    event.preventDefault();

    setRegistration(value);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="registration" value={value} onChange={(event) => setValue(event.target.value)} />

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
