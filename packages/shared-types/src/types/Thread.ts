import type Message from './Message'

export default interface Thread {
  id: string,     
  messages: Message[]
}