export default function Button({ children, ...props }) {
    return <button {...props} className="text-xs md:text-base px-4 py-2 rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        {children}
    </button>;

}