import React, { useState } from 'react';
import { VscAdd, VscChromeClose } from 'react-icons/vsc';

import './Addboard.css'

const Addboard = (props) => {
  const [showAddboard, setShowAddboard] = useState(false)
  const [inputText, setInputText] = useState('')
  return (
    <div className='addboard'>
      {
        showAddboard ?
          <form
            className='addboard-edit'
            onSubmit={(e) => {
              e.preventDefault();
              if (props.onSubmit) {
                props.onSubmit(inputText);
              }
              setInputText('')
              setShowAddboard(false);
            }}
          >
            <input
              autoFocus
              type="text"
              placeholder='Enter Board Title'
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <div className="addboard-edit-footer">
              <button 
                type='submit'
                className='icon-btn'
                style={{
                  color: 'black',
                }}
              >
                <VscAdd />
              </button>
              <button 
                className='icon-btn'
                onClick={() => {
                  setShowAddboard(false)
                }}
              >
                <VscChromeClose />
              </button>
            </div>
          </form>
          :
          <div className='addboard-plus'>
            <button
              onClick={() => {
                setShowAddboard(true);
              }}
              className='icon-btn'
              // style={{
              //   height: '60px',
              //   width: '60px',
              // }}
            >
              <VscAdd />
            </button>
          </div>
      }
    </div>
  );
};

export default Addboard;
