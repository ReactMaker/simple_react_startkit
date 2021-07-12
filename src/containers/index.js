import React, { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Hello, I`m ReactMaker.</h2>
      <p>To get started, edit containers/index.js</p>
      <div>asdf</div>
    </div>
  );
};

export default Main;
