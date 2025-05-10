import Header from "../organisms/Header";

export default function MainLayout({children}) {
    return (
        <>
            <Header/>
            <main className="p-6">{children}</main>
        </>
    );
}