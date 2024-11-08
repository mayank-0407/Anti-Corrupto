import { MoreVertical, ChevronLast, ChevronFirst } from 'lucide-react';
import { useContext, createContext, useState, useEffect } from 'react';
import { isLogin, logOut, getToken } from '../../Utils/cookieSetup';
import { fetchUserDetails } from '../../Utils/API/authAPI';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [thisName, setThisname] = useState('');
  const [thisEmail, setThisEmail] = useState('');

  const getUserDetails = async () => {
    const myToken = getToken();
    const thisUser = await fetchUserDetails(myToken);
    console.log('User Details navbar : ', thisUser);
    setThisEmail(thisUser.data.email);
    setThisname(thisUser.data.name);
  };
  useEffect(() => {
    const temp = getUserDetails();
  }, []);

  return (
    <aside className="h-screen no-scrollbar">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="logo.jpg"
            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 items-center justify-center">
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
          >
            <div className="leading-4">
              <h4 className="font-semibold text-gray-400">{thisName}</h4>
              <span className="text-xs text-gray-600">{thisEmail}</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick, subItems = [] }) {
  const { expanded } = useContext(SidebarContext);
  const [isSubListOpen, setIsSubListOpen] = useState(false);

  const handleToggleSubList = () => {
    setIsSubListOpen((prev) => !prev);
  };

  return (
    <li
      className={`
        relative flex flex-col items-start py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}
      `}
    >
      <div className="flex items-center w-full">
        {icon}
        <button
          onClick={onClick || handleToggleSubList}
          className={`overflow-hidden transition-all duration-300 ease-in-out
            ${expanded ? 'w-52 ml-3 px-2 py-2 text-left text-black' : 'w-0'}
          `}
        >
          {expanded && text}
        </button>
        {subItems.length > 0 && (
          <button
            onClick={handleToggleSubList}
            className="ml-auto text-gray-600"
          >
            {isSubListOpen ? '▲' : '▼'}
          </button>
        )}
      </div>

      {isSubListOpen && subItems.length > 0 && (
        <ul className={`pl-8 transition-all ${expanded ? 'block' : 'hidden'}`}>
          {subItems.map((subItem, index) => (
            <li
              key={index}
              onClick={subItem.onClick}
              className="py-1 px-2 text-gray-500 hover:bg-indigo-50 rounded-md cursor-pointer"
            >
              {subItem.text}
            </li>
          ))}
        </ul>
      )}

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
        />
      )}
    </li>
  );
}