import fp from "@/assets/images/iPhone-13-PRO-fp.com.ar.png"
export const SmartPhone = () => {
  return (
    <div className=" mt-6 group cursor-pointer hover:skew-x-6 hover:-skew-y-6 hover:duration-500 duration-500 group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner  flex flex-col justify-around items-center w-64 h-90 bg-transparent text-transparent">
      <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-12 after:h-12  after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 flex flex-col font-extrabold text-6xl z-10">

      </div>
      <div className="flex flex-row justify-center text-sm font-thin items-center gap-1 h-99 p-2">

        <img src={fp.src} className="" alt="" />
      </div>
    </div>
  )

}