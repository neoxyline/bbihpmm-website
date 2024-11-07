import lspro from '../assets/images/lspro.jpg'
import rkdn2 from '../assets/images/rkdn2.jpg'
import testimoni from '../assets/images/testimoni.jpg'
import tkdn1 from '../assets/images/tkdn1.jpg'

export default function News() {
  return (
<>


<div className="bg-slate-50 shadow-md mx-auto px-7 py-7 w-[70%] h-[350px] rounded-md flex justify-end">
  <div className="rounded-md gap-4 w-[80%] h-[100%] flex justify-end">
    <div className="w-[100%]">
      <div className="max-w-md h-2/3 rounded-t-lg">
        <img src={tkdn1} alt="" className="max-w-md h-[100%] rounded-t-lg w-full"/>
      </div>
      <div className="bg-white shadow-md max-w-md h-1/3 rounded-b-lg px-3 py-1 content-center">
        <h1 className="font-bold leading-tight text-blue-900">Peningkatan Daya Saing Industri.. </h1>
        <p className="font-normal italic text-sm text-gray-500">12/11/2024</p>
      </div>
    </div>
    <div className="w-[100%]">
    <div className="max-w-md h-2/3 rounded-t-lg">
        <img src={rkdn2} alt="" className="max-w-md h-full rounded-t-lg w-full"/>
      </div>
      <div className="bg-white shadow-md max-w-md h-1/3 rounded-b-lg px-3 py-1 content-center">
      <h1 className="font-bold leading-tight text-blue-900">Tingkat Komponen Dalam Negeri..</h1>
      <p className="font-normal italic text-sm text-gray-500">12/11/2024</p>
      </div>
    </div>
    <div className="w-[100%]">
    <div className="max-w-md h-2/3 rounded-t-lg">
        <img src={testimoni} alt="" className="max-w-md h-full rounded-t-lg w-full"/>
      </div>
      <div className="bg-white shadow-md max-w-md h-1/3 rounded-b-lg px-3 py-1 content-center">
      <h1 className="font-bold leading-tight text-blue-900">Kesan Pelanggan BBIHPMM..</h1>
      <p className="font-normal italic text-sm text-gray-500">12/11/2024</p>
      </div>
    </div>
    <div className="w-[100%]">
    <div className="max-w-md h-2/3 rounded-t-lg">
        <img src={lspro} alt="" className="max-w-md h-full rounded-t-lg w-full"/>
      </div>
      <div className="bg-white shadow-md max-w-md h-1/3 rounded-b-lg px-3 py-1 content-center">
      <h1 className="font-bold leading-tight text-blue-900">Pengembangan Layanan Sertifikasi Produk..</h1>
      <p className="font-normal italic text-sm text-gray-500">12/11/2024</p>
      </div>
    </div>
  </div>
</div>



</>

)
}
