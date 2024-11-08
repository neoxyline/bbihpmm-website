import mottoImage from '/src/assets/icon/motto.png'

export default function index() {
    return (
        <>
            <div className='py-8 text-center text-2xl font-bold uppercase'>
                Motto Balai Besar Industri Hasil Perkebunan Mineral Logam dan Maritim
            </div>
            <div className="flex justify-center items-center">
                <a href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 pl-4 mb-8">
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                        src={mottoImage} alt="" />

                    <div className="flex flex-col justify-between p-4  leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            One Stop Solution for Industry
                        </h5>
                        <p className="mb-3 font-normal text-blue-700 dark:text-gray-400 italic">
                            <span className='font-bold text-xl'> Kolaborasi untuk Industri Berdaya Saing dan Berkelanjutan</span>
                        </p>
                    </div>
                </a>
            </div>
        </>
    )
}
