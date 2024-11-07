export default function ProfilPage() {
  return (
    <>
      <div className="flex flex-row gap-1 items-center">
        <section className="bg-white dark:bg-gray-900 basis-3/4">
          <div className="py-2 px-1 mx-auto max-w-screen-xl lg:py-16">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-6 mb-4">
              <a
                href="#"
                className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                </svg>
                Profil
              </a>
              <h1 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold mb-4">
                BBSPJI Hasil Perkebunan Mineral Logam dan Maritim
              </h1>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-6">
                Unit Layanan Teknis dibawah naungan Eselon 1 Badan Standardisasi
                dan Kebijakan Jasa Industri Kementerian Perindustrian yang
                memiliki tugas pokok dan fungsi memberikan Layanan Jasa Industri
                khususnya industri hasil perkebunan, mineral logam, dan maritim
                dalam rangka memenuhi kebutuhan industri untuk mewujudkan
                pengembangan daya industri yang bersaing serta ramah terhadap
                lingkungan.
              </p>
              <a
                href="#"
                className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Sejarah BBIHPMM
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <div className="basis-1/2 py-4 px-2">
          <iframe
            className="w-full h-80 max-w-full rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YipntPU1FKo?si=9Co7e8CVgrNGVBxK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
