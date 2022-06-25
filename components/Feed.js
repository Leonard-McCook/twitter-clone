import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Leonard McCook",
      username: "@LeoMcCookDev",
      userImg: "https://media-exp1.licdn.com/dms/image/C5603AQGLGLHdEj76ww/profile-displayphoto-shrink_200_200/0/1597853648256?e=1659571200&v=beta&t=l-C8_WzBgsxGKhH7bi53P916ILsq8fU-NELt8viO8IY",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      text: "Nice view!",
      timestamp: "1 hour ago",
    },
    
    {
      id: "2",
      name: "Leonard McCook",
      username: "@LeoMcCookDev",
      userImg: "https://images.unsplash.com/photo-1550853123-b81beb0b1449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvc3RhJTIwcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      text: "I was born and raised in Costa Rica, and I've never seen a red-eyed leaf frog in person lol",
      timestamp: "2 hours ago",
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 max-h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) =>(
          <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

