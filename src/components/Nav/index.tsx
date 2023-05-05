import React, { ReactNode } from "react";
import styles from "./nav.module.scss";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/entities">Link
        </Nav.Link>
      </Nav.Item>

    </Nav>
  );
};

export default Header;
