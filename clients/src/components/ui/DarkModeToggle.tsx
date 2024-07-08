import { useDarkMode } from '../../context/DarkmodeContext'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon/> }
    </button>
  )
}
