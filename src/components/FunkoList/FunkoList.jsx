

const FunkoList = (props) => {


    return (
        <div>
            {props.funkos.length ? (
                <h2>No Funkos</h2>
            ) : (
                <ul>
                    {props.funkos.map((funko) => (
                        <li>
                            {funko.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FunkoList;