import React from 'react'

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-4 items-center px-14 sm:px-3 pt-20 w-full max-w-7xl  h-[90dvh] rounded-3xl bg-center bg-cover sm:bg-[url('https://images.unsplash.com/photo-1601929862217-f1bf94503333?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-[url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
     <h1 className='text-slate-50  capitalize text-7xl text-center font-bold'>Luxury limo hire</h1>
     <p className='text-center text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate?</p>
     <a href="#" className="text-slate-50 bg-black rounded-md py-2 px-3 capitalize " >Open fleet</a>
     <div className="form w-full flex justify-end mt-10 sm:justify-center items-center">
      <div  className="p-5 bg-white rounded-lg h-60 flex-[1/2] w-60 " >
      </div>
     </div>
    </div>
  )
}
