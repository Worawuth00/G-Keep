import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterKeep } from "../actions/keepAction";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(filterKeep(search));
  };

  return (
    <nav className="navbar">
      <div className="nav-center container">
        <div className="nav-header">
          <h1>
            <i className="far fa-sticky-note"></i> G-Keep
          </h1>
        </div>
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search by tag"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={onSearchSubmit}>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
