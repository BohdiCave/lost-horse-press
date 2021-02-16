import React, {useState} from "react";
import Modal from './Modal.js';

export default function SiteMapBtn() {
  
  const [show, setShow] = useState(false)

  const showModal = () => {
    setShow({ show: true });
  };

  const hideModal = () => {
    setShow({ show: false });
  };

  return (
    <div>
      <Modal show={show} handleClose={hideModal}/>
      <button type="button" className="button" id="site-map" onClick={showModal}>
        SITE MAP
      </button>
    </div>
  );
}