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
                <div>
                    {funkos.map((funko) => (
                        <Link to={`/funkos/${funko._id}`}
                            key={funko._id}
                            onClick={() => handleSelect(funko)}
                        >
                            {funko.name}
                        </Link>
                    ))}
                </div>
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