// src/components/Landing.jsx

// Import FunkoList component
import FunkoList from '../../components/FunkoList/FunkoList';

const Landing = ({funkos}) => {
  return (
    <main>
      <h1>Hello, you are on the landing page for visitors.</h1>
      <p>Here are all the funkos! Sign In or Sign Up to explore more</p>
      <FunkoList funkos={funkos}/>

    </main>
  );
};

export default Landing;

