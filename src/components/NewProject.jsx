import { useRef } from "react";
import Input from "./input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle.trim() == '' || enteredDescription.trim() == '' || enteredDueDate.trim() == '') {
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }
    return <>
        <Modal ref={modal} buttonCaption={'Close'} onCancel={onCancel} >
            <h2 className="text-xl font-bold text-stone-600  my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">Please make sure you provide valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4 mx-2" >
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button
                    onClick={handleSave}
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input type='text' label="Title" ref={title} />
                <Input label="Description" ref={description} isTextArea />
                <Input type='date' label="Due Date" ref={dueDate} />

            </div>
        </div>
    </>;
}