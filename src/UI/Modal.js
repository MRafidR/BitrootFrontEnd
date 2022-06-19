import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const overlayElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, overlayElement)};
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
      ;
    </Fragment>
  );
};

export default Modal;
