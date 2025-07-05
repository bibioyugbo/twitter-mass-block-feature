import React from "react";

interface ModalProps{
    children?:React.ReactNode,
    customStyle?: string
}




export default function BlockedSuccessfulModal({children,customStyle}:ModalProps){
    return(
        <>
            <div className={`blocked-successful-modal ${customStyle ?? ""}`}>
                {children}
            </div>
        </>
    )
}