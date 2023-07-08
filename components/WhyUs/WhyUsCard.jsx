export const WhyUsCard = ({src, title, isSqr}) => {
    return(

        <div className={`bg-white relative  group w-[10rem] cursor-pointer opacity-100 shadow-md  ease-out  overflow-hidden hover:translate-y-[-15%] duration-300 ease transition-all  ${!isSqr ?  'h-[11rem]' : 'h-[10rem]'} rounded-md flex flex-col items-center justify-center`}>
        <div className="absolute group-hover:bg-green-600 top-0 left-0 w-full h-full z-[-1] rounded-t-full translate-y-[150%] group-hover:translate-y-0 transition-all duration-300 ease-in group-hover:ease-in group-hover:rounded-t-md"></div>
        <div className="w-1/3 flex justify-center items-center flex-col gap-2">
          <img src={src} alt="img"></img>
          <h1 className='max-w-sm text-center text-black  group-hover:text-white'>{title}</h1>
        </div>
    </div>
        )
  }