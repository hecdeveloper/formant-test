import React from 'react';

const Robot = ({ robot }: any) => {
  const { name, arms, notes } = robot;
  return (
    <tr>
      <h1>{name}</h1>
    </tr>
  );
};

export default Robot;
