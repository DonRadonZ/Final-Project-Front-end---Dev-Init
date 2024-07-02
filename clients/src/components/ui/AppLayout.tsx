import { Outlet, 
    // useNavigation 
} from "react-router-dom";
import Header from "./Header";


export default function AppLayout() {
    // const navigation = useNavigation();
  return (
    <div>
    <Header/>
    
      <main className="p-[2rem] h-[92.5dvh] w-full"> 
        <Outlet/>    
      </main>
    
    </div>
  )
}
