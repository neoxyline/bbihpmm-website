import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import News from "../components/News"

type WebpageLayout = {
    page: any
}

export default function WebpageLayout({ page }: WebpageLayout) {
    return (
        <>
            <Navbar />
            <div className="px-4 md:px-28">
                {page}
            </div>
            <News />
            <Footer />
        </>
    )
}