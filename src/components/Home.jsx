import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [userName, setUserName] = useState('');

  useEffect(()=> {
    
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));

    if(storedUser && storedUser.name){
      setUserName(storedUser.name)
    }

  })

  return (
    <>
      <div className="home-wrapper">
        {userName ? (
          <h1>
            Welcome, <span>{userName}</span>
          </h1>
        ) : (
          <h1>
            Welcome, <span>Guest!</span>
          </h1>
        )}
        <Link to="/signup">
          <button onClick={()=> localStorage.clear()} >Delete User</button>
        </Link>
      </div>
    </>
  );
}

export default Home