import { signOut } from 'next-auth/react';
import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";



import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="/images/2.png" alt="" />
          <p className="text-white text-sm group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>
      <div>
        <hr className="bg-gray-600 border-0 h-px my-2" />
        <div className="px-3 py-2 flex items-center text-center text-white text-sm hover:underline">
          <IoSettingsOutline className="w-5 h-5 mr-2" />
          <p>
            Settings
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-2" />
        <div onClick={() => signOut()} className="px-3 py-2 flex items-center text-center text-white text-sm hover:underline">
          <FaSignOutAlt className="w-5 h-5 mr-2 " />
          <span>Sign out of MazaganTv</span>
        </div>
      </div>
    </div>
  );
  
}

export default AccountMenu;