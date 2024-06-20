import { Outlet, 
    // useNavigation 
} from "react-router-dom";
import Header from "./Header";


export default function AppLayout() {
    // const navigation = useNavigation();
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
    <Header/>
    
      <main className="mx-auto max-w-3xl bg-gray-100"> 
        <Outlet/>    
      </main>
    
    </div>
  )
}
