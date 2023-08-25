import { Dialog } from "@headlessui/react"
import { ReactNode, useState } from "react"


interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode; // Using the children prop provided by React
  }
  
const Modal = (props: ModalProps) => {

    return(
        <Dialog
                open={props.open}
                onClose={props.onClose}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto max-w-sm rounded bg-white text-black">
                   {props.children}
                </Dialog.Panel>
                </div>
            </Dialog>
    )
}

export default Modal