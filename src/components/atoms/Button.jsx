export default function Button({children, onClick}) {
    return (
        <button
            onClick = {onClick}
            className = "bg-blue-600 text-white px-4 py-2 rounded-md">
            {children}
        </button>
    );
}