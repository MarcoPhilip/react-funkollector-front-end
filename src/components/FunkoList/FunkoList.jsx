

const FunkoList = ({funkos, handleSelect }) => {
    
    console.log(handleSelect)
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
                        <li 
                            key={funko._id}
                            onClick={() => handleSelect(funko)}
                        >
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