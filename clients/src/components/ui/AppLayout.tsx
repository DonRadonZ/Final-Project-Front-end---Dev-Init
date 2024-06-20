import { Outlet, 
    // useNavigation 
} from "react-router-dom";
import Header from "./Header";


export default function AppLayout() {
    // const navigation = useNavigation();
  return (
    <div>
    <Header/>
    
      <main className="flex"> 
        <Outlet/>    
      </main>
    
    </div>
  )
}
