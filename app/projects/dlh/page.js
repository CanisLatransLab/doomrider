import cloudinary from 'cloudinary';
import Dlh from './Dlh';

async function DlhPage() {
  const results = await cloudinary.v2.search
    .expression('folder=Projects/DLH')
    .sort_by('public_id', 'desc')
    .max_results(40)
    .execute();

  return (
    <>
      <Dlh data={results} />
    </>
  );
}

export const metadata = {
  title: 'DoomriderMedia I DLH',
  description: 'Doomrider&apos;s personal website',
};

export default DlhPage;
