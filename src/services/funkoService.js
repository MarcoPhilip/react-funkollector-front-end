

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/funkos`;


// Create the service function called index
const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

// Show a single funko
const show = async (funkoid) => {
    try {
        const res = await fetch(`${BASE_URL}/${funkoid}`);
        return res.json();
    } catch (err) {
        console.log(err);
    }
} 


// Create the service function called create
const create = async (formData) => {
  const token = localStorage.getItem('token');
  try {
    // Specify a POST request
    // Attach a Content-Type header and send in JSON data('application/json)
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};



// Create a function called update for updating a single funko (USE PUT method)
const update = async (id, formData) => {
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
}

// Create the service function called deleteFunko




// Export all functions above
export {
    index,
    show,
    create,
    update
}