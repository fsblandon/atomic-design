import SearchInput from "../molecules/SearchInput";

export default function Header() {
    return (
        <header className="p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-bold">My App</h1>
            <SearchInput></SearchInput>
        </header>
    );
}