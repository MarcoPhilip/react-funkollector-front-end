// src/components/PetForm/PetForm.jsx

// Imports for react 
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import * as funkoService from '../../services/funkoService';



// Define the enums as an array
const seriesEnum = [
        'Pop! 8-Bit',
        'Pop! Ad Icons',
        'Pop! Air Force',
        'Pop! Albums',
        'Pop! Animation',
        'Pop! Aquasox',
        'Pop! Army',
        'Pop! Around the World',
        'Pop! Artists',
        'Pop! Art Covers',
        'Pop! Art Series',
        'Pop! Asia',
        'Pop! Bape',
        'Pop! Basketball',
        'Pop! Board Games',
        'Pop! Books',
        'Pop! Boxing',
        'Pop! Broadway',
        'Pop! Build a Bear',
        'Pop! Candy',
        'Pop! Christmas',
        'Pop! Classics',
        'Pop! College',
        'Pop! Comedians',
        'Pop! Comic Covers',
        'Pop! Comics',
        'Pop! Conan',
        'Pop! Custom',
        'Pop! Deluxe',
        'Pop! Deluxe Moments',
        'Pop! Die-Cast',
        'Pop! Digital',
        'Pop! Disney',
        'Pop! Directors',
        'Pop! Drag Queens',
        'Pop! Fantastic Beasts',
        'Pop! Fashion',
        'Pop! Foodies',
        'Pop! Football',
        'Pop! Funko (Freddy Funko)',
        'Pop! Funko (Fantastik Plastik)',
        'Pop! Funko (Lance)',
        'Pop! Game of Thrones',
        'Pop! Games',
        'Pop! Game Covers',
        'Pop! Golf',
        'Pop! GPK',
        'Pop! Halo',
        'Pop! Harry Potter',
        'Pop! Heroes',
        'Pop! Hockey',
        'Pop! Holidays',
        'Pop! House of the Dragons',
        'Pop! Icons',
        'Pop! League of Legends',
        'Pop! Magic: The Gathering',
        'Pop! Marines',
        'Pop! Marvel',
        'Pop! Magazine Covers',
        'Pop! Minis',
        'Pop! MLB',
        'Pop! Moments',
        'Pop! Monsters',
        'Pop! Movie Posters',
        'Pop! Movies',
        'Pop! Muppets',
        'Pop! Myths',
        'Pop! My Little Pony',
        'Pop! NASCAR',
        'Pop! Navy',
        'Pop! NBA Mascots',
        'Pop! NFL',
        'Pop! Pets',
        'Pop! Pusheen',
        'Pop! Racing',
        'Pop! Retro Toys',
        'Pop! Rides',
        'Pop! Rocks',
        'Pop! Royals',
        'Pop! Sanrio',
        'Pop! Sci-Fi',
        'Pop! Sesame Street',
        'Pop! SNL',
        'Pop! South Park',
        'Special Edition Pop!',
        'Pop! Sports',
        'Pop! Sports Legends',
        'Pop! Stan Lee',
        'Pop! Star Wars',
        'Pop! Television',
        'Pop! Tennis',
        'Pop! The Vote',
        'Pop! Town',
        'Pop! Town Christmas',
        'Pop! Trading Cards',
        'Pop! Trains',
        'Pop! Trolls',
        'Pop! UFC',
        'Pop! Uglydoll',
        'Pop! Valiant',
        'Pop! Vans',
        'Pop! VHS Covers',
        'Pop! Wreck-It Ralph',
        'Pop! Wrestling',
        'Pop! WWE',
        'Pop! WWE Covers',
        'Pop! Zodiac',
    ];

// Define the Funko form component
const FunkoForm = ({ handleSubmit, buttonText = 'Submit', initialFormData = {}}) => {
    // Use navigate
    const navigate = useNavigate();
    // Get the id from the URL params
    const { id } = useParams();

    // formData state to control the form. Define as empty form
    const [formData, setFormData] = useState({
        name: '',
        series: '',
        number: '',
        rarity: '',
    });

    // Define handleChange function to update formData state.
    const handleChange = (evt) => {
        // Get the user input and assign it to the form data as it changes
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };


    // Create useEffect 
    useEffect(() => {
        // Write async function and fetch the data
        const fetchFunko = async () => {
            if (id) {
                // Get the show function from the funkoService for edit purpose
                const funko = await funkoService.show(id);
                setFormData({
                    name: funko.name || '',
                    series: funko.series || '',
                    number: funko.number || '',
                    rarity: funko.rarity || ''
                });
            } else if (initialFormData.name) {
                setFormData({
                    name: initialFormData.name || '',
                    series: initialFormData.series || '',
                    number: initialFormData.number || '',
                    rarity: initialFormData.rarity || ''
                });
            }
        }
        // Call fetchFunko
        fetchFunko();
        // Dependency array
    }, [id, initialFormData]);

    // Create the submit functionality
    const onSubmit = async (evt) => {
        evt.preventDefault();
        // Rename id from params as the updated funko
        const funko = id
        // If editing, call handle submit using id and formdata
        ? await handleSubmit(id, formData)
        : await handleSubmit(formData);

        // If the funko is successfully created or updated
        if (funko?._id) {
            // Redirect the user to the new funko details
            navigate(`/funkos/${funko._id}`);
        }
    };

    // And finally, the form itself.
    return (
        <div>
        <form className="funko-form" onSubmit={onSubmit}>

            <div className='form-field'>
                <label htmlFor="name"> Name </label>
                <input
                type='text'
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className='form-field'>
                <label htmlFor="series"> Series </label>
                <select
                type='text'
                id="series"
                name="series"
                value={formData.series}
                onChange={handleChange}
                required
                >
                    <option value='' disabled>
                        Select a series
                    </option>
                    {seriesEnum.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className='form-field'>
                <label htmlFor="number"> Number </label>
                <input
                type='number'
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                />
            </div>

            <div className='form-field'>
                <label htmlFor="rarity"> Rarity </label>
                <input
                type='text'
                id="rarity"
                name="rarity"
                value={formData.rarity}
                onChange={handleChange}
                />
            </div>

            <div className='form-actions'>
                <button className='btn-submit' type="submit">      
                    {buttonText}
                </button>
            </div>
        </form>
        </div>
    );
};

export default FunkoForm;
