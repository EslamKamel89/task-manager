import { useState } from "react";

export default function NewTask({ onAddTask }) {
    const [enteredTask, setEnteredTask] = useState('');
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    function handleClick() {
        if (enteredTask == '') {
            return;
        }
        onAddTask(enteredTask);
        setEnteredTask('');
    }
    return <div className="flex flex-row items-center gap-4 mb-4">
        <input
            type="text"
            onChange={handleChange}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            value={enteredTask}
        />
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>;
}