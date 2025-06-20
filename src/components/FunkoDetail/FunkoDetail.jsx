

const FunkoDetail = (props) => {
  // return if props.selected is null
  if (!props.selected) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Series: {props.selected.series}</h2>
      <h2> Number: {props.selected.number}</h2>
      <h2>Rarity: {props.selected.rarity} </h2>
      {/* <h2>Posted By: {props.selected.owner?.firstname}</h2>  */}
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? 'Close Form' : 'Add New Funko'}
      </button>
    </div>
    
  );
};


export default FunkoDetail;