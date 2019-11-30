import React from "react";
import TextLink from "../atoms/TextLink";
import Button from "../atoms/Button";

import Icon from "../atoms/Icon";
import "./NavBar.css"


      <Menu onIconClick={onIconClick} />
      <Button>Log in</Button>
=======
      <div className = "NavMenu">
        <div className="dropdown">  
        <Icon className="dropbtn" onButtonClick={onTextLinkClick} />
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Watchlist</a>
            <a href="#">Logout</a>
          </div>
        </div> 
        <Button className="LogIn">Log in</Button>
      </div>
      

    </div>
  );
};

export default NavBar;
