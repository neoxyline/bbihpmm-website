<<<<<<< HEAD
import Footer from "../components/Footer"
import Keunggulan from "../components/Keunggulan"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
=======
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
>>>>>>> 5443766a8fd14838f67796cf5ddf4db36f878ba0

type WebpageLayout = {
  page: any;
};

export default function WebpageLayout({ page }: WebpageLayout) {
<<<<<<< HEAD
    return (
        <>
            <Navbar />
            <div className="px-4 md:px-28">
                {page}
            </div>
            <Keunggulan />
            <Section />
            <Footer />
        </>
    )
}
=======
  return (
    <>
      <Navbar />
      <div className="max-w-6xl m-auto">{page}</div>
      <Footer />
    </>
  );
}
>>>>>>> 5443766a8fd14838f67796cf5ddf4db36f878ba0
