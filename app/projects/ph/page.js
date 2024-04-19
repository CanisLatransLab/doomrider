import cloudinary from 'cloudinary';
import Ph from './Ph';

async function phPage() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/Naples')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();
  return (
    <>
      <Ph data={results} />
    </>
  );
}

export const metadata = {
  title: `DoomriderMedia I Ph`,
  description: 'Doomrider&apos;s personal website',
};

export default phPage;
