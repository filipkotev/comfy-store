import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

const ThemeToggler = () => {
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className='navbar-end'>
      <label className='swap swap-rotate '>
        {/* this hidden checkbox controls the state */}
        <input type='checkbox' onChange={handleTheme} />

        {/* sun icon */}
        <BsSunFill className='swap-on h-4 w-4' />

        {/* moon icon */}
        <BsMoonFill className='swap-off h-4 w-4' />
      </label>
    </div>
  )
}

export default ThemeToggler;