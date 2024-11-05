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

export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}
    >
      {icon}
      <button
        onClick={onClick}
        className={`overflow-hidden transition-all duration-300 ease-in-out 
              ${expanded ? 'w-52 ml-3 px-2 py-2 g-indigo-400 text-black' : 'w-0'}
              text-left rounded-md`}
      >
        {expanded && text}
      </button>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
        />
      )}

      {!expanded && (
        <button
          onClick={onClick}
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </button>
      )}
    </li>
  );
}
