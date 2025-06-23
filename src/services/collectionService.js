

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/collections`;


// Create the service function for collectionIndex
const collectionIndex = async () => {
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};



// Create the service function for addToCollection 
const addToCollection = async (funkoId) => {
    const token = localStorage.getItem('token');

    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({funkoId}),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }   
};



// Create the service function for removeFromCollection
const removeFromCollection = async (funkoId) => {
    const token = localStorage.getItem('token');
    try {
        const res = await fetch(`${BASE_URL}/funkos/${funkoId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (err) {
        console.log(err);
    }
};



// Export all functions above
export {
    collectionIndex,
    addToCollection,
    removeFromCollection
}