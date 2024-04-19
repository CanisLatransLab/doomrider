import { SwipeCarousel } from '@/components/SwipeCarousel';
import cloudinary from 'cloudinary';
import DoomriderLogo from '@/components/navbar/DoomriderLogo';

async function Home() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/Main')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();

  const imgs = results.resources.map((img) => img.secure_url);

  return (
    <main className='w-full flex flex-col h-screen sm:grid place-content-center'>
      <div className='w-full max-w-[120rem] max-sm:flex flex-col'>
        <div className='p-[2rem] mx-auto'>
          <DoomriderLogo />
        </div>
        <SwipeCarousel imgs={imgs} />
      </div>
    </main>
  );
}

export default Home;
