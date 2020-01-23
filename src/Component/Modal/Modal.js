import React, { useState } from "react";
import Modal from "react-modal";

import "./Modal.css";

export default ({ isOpen, onRequestClose, onCheckBox, filters, attribute }) => {
    const [filterValue, setFilterValue] = useState(attribute)
    const allFilters = attribute
    const onSearch = (e) => {
        const searchValue = e.target.value
        if (e.target.value.length === 0) {
            setFilterValue(attribute)
            return
        }
               let a = filterValue.filter(x => Object.keys(x)[0].toLowerCase().includes(searchValue))
               setFilterValue(a)
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close"
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close"
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={2000}
    >
      <div className="heading-modal">
        <h3>Edit Attributes</h3>
      </div>
      <div className="search">
        <input className="input" type="text" placeholder="search attribute" onChange={(e) => onSearch(e)}/>
      </div>


      {
        filterValue.map((x,id) => {
            let key = Object.keys(x)[0]
            let value = Object.values(x)[0]
        return (<div className="checkbox">
        <input
          className="input-check"
          checked={filters[value]}
          type="checkbox"
          name={value}
          onChange={e => onCheckBox(e)}
        />
        <label>{key}</label>
      </div>)
      })
    }
      <br></br>
      <div className="apply-div">
        <button className="apply" onClick={onRequestClose}>
          Apply
        </button>
      </div>
    </Modal>
  );
};
