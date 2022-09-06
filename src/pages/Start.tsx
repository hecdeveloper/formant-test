import React, { useEffect, useState } from 'react';
import Robot from '../components/Robot';

const Start = () => {
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    const getRobotApi = async () => {
      try {
        const url = 'http://localhost:4000/robots';
        const response = await fetch(url);
        const result = await response.json();
        setRobots(result);
      } catch (error) {
        console.log(error);
      }
    };
    getRobotApi();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Robots</h1>
      <p className="mt-3">Check your Robots</p>
      <table className="w-full mt-5 table auto shadow bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Arms</th>
            <th className="border px-4 py-2">Notes</th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <Robot />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Start;
