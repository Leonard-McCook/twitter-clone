import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import {HomeIcon} from "@heroicons/react/solid"
import {BellIcon, BookmarkIcon, ClipboardIcon, HashtagIcon, InboxIcon, UserIcon, DotsCircleHorizontalIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div>
      {/* Twitter Logo */}
        <div className="">
            <Image 
              width="50"
              height="50" 
              src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" 
              alt="Twitter logo">
            </Image>
        </div>
              


        {/* Menu */}
        <div className="">
          <SidebarMenuItem text="Home" Icon={HomeIcon} />
          <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>



        {/* Button */}
        <button>Tweet</button>

        {/* Mini-Profile */}
        <div className="">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGLGLHdEj76ww/profile-displayphoto-shrink_200_200/0/1597853648256?e=1659571200&v=beta&t=l-C8_WzBgsxGKhH7bi53P916ILsq8fU-NELt8viO8IY"  alt="user-image" />
            <div className="">
              
            </div>
        </div>

    </div>
  )
}
