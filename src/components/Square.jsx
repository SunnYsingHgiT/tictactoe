import React from 'react';

const square = ({ value, onClick }) => {
  console.log('square rerender');
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default square;
