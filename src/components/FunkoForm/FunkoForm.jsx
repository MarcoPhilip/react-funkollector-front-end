// src/components/PetForm/PetForm.jsx

import { useState } from 'react';

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

const FunkoForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState({
    name: '',
    series: '',
    number: '',
    rarity: '',
  });

  


  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // Create the handleSubmit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddFunko(formData);
  }

  // And finally, the form itself.
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          type='text'
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="series"> Series </label>
        <select
          type='text'
          id="series"
          name="series"
          value={formData.series}
          onChange={handleChange}
          required
        >
            {seriesEnum.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <label htmlFor="number"> Number </label>
        <input
          type='number'
          id="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        <label htmlFor="rarity"> Rarity </label>
        <input
          type='text'
          id="rarity"
          name="rarity"
          value={formData.rarity}
          onChange={handleChange}
        />
        <button type="submit">Add New Funko</button>
      </form>
    </div>
  );
};

export default FunkoForm;
