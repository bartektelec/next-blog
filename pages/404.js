import Link from 'next/link';
import BackIcon from '../components/Icons/Back';

const FourOhFour = () => {
  return (
    <div
      style={{
        width: '66.666%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div className='py-8'>
        <Link href='/'>
          <a className='flex gap-4 items-center text-xl font-semibold opacity-75 hover:opacity-100'>
            <BackIcon className='w-6 h-6' />
            Go home
          </a>
        </Link>
      </div>
      <h1 className='py-8'>Sorry! Page not found</h1>
    </div>
  );
};

export default FourOhFour;
