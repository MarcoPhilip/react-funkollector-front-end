// src/services/userService.js

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

// Create service function called index
const allUsers = async () => {
  // Get token
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};


// Create service function called fetchedUser
const fetchedUser = async (userId) => {
  // Get token 
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export {
  allUsers,
  fetchedUser
};
