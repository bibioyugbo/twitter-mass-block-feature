
export type MassBlockModalProps={
    onClose:()=>void
    onBlock:()=>void
}

export default function MassBlockModal({onClose,onBlock}:MassBlockModalProps){


   return(
       <>
           <div className={"modal-overlay-form"}>
               <div className={"confirm-mass-block"}>
                   <div className={"confirm-mass-block-header"}>
                       Block 3 users ?

                   </div>
                   <div className={"confirm-mass-block-body"}>
                       They will not be able to follow you or view your posts, and you will not see posts or
                       notifications from them.

                   </div>
                   <div className={"confirm-mass-block-buttons"}>
                       <button onClick={onBlock}  className={"block-btn"}>
                           Block
                       </button>
                       <button onClick={onClose} className={"cancel-btn"}>
                           Cancel
                       </button>


                   </div>

               </div>

           </div>
       </>
   )
}