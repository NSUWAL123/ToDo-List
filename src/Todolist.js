import "./todolist.css";

function Todolist(props) {
    return (
    <div className="each-item">
        <li>{props.text}</li>
        <br />
        <div onClick={() => {props.selectedItem(props.id)}}>-</div>
    </div>
    )
}

export default Todolist;