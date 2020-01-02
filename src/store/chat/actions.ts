import { Message, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
    return {
        type: SEND_MESSAGE,
        payload: newMessage,
    }
}

// TypeScript infers that this function is return DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp,
        },
    }
}