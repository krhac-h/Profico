
const API = import.meta.env.VITE_SITE_TITLE
import "../styles/logo.css"

const Logo = () => {
  return (
    <div id="logo" >
      <b>
        {
          API.split(" ").map((item: string | React.ReactNode, N:number) => <span key={`logo-${N}`}>{item}</span>)
        }
      </b>
    </div>
  )
}

export default Logo