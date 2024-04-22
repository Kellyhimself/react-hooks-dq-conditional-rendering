import React from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";
import { useState } from "react";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

  /*   let detailsToDisplay = <Pokemon />; */
  const [detailsToDisplay, setDetailsToDisplay] = useState(<Profile />);

  const changeMenu = (page) => {
    alert(page);
    switch (page) {
      case "Profile":
        setDetailsToDisplay(<Profile />);
        break;
      case "Photos":
        setDetailsToDisplay(<Photos />);
        break;
      case "Cocktails":
        setDetailsToDisplay(<Cocktails />);
        break;
      case "Pokemon":
        setDetailsToDisplay(<Pokemon />);
        break;
      default:
        setDetailsToDisplay(<Profile />);
    }
  };

  return (
    <div>
      <MenuBar changeMenu={changeMenu} />
      {/* the changeMenu function is a stateChanger function that we
      will pass as a prop to our MenuBar child */}
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
