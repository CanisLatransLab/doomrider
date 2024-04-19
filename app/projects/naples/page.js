import cloudinary from 'cloudinary';
import Naples from './Naples';

async function naplesPage() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/Naples')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();

  return (
    <>
      <Naples data={results} />
    </>
  );
}

export const metadata = {
  title: `DoomriderMedia I Naples`,
  description: 'Doomrider&apos;s personal website',
};

export default naplesPage;
