
export default interface Message {
  threadId: string
  content: string
  timestamp: string // new Date(m.timestamp).toLocaleDateString("sv-SE")
  edited: boolean
}