import { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillCalendar2WeekFill, BsPersonCircle } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { MdSettings } from 'react-icons/md'
import { GiAutoRepair } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { ImTicket } from "react-icons/im"
import { IoIosPeople } from "react-icons/io";
import { FaPowerOff } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    {
      title: "Items",
      icon: <ImTicket />,
      submenu: true,
      submenuItems: [{ title: "Create New Item" }],
    },
    { title: "Customers", icon: <IoIosPeople /> },
    { title: "Calendar", icon: <BsFillCalendar2WeekFill /> },
    { title: "Profile", icon: <BsPersonCircle />, spacing: true },
    { title: "Settings", icon: <MdSettings /> },
    { title: "Logout", icon: <FaPowerOff />, spacing: true },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-zinc-800 h-screen p-5 pt-8 duration-300 ${
          open ? "w-72" : "w-20"
        } relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer duration-300 ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />

        <div className={`inline-flex`}>
          <AiFillEnvironment className={`bg-my-orange text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"} `} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "hidden"} `} >Repair Book</h1>
        </div>

        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4" }  py-2`}>
          <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"} `} />

          <input key={uuidv4()} type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"} `} />
        </div>

        <ul className={'pt-2'} >
          {Menus.map((menu, index) => (
            <>
              <li key={uuidv4()} 
                  className={`text-gray-300 text-sm flex items-center gap-x-5 cursor-pointer ${open && "hover:bg-light-white rounded-md" }  ${menu.spacing ? "mt-9" : "mt-3" } `}>

                <span className={`text-2xl block float-left ${!open && "p-2"} ${!open && "hover:bg-light-white rounded-md" } `}>
                 {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>

                <span className={`text-base font-light flex-1 duration-200 ${!open && "hidden"} `}>
                  {menu.title}
                </span>
                
                {menu.submenu && open && (
                  <BsChevronDown className={`duration-300 ${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                )}
              </li>
                  
                  {menu.submenu && submenuOpen && open && (
                    <ul>
                      {menu.submenuItems.map((submenuItem, index) => (
                        <li key={uuidv4()} 
                            className={`text-gray-300 text-sm duration-300 flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md`}>
                      
                          {submenuItem.title}
                          
                        </li>
                      ))}
                    </ul>
                  )}


            </>
          ))}
        
        </ul>


      </div>

      <div className="p-7">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default App;
