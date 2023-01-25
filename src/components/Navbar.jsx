import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-light ś justify-content-between"
        style={{ backgroundColor: "#99a8c7" }}
      >
        <a class="navbar-brand">Spacenos</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};
