import React, { useState } from 'react';
import { addUser } from '../services/api';

function Home() {
  const [name, setName] = useState('');

  const inputOnChange = (e) => {
    const { value } = e.target;
    setName(value)
  }

  const addButtonOnClick = () => {
    addUser(name)
  }

  return (
    <div className="p-10 text-center flex flex-col grow">
      <label>Enter Name</label>
      <input className='border-black border-solid border-[1px] w-36 self-center' name='name' onChange={inputOnChange} value={name}></input>
      <button onClick={addButtonOnClick}>Submit</button>
      <h1 className="text-4xl font-bold mb-4">Welcome to our church</h1>
      <h2 className="text-2xl mb-6">The Almighty Lord Jesus Christian Fellowship</h2>
      <p className="mb-6">
        United in Faith, Empowered by His Love.
      </p>
      <p>
        Welcome to The Almighty Lord Jesus Christian Fellowship, where faith is the foundation, and Christ is our cornerstone. Here, we believe in the power of His love to heal, uplift, and transform. As a community of believers, we strive to walk in His light and share His message with the world. Whether you're seeking spiritual growth, fellowship, or a deeper relationship with Christ, you're invited to join us in worship, prayer, and service. Together, we grow stronger in His love, faith, and truth.
      </p>
    </div>
  );
}

export default Home;
