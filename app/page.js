import ChatList from "./components/chatlist";
import Chat from "./components/chat";
import ChatDetails from "./components/chatDetails";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <Image
          className="w-full h-full absolute opacity-80"
          src={'/background.jpg'}
          alt="bg-image"
          width={1000}
          height={1000}
        />
        <div className="relative w-[80vw] h-[90vh] flex shadow-2xl justify-between backdrop-blur-sm">
          <div className="w-1/4">
            <ChatList />
          </div>
          <div className="border-x-2 border-indigo-400 w-1/2">
            <Chat />
          </div>
          <div className="w-1/4">
            <ChatDetails />
          </div>
        </div>

      </div>
    </>
  );
}
