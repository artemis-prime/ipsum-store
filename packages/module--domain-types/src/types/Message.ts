
export default interface Message {
  threadId?: string     // transient
  author: MessageAuthor
  content: string
  timestamp: string // new Date(m.timestamp).toLocaleDateString("sv-SE")
  edited: boolean
}

export interface MessageAuthor {
  firstName: string
  lastName: string
  uid: string
}