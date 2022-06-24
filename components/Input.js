import { EmojiHappyIcon, PhoneOutgoingIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGLGLHdEj76ww/profile-displayphoto-shrink_200_200/0/1597853648256?e=1659571200&v=beta&t=l-C8_WzBgsxGKhH7bi53P916ILsq8fU-NELt8viO8IY" alt="user-img" className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="w-full">
            <div className="">
                <textarea className="w-full" rows="2" placeholder="What's happening?"></textarea>
            </div>
            <div className="">
                <div className="">
                    <PhotographIcon className="h-10 w-10"/>
                    <EmojiHappyIcon className="h-10 w-10"/>
                </div>
                <button>Tweet</button>
            </div>
        </div> 
    </div>
  )
}
