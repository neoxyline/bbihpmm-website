import Ceklis from "../../../components/ceklis";

export default function KebijakanMutuPage() {
    return (
        <>
            <div className="text-center text-4xl m-10 font-bold ">Kebijakan Mutu</div>
            <div className="justify-center">
                <h2 className="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2 text-lg text-gray-900 dark:text-white">Balai Besar Industri Hasil Perkebunan berpedoman pada peraturan perundang-undangan yang berlaku serta peningkatan mutu pelayanan secara terus menerus, siap melayani masyarakat dengan cara:</h2>
                <ul className=" text-justify space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <Ceklis description="Meningkatkan kepuasan pelanggan/stakeholder melalui peningkatan mutu pelayanan jasa." />
                    <Ceklis description="Meningkatkan kualifikasi dan kompetensi pegawai untuk mendukung kegiatan pelayanan jasa teknis." />
                    <Ceklis description="Meningkatkan mutu manajemen lembaga melalui perbaikan tata cara kerja dan tata kelola organisasi ke arah efisiensi dan efektivitas organisasi." />
                    <Ceklis description="Meningkatkan kerja sama dengan lembaga terkait." />
                    <Ceklis description="Menerapkan dan melaksanakan secara konsisten Sistem Manajemen Mutu dan Sistem Manajemen Anti Penyuapan (SMAP), sehingga dapat melaksanakan kegiatan secara profesional, transparan, akuntabel, bersih, berintegritas serta bebas dari praktik Korupsi, Kolusi, dan Nepotisme dengan mengedepankan kepuasan pelanggan dan peningkatan berkelanjutan, melarang segala bentuk suap, pungli, dan gratifikasi sesuai peraturan yang berlaku demi terselenggaranya SNI ISO 9001:2015 dan SNI ISO 37001:2016. Meningkatkan mutu serta manajemen lembaga melalui perbaikan tata cara kerja dan tata kelola organisasi ke arah efisiensi dan efektifitas organisasi." />

                </ul>
            </div>

        </>
    )
}
