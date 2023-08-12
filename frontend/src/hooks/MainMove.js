import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMove = () => {
  const navigate = useNavigate();

  return navigate('/');
};

export default MainMove;
