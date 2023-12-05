const BaseURL= import.meta.env.VITE_API_URL;

import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Usercontext';

const profileFetch = () => {
  const { jwt } = useContext(Context);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (jwt) {
      fetch(`${BaseURL}/auth/whoami`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [jwt]);

  return { userData };
};

export default profileFetch;
