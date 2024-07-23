import Logo from "./Logo"
import SearchBar from "./SearchBar"
import MobileMenu from "../components/MobileMenu"
const NavBar = () => {


  return (
    <div >
      <nav className="container" >
        <div id="NavGrid" >
          <div className="grid-area-A">
            <Logo></Logo>
          </div>
          <div className="grid-area-B">
            <SearchBar />
          </div>
          <div className="grid-area-C">
            <MobileMenu></MobileMenu>
          </div>
        </div>
      </nav>
      <div className="container">

<hr></hr>
      </div>
    </div>
  )
}

export default NavBar