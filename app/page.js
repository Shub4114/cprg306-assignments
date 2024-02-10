import Link from 'next/link'

export default function Page() {
  return (
    <main className='flex  flex-col items-center justify-center p-24'>
      <h1 className='justify-between text-canter width-full rounded-md mb-4 text-blue-300 text-4x1 font-extrabold'>CPRG-306: Web Development 2 - Assignment</h1>
      <div className ='flex-col ml-30 mr-60'>
        <p><Link href="week-2">Assignment week-2</Link></p>
        <p><Link href="week-3">Assignment week-3</Link></p>
        <p><Link href="week-4">Assignment week-4</Link></p>
      </div>
    </main>
  );
};
