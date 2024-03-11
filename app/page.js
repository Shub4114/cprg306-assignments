import Link from 'next/link'

export default function Page() {
  return (
    <main className=' flex flex-col items-center justify-center text-center min-h-screen '>
      <h1 className=' text-center width-half rounded-md mb-4 text-blue-300 text-4x1 font-bold'>CPRG-306: Web Development 2 - Assignment</h1>
      <div className ='flex-col max-w-sm p-2'>
        <p className='text-black bg-teal-400  font-bold rounded-full  px-24 py-1 m-1 hover:bg-teal-200'><Link href="week-2">Assignment week-2</Link></p>
        <p className='font-bold font-bold rounded-full px-24 py-1 m-1 hover:bg-teal-200 hover:text-black'><Link href="week-3">Assignment week-3</Link></p>
        <p className='text-black bg-teal-400 font-bold rounded-full px-24 py-1 m-1 hover:bg-teal-200'><Link href="week-4">Assignment week-4</Link></p>
        <p className='font-bold font-bold rounded-full px-24 py-1 m-1 hover:bg-teal-200 hover:text-black'><Link href="week-5">Assignment week-5</Link></p>
        <p className='text-black bg-teal-400 font-bold rounded-full px-24 py-1 m-1 hover:bg-teal-200'><Link href="week-6">Assignment week-6</Link></p>
        <p className='font-bold font-bold rounded-full px-24 py-1 m-1 hover:bg-teal-200 hover:text-black'><Link href="week-7">Assignment week-7</Link></p>
      </div>
    </main>
  );
};
