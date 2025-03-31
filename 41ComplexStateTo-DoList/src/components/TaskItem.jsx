
function TaskItem(props) {
    return (
        <div onClick={() => {
            //Passing id of checked item.
            props.onChecked(props.id);
        }}>
            <li>{props.text}</li>
        </div>
    );
}

export default TaskItem;
