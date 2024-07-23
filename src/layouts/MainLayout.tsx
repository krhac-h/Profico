import "../global.css";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

interface MainLayoutProps {
    children: React.ReactNode;
    popup?: React.ReactNode;
  }
  

  const MainLayout: React.FC<MainLayoutProps> = (props) => {    
    return (<>
        {props.popup}
        <NavBar />
      <Sidebar>

        <main>
            
            {props.children}
        </main>
      </Sidebar>

    </>
    )
}

export default MainLayout