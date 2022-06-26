import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

export default function Posts({post}) {
  return <div>
        {/* user image */}
        <img src={post.userImg} alt="user image"  />

        {/* right side */}
        <div className="">
        {/* Header */}

          <div className="">
              {/* post user info */}
              <div className="">
                <h4>{post.name}</h4>
                 <span>{post.username}</span>
                 <span>{post.timestamp}</span>
                

              </div>


              {/* dot icon */}
              <DotsHorizontalIcon className="h-10"/>
          </div>

          {/* post text */}

          <p>{post.text}</p>

          {/* post image */}
          <img src={post.img} alt="post images"  />

          {/* icons */}
          
          <div className="">
              <ChatIcon className="h-9"/>
              <TrashIcon className="h-9"/>
              <HeartIcon className="h-9"/>
              <ShareIcon className="h-9"/>
              <ChartBarIcon className="h-9"/>
          </div>

            


        </div>
  </div>
}

