// src/components/Landing.jsx
import { Link, Outlet } from 'react-router';

const Landing = ({funkos, handleSelect }) => {


  return (
    <main>
      <p>Here are all the funkos! Sign In or Sign Up to explore more</p>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', }}>
          {funkos.map((funko) => (
              <div key={funko._id}
              className='funko-card'
              >
              <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
              style={{
                textDecoration: 'none',
                color: 'black'
              }}>
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

