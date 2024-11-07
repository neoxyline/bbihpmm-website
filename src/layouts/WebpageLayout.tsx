import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type WebpageLayout = {
    page: any;
};

export default function WebpageLayout({ page }: WebpageLayout) {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl m-auto">{page}</div>
            <Footer />
        </>
    );
}
