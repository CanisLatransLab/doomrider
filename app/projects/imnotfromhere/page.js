import cloudinary from 'cloudinary';
import ImNotFromHere from './ImNotFromHere';

async function iNfHpage() {
  const results = await cloudinary.v2.search
    .expression(`folder=Projects/I'mNotFromHere`)
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();
  return (
    <>
      <ImNotFromHere data={results} />
    </>
  );
}

export const metadata = {
  title: `DoomriderMedia I I'm Not From Here`,
  description: 'Doomrider&apos;s personal website',
};

export default iNfHpage;
