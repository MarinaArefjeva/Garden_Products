import React from "react";

export default function Home() {
  return (
    <header>
      <div className="logo">
        <img src="./logo.svg" />
      </div>
      <div>
        <ul className="nav">
          <li>Main Page</li>
          <li>Categories</li>
          <li>All products</li>
          <li>All sales</li>
        </ul>
      </div>

      <div className="icon">
        <img src="./bag.svg" />
      </div>
    </header>
  );
}
