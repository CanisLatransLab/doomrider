import cloudinary from 'cloudinary';
import Poland from './Poland';

async function polandPage() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/Poland')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();

  return (
    <>
      <Poland data={results} />
    </>
  );
}

export const metadata = {
  title: `DoomriderMedia I Poland`,
  description: 'Doomrider&apos;s personal website',
};

export default polandPage;
