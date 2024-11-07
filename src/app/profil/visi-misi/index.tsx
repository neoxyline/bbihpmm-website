import logovisi from "../../../assets/images/visi.jpg"
import logomisi from "../../../assets/images/misi.jpg"
export default function VisiMisiPage() {
    return (
        <>
            <div className="text-center text-4xl m-10 font-bold "> VISI DAN MISI BBIHPMM</div>
            <div className="m-4 gap-4 flex flex-row">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className=" m-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logovisi} alt="gambarvisi" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="text-right mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visi</h5>
                        <p className="text-right mb-3 font-normal text-gray-700 dark:text-gray-400">Menjadi lembaga yang akuntabel, adaptif, kolaboratif dan berorientasi pelayanan dalam mewujudkan industri nasional yang mandiri dan berdaya saing.</p>
                    </div>
                </a>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Misi</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Peningkatan kemandirian, daya saing dan kolaborasi industri melalui pemanfaatan infrastruktur dan revitalisasi standardisasi, optimalisasi pemanfaatan teknologi industri, jasa industri dan industri hijau.</p>
                    </div>
                    <img className=" m-4 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logomisi} alt="gambarvisi" />
                </a>
            </div>
        </>
    )
}