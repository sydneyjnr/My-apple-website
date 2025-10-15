import React from "react";
import { NavLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {NavLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search Icon" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart Icon" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
