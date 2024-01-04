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
        <img src="./assets/images/bag.svg" />
      </div>

      <main>
        <div className="Text">
          <h1>Amazing Discounts</h1>
          <h2>on Garden Products!</h2>
        </div>
      </main>
    </header>
  );
}
