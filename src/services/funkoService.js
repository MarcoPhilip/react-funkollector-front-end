

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




// Create the service function called deleteFunko




// Export all functions above
export {
    index,
}