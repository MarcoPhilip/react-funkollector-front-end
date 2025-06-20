

const FunkoList = ({funkos}) => {
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
                        <li key={funko._id} >
                            {funko.name}
                        </li>
                    ))}
                </div>
            )}
        </div>
        </> 
    );
};

export default FunkoList;