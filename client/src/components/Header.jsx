import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-slate-200 shadow-sm'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Batra</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
          <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-500' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          {currentUser ? (
            <Link to='/profile'>
              <img
                src={currentUser.profilePicture || 'https://via.placeholder.com/50'} // Use currentUser's profile picture if available, else use a dummy image
                alt='profile'
                className='h-7 w-7 rounded-full object-cover'
              />
            </Link>
          ) : (
            <Link to='/sign-in'>Sign In</Link>
          )}
        </ul>
      </div>
    </header>
  );
}
