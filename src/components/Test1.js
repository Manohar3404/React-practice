
function Test1(props) {
    let age=9;
    return (
        <div>
        <h1>{props.username}</h1>
        -<h1>{props.city}</h1>
        <button className="btn btn-danger" onClick={()=>props.getdata(age)}>send data</button>
       
        </div>
    )
}
export default Test1;