import type Message from './Message'

export default interface Thread {
  id: string    
  participantIds: string[]      // uid's of participants
  messages: Message[]
}