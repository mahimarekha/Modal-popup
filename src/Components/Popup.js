import React from "react";
import { useState } from "react";
import "./Popup.css";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";
const ModalExample = (props) => {
  const {className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <button onClick={toggle} className="button">
        Apply Now
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>APPLY FOR</ModalHeader>
        <ModalFooter>
          <button className="button" style={{ "margin-right": "69px"}} onClick={toggle}>
            Citizen Complaint
          </button>
          <button className="button" onClick={toggle}>
            Officers Login
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
