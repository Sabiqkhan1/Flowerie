import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'100%',
    maxWidth:'500px',
    borderRadius:10
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
 
function App({modalIsOpen,setIsOpen}) {
  let subtitle;
  
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
   }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
       <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modal-log-sign'>
        <h5>Log in or sign up</h5>
        
        </div>
      </Modal>
    </div>
  );
}

 export default App