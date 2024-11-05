import Navbar from "../components/Navbar"

type WebpageLayout = {
    page: any
}

export default function WebpageLayout({ page }: WebpageLayout){
    return (
        <>
            <Navbar />
            <div className="px-4 md:px-28">
                {page}
            </div>
        </>
    )
}