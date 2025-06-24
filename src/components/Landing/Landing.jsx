// src/components/Landing.jsx
import { Link, Outlet } from 'react-router';

const Landing = ({funkos, handleSelect }) => {


  return (
    <main>
      <p>Here are all the funkos! Sign In or Sign Up to explore more</p>
      <div className='funko-list'>
          {funkos.map((funko) => (
              <div key={funko._id}
              className='funko-card'
              >
              <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
              className='text-link'>
                <h3>{funko.name}</h3>
                <p><strong>{funko.series} #{funko.number}</strong></p>
              </Link>
              </div>
          ))}
      </div>
      <Outlet/>
    </main>
  );
};

export default Landing;

