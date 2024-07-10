import { Outlet, 
    // useNavigation 
} from "react-router-dom";
import Header from "../Header";
import { useDarkMode } from "../../context/DarkmodeContext";


export default function AppLayout() {
    // const navigation = useNavigation();
    const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? "dark" : ""}>
    <Header/>
    
      <main className="p-[2rem] min-h-screen dark:bg-stone-700"> 
        <Outlet/>    
      </main>
    
    </div>
  )
}