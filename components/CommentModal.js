import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/outline";
export default function CommentModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      
      {open && (
        <Modal 
        isOpen={open} 
        onRequestClose={() => setOpen(false)}
        className="max-w-lg w-[90%] h-[300px] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md">
          
          <div className="p-1">
            <div className="border-b border-gray-200 py-2 px-1.5">
              <div onClick={() =>setOpen(false)}className="hoverEffect w-9 h-9 flex items-center justify-center">
                <XIcon className="h-[22px] text-gray-700"/>
              </div>

            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
