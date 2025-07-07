import React, {useEffect, useState} from "react";

interface ModalProps{
    children?:React.ReactNode,
    customStyle?: string
}





export default function BlockedSuccessfulModal({children,customStyle}:ModalProps){

    const [visible, setVisible] = useState(true);



    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    if (!visible) return null;

    return(
        <>
            <div className={`blocked-successful-modal ${customStyle ?? ""}`}>
                {children}
            </div>
        </>
    )
}