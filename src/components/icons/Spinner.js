import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Spinner.css';

function LoadingSpinner() {
  return (
    <div className="spinner">
      <span>Данные загружаються...</span>
      <Spinner animation="border" variant="dark" />
    </div>
  );
}

export default LoadingSpinner;
