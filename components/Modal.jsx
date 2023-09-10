import React from "react";

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">

        </div >
    )
}

export default Modal