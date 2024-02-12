import Link from 'next/link'

export default function Page() {
  return (
    <main className='flex  flex-col text-center p-24 min-h-screen'>
      <h1 className='justify-between text-center width-half rounded-md mb-4 text-blue-300 text-4x1 font-extrabold'>CPRG-306: Web Development 2 - Assignment</h1>
      <div className ='flex-col max-w-65 justify-center  '>
        <p className=' bg-red-400 font-extrabold p-1'><Link href="week-2">Assignment week-2</Link></p>
        <p className='font-extrabold p-1'><Link href="week-3">Assignment week-3</Link></p>
        <p className='bg-red-400 font-extrabold p-1'><Link href="week-4">Assignment week-4</Link></p>
      </div>
    </main>
  );
};
