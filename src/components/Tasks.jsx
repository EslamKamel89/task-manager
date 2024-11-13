import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
    console.log(tasks);
    return <section>
        <h2 className="text-2xl font-bold text-stone-500 mb-4 ">Tasks</h2>
        <NewTask onAddTask={onAddTask} />
        {tasks.length == 0 && <p className="text-stone-800 mb-4">
            This project doesn't have any tasks yet.

        </p>}
        {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => {
                return <li key={task.id} className="flex justify-between my-4 ">
                    <span>{task.text}</span>
                    <button onClick={() => onDeleteTask(task.id)} className="text-stone-700 hover:text-red-500">Delete Task</button>
                </li>
            })}
        </ul>}
    </section>;
}