import React, { useEffect, useState } from 'react';

const Start = () => {
  const [robots, setRobots] = useState([]);
  useEffect(() => {
    const getRobotApi = async () => {
      try {
        const url = 'http://localhost:4000/robots';
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getRobotApi();
  }, []);
  return <div>Start</div>;
};

export default Start;
