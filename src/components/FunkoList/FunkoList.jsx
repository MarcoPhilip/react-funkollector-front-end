import { Link } from 'react-router';

const FunkoList = ({funkos, handleSelect, user, handleFormView, isFormOpen }) => {
    
    if (!funkos || funkos.length === 0) {
        return <p>No Funkos yet.</p>
    }

    return (
        <>
        <div>
            {funkos.length === 0 ? (
                <h2>No Funkos</h2>
            ) : (
                <ul>
                    {funkos.map((funko) => (
                        <li key={funko._id}>
                        <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}>
                        {funko.name}
                        </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        { user && (
            <Link to="/funkos/new">
                <button>
                    Add New Funko
                </button>
            </Link>        
        )} 
        </> 
    );
};

export default FunkoList;