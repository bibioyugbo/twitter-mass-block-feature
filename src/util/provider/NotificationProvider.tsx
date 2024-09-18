// import NotificationModal from "../../components/modal/NotificationModal.tsx";
// import {useSelector} from "react-redux";
// import {NotificationState} from "../../store/modules/notification.ts";
// import {useEffect} from "react";
//
// export function NotificationProvider() {
//     const notificationState = useSelector<any>((state)=> state.notification) as NotificationState
//     // const dispatch = useDispatch()
//     useEffect(() => {
//         console.log('notified')
//     }, [notificationState.modal.show]);
//     return (
//         <>
//             <NotificationModal
//                 proceedButton={notificationState.modal.proceedButton}
//                 onClose={notificationState.modal.onClose}
//                 type={notificationState.modal.type}
//                 title={notificationState.modal.title}
//                 body={notificationState.modal.body}
//                 show={notificationState.modal.show} />
//         </>
//     )
//
// }