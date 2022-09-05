import React from 'react';
import Form from '../components/NewForm';
const NewRobot = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Robot</h1>
      <p className="mt-3">Fill in the following fields to register an entity</p>
      <Form />
    </>
  );
};

export default NewRobot;
