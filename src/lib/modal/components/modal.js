import React from 'react';
import * as modalActions from '../actions/modal';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

let Modal = ({
  children,
  modal,
  //actions
  setModal,
  handlerClose
}) => {
  const { x, y, fullScreen, center, content } = modal;
  let style = { ...modal.style, ...{left: x, top:y} };
  if (fullScreen) {
    style.left   = "0px";
    style.right  = "0px";
    style.top    = "0px";
    style.bottom = "0px";
  }
  if (center) {
    style = { ...style, ...{display: 'flex', alignItems: 'center', justifyContent: 'center' } };  
  }
  if (!content) {
    return null;
  }

  return (
    <div style={style}>
      {modal.showClose &&
        <div style={{padding: '10px'}}>
          <RaisedButton
          label='Закрыть'
          onClick={
            () => {
              if (handlerClose) {
                handlerClose();
              }
              setModal({dataSource: ''});
            }
          }
          >
          </RaisedButton>
        </div>
      }
      <div>
        {children}
      </div>
    </div>
  );
};

export default connect(
  state => ({modal: state.modal}),
  modalActions
)(Modal);
