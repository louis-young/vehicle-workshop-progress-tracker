import React, { useState } from "react";

const Search = ({ search }) => {
  const [registration, setRegistration] = useState("");

  const submit = (event) => {
    event.preventDefault();

    search(registration);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="registration"
        value={registration}
        onChange={(event) => setRegistration(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
