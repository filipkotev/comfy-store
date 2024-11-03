import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  winter: 'winter',
  dracula: 'dracula'
}

// KEEP IN MIND this won't work on Login and Register pages(where Navbar isn't used)
// this can be fixed with global state, i.e. Redux or React Context
const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || themes.winter;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  const handleTheme = () => {
    // Destructure themes so we can compare it to the state, then set the new state
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
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