import React from 'react'

export default function Section() {
    return (
        <div className="border-2 mx-10 my-10 mb-10">
            <h1 className=" bg-blue-600 text-white text-xl " >Tentang BBIHPMM</h1>
            <h2 className=" bg-blue-600 text-white text-sm mb-2" >Balai Besar Standardisasi dan Pelayanan Jasa Industri Hasil Perkebunan, Mineral Logam & Maritim</h2>
            
            <h3 className="bg-slate-100 box-border h-25 w-25 p-4 columns-3xs ">
            <img className="w-full aspect-video" src="http://bbihpmm.kemenperin.go.id/_next/image?url=%2FBBIHP%2Fpengujian%2FIMG_0950.jpg&w=1920&q=75" />
            <img className="w-full aspect-video" src="http://bbihpmm.kemenperin.go.id/_next/image?url=%2FBBIHP%2Flspro1.jpeg&w=1920&q=75" />
            <img className="w-full aspect-video" src="http://bbihpmm.kemenperin.go.id/_next/image?url=%2FBBIHP%2Fpengujian%2FIMG20200121093900.jpg&w=1920&q=75" />
            </h3>
        </div>
    )
}
