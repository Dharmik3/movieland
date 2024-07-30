import React from "react";
import { useStateValue } from "../context/StateProvider";

const Footer = () => {
  const [{ movie, movies }] = useStateValue();

  return movie === null ? (
    <p className={`footer ${!movies.length&&'fixedFooter'}`}>
      Copyright © {new Date().getFullYear()} <strong>Dharmik Patel</strong>,{" "}
      <small>V2.O</small>
    </p>
  ) : null;
};

export default Footer;
