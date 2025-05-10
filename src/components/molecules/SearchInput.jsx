import Button from "../atoms/Button";

export default function SearchInput() {
    return (
        <div className="flex gap-2">
            <input 
                type="text"
                placeholder="Search..."
                className="border p-2 rounded-md"
            />
            <Button>Search</Button>
        </div>
    );
}