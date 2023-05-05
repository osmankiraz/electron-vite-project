import React, { ReactNode } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

const Entities: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const entityList: any[] = ["CustomerSuppliers", "Employee", "SalesInvoice"];
  const jsonList: string[] = ["list", "lookup", "form"];
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
            {entityList.map((element) => (
              <ListGroup.Item action key={element}>
                {element}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-3">
          <ListGroup>
            {jsonList.map((element) => (
              <ListGroup.Item action key={element}>
                {element}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
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
