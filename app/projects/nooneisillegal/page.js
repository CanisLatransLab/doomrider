import cloudinary from 'cloudinary';
import NoOneIsIllegal from './NoOneIsIllegal';

async function noOneIsIllegalPage() {
  // const results = await cloudinary.v2.search
  //   .expression('folder=Projects/NoOneIsIllegal')
  //   .sort_by('public_id', 'desc')
  //   .max_results(40)
  //   .execute();

  const cloudinary = require('cloudinary').v2;

  // Fetch results from Cloudinary
  const results = await cloudinary.search
    .expression('folder=Projects/NoOneIsIllegal')
    .max_results(40)
    .execute();

  // Function to extract numeric part from the public_id
  const extractNumber = (publicId) => {
    const match = publicId.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Sort results by numeric part of public_id
  const sortedResults = results.resources.sort((a, b) => {
    return extractNumber(a.public_id) - extractNumber(b.public_id);
  });

  return (
    <>
      <NoOneIsIllegal data={results} />
    </>
  );
}

export const metadata = {
  title: `DoomriderMedia | No One Is Illegal`,
  description: 'Doomrider&apos;s personal website',
};

export default noOneIsIllegalPage;
