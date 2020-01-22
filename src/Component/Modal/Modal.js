import React from 'react';
import Modal from "react-modal"

import './Modal.css'

export default ({ isOpen, onRequestClose, onCheckBox, filters, attribute }) =>{
    console.log(filters)
return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close'
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close'
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    <div className="heading-modal">
    <h3>Edit Attributes</h3>
    </div>
    <div className="search">
        <input className="input" type="text" placeholder="search attribute" />
    </div>
    <div className="checkbox">
   <input className="input-check" checked={filters.all} type="checkbox" name="all" onChange={e=> onCheckBox(e)} />
        <label>Select All</label>
    </div>
    <div className="checkbox">
   <input className="input-check" type="checkbox" checked={filters.weakness} name="weakness" onChange={e=> onCheckBox(e)}/>
        <label>Weakness</label>
    </div>
    <div className="checkbox">
   <input className="input-check" type="checkbox" checked={filters.type} name="type" onChange={e=> onCheckBox(e)}/>
        <label>Type</label>
    </div>
    <div className="checkbox">
   <input className="input-check" type="checkbox" checked={filters.abilities} name="abilities" onChange={e=> onCheckBox(e)}/>
        <label>Ability</label>
    </div>
    <div className="checkbox">
   <input className="input-check" type="checkbox" checked={filters.weight} name="weight" onChange={e=> onCheckBox(e)}/>
        <label>Weight</label>
    </div>
    <br></br>
    <div className="apply-div">
    <button className="apply" onClick={onRequestClose}>Apply</button>
    </div>
  </Modal>)}
