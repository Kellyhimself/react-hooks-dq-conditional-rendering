import React, { useState } from "react";

function MenuBar({ changeMenu }) {
  // The useState hook is used to track the currently active menu item.
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (e) => {
    // When a menu item is clicked, the handleClick function is called.

    // The setActiveItem function is used to set the activeItem state to the ID of the clicked menu item.
    setActiveItem(e.target.id);

    // The changeMenu function is called to change the displayed page.
    let page = e.target.getAttribute("data-page");

    changeMenu(page);
  };

  return (
    <div className="ui four item menu">
      <span
        id="profile"
        data-page="Profile"
        // The className property is used to set the CSS class of the menu item.
        className={activeItem === "profile" ? "item active" : "item"}
        // The onClick property is used to specify the function that should be called when the menu item is clicked.
        onClick={handleClick}
      >
        <i className="user large icon" />
      </span>

      <span
        id="photos"
        data-page="Photos"
        className={activeItem === "photos" ? "item active" : "item"}
        onClick={handleClick}
      >
        <i className="photo large icon" />
      </span>

      <span
        id="cocktails"
        data-page="Cocktails"
        className={activeItem === "cocktails" ? "item active" : "item"}
        onClick={handleClick}
      >
        <i className="cocktail large icon" />
      </span>

      <span
        id="pokemon"
        data-page="Pokemon"
        className={activeItem === "pokemon" ? "item active" : "item"}
        onClick={handleClick}
      >
        <i className="themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
