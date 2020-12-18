import Avatar from '../Avatar/';
import GithubIcon from '../Icons/Github';
import LinkedinIcon from '../Icons/Linkedin';
import MailIcon from '../Icons/Mail';

const Header = () => {
  return (
    <header className='flex gap-4'>
      <Avatar picture='/assets/face.png' name='Bartek Telec' />
      <div className='flex flex-col justify-between h-12'>
        <p className='font-bold text-base leading-none'>
          Bartek Telec - Frontend Dev
        </p>
        <div className='flex gap-2'>
          <a
            href='https://github.com/bartektelec'
            className='opacity-50 hover:opacity-100'
          >
            <GithubIcon className='w-5 h-5' />
            <span className='sr-only'>Github Profile Link</span>
          </a>
          <a
            href='https://www.linkedin.com/in/bartlomiej-telec-212755153/'
            className='opacity-50 hover:opacity-100'
          >
            <LinkedinIcon className='w-5 h-5 cursor-pointer' />
            <span className='sr-only'>LinkedIn Profile Link</span>
          </a>
          <a href='' className='opacity-50 hover:opacity-100'>
            <MailIcon className='w-5 h-5 cursor-pointer' />
            <span className='sr-only'>Contact Link</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
