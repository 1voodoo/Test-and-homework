import React from 'react';
import Square from '../Square/Square';
import './Boarde.css';

const Boarde = ({squares, click}) => {
  return (
    <div className='boarde'>
      {
        squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => click(index)} />
        ))
      }
    </div>
  );
};

export default Boarde;
