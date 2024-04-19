import cloudinary from 'cloudinary';
import BristolPunx from './BristolPunx';

export const metadata = {
  title: 'DoomriderMedia I Bristol Punx',
  description: 'Doomrider&apos;s personal website',
};

async function BristolPunxPage() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/BristolPunx')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();

  return (
    <>
      <BristolPunx data={results} />
    </>
  );
}

export default BristolPunxPage;
