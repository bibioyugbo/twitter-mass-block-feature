import { createSlice} from "@reduxjs/toolkit";

export type NotificationState = {
    modal: ModalType
}

type ModalType = {
    show?: boolean,
    type: 'success'|'error',
    title: string,
    body: string,
    proceedButton: string,
    onClose?: () => void
}

const initialState: NotificationState = {
    modal: {} as ModalType,
}


const slice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        openModal(state, {payload}:{payload:ModalType}) {
            state.modal.type = payload.type
            state.modal.title = payload.title
            state.modal.body = payload.body
            state.modal.onClose = payload.onClose
            state.modal.proceedButton = payload.proceedButton
            state.modal.show = true
            console.log(state.modal)
        },
        closeModal(state) {
            state.modal={} as ModalType
            state.modal.show = false
        }
    },
})

export const notification = {
    reducer: slice.reducer,
    mutation: slice.actions,
}