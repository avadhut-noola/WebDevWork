import { useState, React } from "react";

function TaskItem(props) {
    const [isChecked, setIsChecked] = useState(false);

    function checkItem() {
        setIsChecked((prevValue) => {
            return !prevValue;
        });
    }
    return (
        <div onClick={checkItem}>
            <li style={{ textDecoration: isChecked ? "line-through" : "none" }}>
                {props.text}
            </li>
        </div>
    );
}

export default TaskItem;
