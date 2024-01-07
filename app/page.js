import Image from 'next/image';
import wansu from '../public/assets/wonsuHero.jpg';
import logo from '../public/assets/doom-logo.png';

export default function Home() {
  return (
    <main className='bg-[#363636] h-screen grid place-content-center '>
      <div className='max-w-[50rem]'>
        <Image src={logo} alt='Doomrider' />
        <Image src={wansu} alt='Doomrider' />
      </div>
      <h1 className=' text-white text-3xl text-center mt-[3vh]'>
        coming soon ...
      </h1>
    </main>
  );
}
