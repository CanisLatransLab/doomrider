import DoomriderLogo from '@/components/navbar/DoomriderLogo';

function Loader() {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='text-primary animate-pulse'>
        <DoomriderLogo />
      </div>
    </div>
  );
}

export default Loader;
