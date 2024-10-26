import { Link } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import Logo from "../Elements/Logo";

const Navbar = () => {
  const menus = [
    {
      id:"overview",
      link:"/",
      icon:<Icon.Overview/>,
      label:"Overview",
    },
    {
      id:"balances",
      link:"/balance",
      icon:<Icon.Balance/>,
      label:"Balances",
    },
    {
      id:"transactions",
      link:"/transactions",
      icon:<Icon.Transactions/>,
      label:"Transactions",
    },
    {
      id:"bills",
      link:"/bills",
      icon:<Icon.Bill/>,
      label:"bills",
    },
    {
      id:"expenses",
      link:"/expenses",
      icon:<Icon.Expencces/>,
      label:"expenses",
    },
    {
      id:"goals",
      link:"/goals",
      icon:<Icon.Goal/>,
      label:"goals",
    },
    {
      id:"setting",
      link:"/setting",
      icon:<Icon.Setting/>,
      label:"setting",
    },
    
  ]
    return (
<nav className="bg-defaultBlack text-special-bg2 sm:w-72 w-28 h-screen px-7 py-12 flex flex-col justify-between">
  <div>
    <div className="flex justify-center mb-10">
      <Logo variant="text-white text-2x1" />
    </div>
    {menus.map((menu) =>(
      <Link to={menu.link}>
        <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md">
      <div className="text-white mx-auto sm:mx-0">{menu.icon}</div>
      <div className="ms-3 hidden sm:block">{menu.label}</div>
    </div>
      </Link>
    ))}
    </div>
  <div className="sticky bottom-12">
  <Link to="/logout">
    <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
      <div className="mx-auto sm:mx-0"><Icon.Logout /></div>
      <div className="ms-3 hidden sm:block">Logout</div>
    </div>
    </Link>
    <div className="border-b my-10 border-b-special-bg"></div>
    <div className="flex justify-between">
      <div className="mx-auto sm:mx-0 self-center">
        <img src="images/profile.png"/>
      </div>
      <div className="hidden sm:block">
        <div className="text-white font-bold">Username</div>
        <div className="text-xs">View Profile</div>
      </div>
      <div className="hidden sm:block self-center justify-self-end"><Icon.KebabMenu/></div>
    </div>
  </div>
</nav>
    );
};

export default Navbar;