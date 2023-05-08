import React, { ReactNode, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";

const Entities: React.FC<React.PropsWithChildren<{}>> = (props) => {
  let location = useLocation();
  const entityList: any[] = ["CustomerSuppliers", "Employee", "SalesInvoice"];
  const jsonList: string[] = ["list", "lookup", "form"];

  useEffect(() => {
    console.log("location => ", location);
  }, [location]);

  const listConfig: any[] = [
    "Name",
    "Toolbar",
    "Columns",
    "PageSize",
    "Expandables",
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ListGroup>
            {listConfig.map((element) => (
              <ListGroup.Item action key={element}>
                {element}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-3">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Entity Name Girin" />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Entities;
