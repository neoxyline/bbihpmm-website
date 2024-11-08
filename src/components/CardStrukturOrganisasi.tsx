type CardStrukturOrganisasiProps = {
   isVisible?: boolean;
   tim?: string;
   url?: string;
};

export default function CardStrukturOrganisasi({ isVisible = true, tim, url }: CardStrukturOrganisasiProps) {
   return (
      <>
         <div className="flex flex-col">
            <div className={`${isVisible ? 'flex' : 'hidden'} w-36 h-16`}>
               <div className="flex w-1 h-full bg-black mx-auto"></div>
            </div>
            <div
               className="flex w-36 h-36 border rounded-lg bg-white mx-auto shadow-md hover:border-gray-300 hover:rotate-12 transition-all duration-300 text-sm leading-4 hover:scale-105 relative"
               style={{
                  backgroundImage: `url('${url}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
               }}
            >
               <div className="absolute w-full h-full bg-black/15 hover:bg-black/0 rounded-lg transition-all duration-300"></div>
               <div className="flex w-full h-fit overflow-hidden bg-slate-100/75 p-1 mt-auto">
                  <h1 className="font-medium text-center w-full">{tim}</h1>
               </div>
            </div>
         </div>
      </>
   );
}
