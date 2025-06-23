import { Link, Outlet } from 'react-router';

const FunkoList = ({funkos, handleSelect, user}) => {
    
    if (!funkos || funkos.length === 0) {
        return <p>No Funkos yet.</p>
    }

    return (
        <>
        <div>
            {funkos.length === 0 ? (
                <h2>No Funkos</h2>
            ) : (
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', }}>
                {funkos.map((funko) => (
                    <div key={funko._id}
                    style={{
                        border: '2px solid black',
                        boxSizing: 'border-box',
                        flex: '1 1 calc(33% - 1rem)',
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                        marginBottom: '0.5rem', 
                        backgroundColor: 'rgba(227, 36, 36, 0.3)', 
                        padding: '1rem',
                        textAlign: 'center'
                    }}
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
            )}
        </div>
        { user && (
            <Link to="/funkos/new">
                <button>
                    Add New Funko
                </button>
            </Link>        
        )} 
        <Outlet />
        </> 
    );
};

export default FunkoList;