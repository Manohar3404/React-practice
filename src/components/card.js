function Card(props) {
    console.log(props);
    return (
      <div className="text-center">    
        <p>{props.user.username}</p>
        <p>{props.user.age}</p>
        <p>{props.user.city}</p>
      </div>
    );
  }
  
  export default Card;
  