// src/components/Landing.jsx


const Landing = ({funkos, handleSelect }) => {


  return (
    <main>
      <h1>Hello, you are on the landing page for visitors.</h1>
      <p>Here are all the funkos! Sign In or Sign Up to explore more</p>
      <div>
          {funkos.map((funko) => (
              <li 
                  key={funko._id}
                  onClick={() => handleSelect(funko)}
              >
                  {funko.name}
              </li>
          ))}
      </div>
    </main>
  );
};

export default Landing;

