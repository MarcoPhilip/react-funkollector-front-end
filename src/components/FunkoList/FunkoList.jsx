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
                    <div key={funko._id }
                    className='funko-card'
                    >
                    <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
                    style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <p><strong>{funko.name}</strong></p>
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