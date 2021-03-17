import React from 'react';

import face from '../assets/square-me.webp';

function Home() {
  return (
    <main>
      <h1>Hello!</h1>
      <img className="face center" src={face} alt="The author's face"></img>
    </main>
  );
}

export default Home;