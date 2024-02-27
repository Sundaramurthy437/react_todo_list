import React from "react";

const Footer = ({lengthOfList}) => {
  
  return (
    <footer>
      {lengthOfList} {lengthOfList===1?"Task":"Tasks"} Remaining
    </footer>
  );
};

export default Footer;
