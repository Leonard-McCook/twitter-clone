import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
export default function Sidebar() {
  return (
    <div>
        {/* Twitter Logo */}
        <div className="">
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>


        {/* Menu */}
        <div className="">
          <SidebarMenuItem />

        </div>


        {/* Button */}

        {/* Mini-Profile */}

    </div>
  )
}
