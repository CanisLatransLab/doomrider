import cloudinary from 'cloudinary';
import NoOneIsIllegal from './NoOneIsIllegal';

async function noOneIsIllegalPage() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/NoOneIsIllegal')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();
  return (
    <>
      <NoOneIsIllegal data={results} />
    </>
  );
}

export const metadata = {
  title: `DoomriderMedia I No One Is Illegal`,
  description: 'Doomrider&apos;s personal website',
};

export default noOneIsIllegalPage;
