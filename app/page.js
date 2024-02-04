import Link from 'next/link'

export default function Page() {
  return (
    <main className='text-center text-4xl m-8'>
      <h1 className='flex justify-center p-2 border width-auto rounded-md ml-60 mr-60 text-blue-300'>CPRG-306: Web Development 2 - Assignment</h1>
      <div className ='flex-col ml-30 p-2 mr-60'>
        <p><Link href="week-2">Assignment week-2</Link></p>
        <p><Link href="week-3">Assignment week-3</Link></p>
      </div>
    </main>
  );
};
