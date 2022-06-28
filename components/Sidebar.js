import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import {HomeIcon} from "@heroicons/react/solid"
import {BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, InboxIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start  fixed h-full xl:ml-24" >
      {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image 
              width="50"
              height="50" 
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" 
              alt="Twitter logo">
            </Image>
        </div>
              


        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
          <SidebarMenuItem text="Home" Icon={HomeIcon} active />
          <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>



        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

        {/* Mini-Profile */}
        <div className="hoverEffect text-color-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGLGLHdEj76ww/profile-displayphoto-shrink_200_200/0/1597853648256?e=1659571200&v=beta&t=l-C8_WzBgsxGKhH7bi53P916ILsq8fU-NELt8viO8IY"  alt="user-image" className="h-10 w-10 rounded-full xl:mr-2" />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Leonard McCook</h4>
                <p className="text-gray-500">@LeoMcCookDev</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 xl:inline" />
        </div>

    </div>
  )
}
