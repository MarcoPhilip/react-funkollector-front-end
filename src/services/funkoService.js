

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




// Create the service function called create
const create = async (formData) => {
  try {
    // Specify a POST request
    // Attach a Content-Type header and send in JSON data('application/json)
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};



// Create the service function called deleteFunko




// Export all functions above
export {
    index,
    create
}