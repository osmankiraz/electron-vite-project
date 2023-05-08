import React, { ReactNode, useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const Home: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [selectedEntity, setSelectedEntity] = useState("");
  const [selectedJsonType, setSelectedJsonType] = useState("");
  const navigate = useNavigate();

  const entityList: any[] = ["CustomerSuppliers", "Employee", "SalesInvoice"];
  const jsonList: string[] = ["list", "lookup", "form"];

  const actionClick =  (element: string) => {
     setSelectedJsonType(element);
    console.log("element => ",element);
    console.log("selectedjsonType => ",selectedJsonType);
    
   // navigate(`/entities/${selectedEntity}-${element}`);
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ListGroup>
            {entityList.map((element) => (
              <ListGroup.Item
                action
                key={element}
                onClick={() => setSelectedEntity(element)}
              >
                {element}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-3">
          <ListGroup>
            {jsonList.map((element) => (
              <ListGroup.Item
                action
                key={element}
                onClick={() => actionClick(element)}
              >
                {element}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Home;
