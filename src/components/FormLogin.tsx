import Logo from '../assets/images/logo.png'

export default function FormLogin() {
   return (
      <>
         <div className="flex w-11/12 md:w-10/12 lg:w-11/12 xl:w-9/12 mx-auto mt-10 rounded-2xl border" style={{ boxShadow: '1px 1px 30px 1px rgba(0, 0, 0, 0.419)' }}>
            <div className="w-1/2 hidden lg:flex min-h-full bg-sky-200/80 rounded-2xl overflow-hidden p-8">
               <div className='w-11/12 space-y-5 flex flex-col'>
                  <h1 className='font-bold text-lg'>Single Sign On</h1>
                  <p className='text-sm text-gray-500/90'>Hi, Insan Kemenperin, Sekarang akun-mu dapat digunakan untuk berbagai platform. Nikmati berbagai kemudahan akses platform dalam satu akun.</p>
                  <div className='space-y-1'>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                     <a href='#' className='flex gap-8 px-3 py-2 rounded-lg hover:bg-sky-100 hover:-translate-x-4 transition-all duration-300'>
                        <div className='w-[100px]'>
                           <img src={Logo} alt="" />
                        </div>
                        <div className='text-sm leading-4'>
                           <h1 className='font-bold'>SIL BBIHP</h1>
                           <p className='text-gray-500/90'>Platform Sistem Informasi Layanan</p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div className="flex-1 flex flex-col h-full bg-slate-100 rounded-2xl lg:-ml-7 space-y-8 p-8">
               <div className='w-11/12 mx-auto space-y-1'>
                  <img src={Logo} alt="" className='w-[150px] mb-4' />
                  <h1 className='text-xl lg:text-2xl font-bold'>Login Akun Official Web BBIHPMM</h1>
                  <h1 className='text-gray-500'>Hi, Selamat Datang <span className='text-blue-600 tracking-wider font-bold'>#InsanOke</span></h1>
               </div>
               <form action="" className="w-full">
                  <div className="flex-1 flex flex-col h-full items-center space-y-4">
                     <div className="w-11/12 text-sm space-y-4 mb-4">
                        <div className="space-y-1">
                           <p className='font-medium tracking-wide'>Email <span className='text-red-600'>*</span></p>
                           <input type="text" placeholder='admin@admin.com' className="p-3 w-full rounded-xl bg-slate-200/50 border border-slate-300 focus:outline-blue-200" />
                        </div>
                        <div className="space-y-1">
                           <p className='font-medium tracking-wide'>Password <span className='text-red-600'>*</span></p>
                           <input type="password" placeholder='********' className="p-3 w-full rounded-xl bg-slate-200/50 border border-slate-300 focus:outline-blue-200" />
                        </div>
                        <div className='flex justify-between text-sm font-medium'>
                           <div className='flex space-x-1 items-center'>
                              <input type="checkbox" id="remember" />
                              <label htmlFor="remember" className='text-gray-600'>Ingat saya</label>
                           </div>
                           <div>
                              <a href="" className='text-blue-700'>Lupa Password</a>
                           </div>
                        </div>
                     </div>
                     <button className="bg-blue-600 text-white font-medium p-3 rounded-full mb-2 w-11/12">Login</button>
                     <div className="w-11/12 flex justify-center text-sm">
                        <span className='text-gray-500'>Belum Punya Akun? <a href="/authentication/register" className='text-blue-700 font-medium underline'>Daftar</a></span>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}
