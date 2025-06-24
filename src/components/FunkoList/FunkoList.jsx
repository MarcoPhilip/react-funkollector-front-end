import { Link, Outlet } from 'react-router';


const FunkoList = ({funkos, handleSelect, user}) => {
    
    if (!funkos || funkos.length === 0) {
        return <p>No Funkos yet.</p>
    }

    return (
        <>
        <div className='dash-container'>
            <h1>All Funkos</h1>
            {funkos.length === 0 ? (
                <h2>No Funkos</h2>
            ) : (
                <div className='funko-list'>
                    {funkos.map((funko) => (
                        <div key={funko._id }
                        className='funko-card'
                        >
                            <Link to={`/funkos/${funko._id}`} onClick={() => handleSelect(funko)}
                            className='link-text'>
                                <p><strong>{funko.name}</strong></p>
                                <p><strong>{funko.series} #{funko.number}</strong></p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className='add-funko-btn'>
            { user && (
                <Link to="/funkos/new" className='link-text'>
                    <button className='btn-add'>
                        Add New Funko
                    </button>
                </Link>        
            )} 
        </div>
        <Outlet />
        </> 
    );
};

export default FunkoList;