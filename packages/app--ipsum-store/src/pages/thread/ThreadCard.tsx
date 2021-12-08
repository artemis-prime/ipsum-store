import React from 'react'
import reactModal from '@prezly/react-promise-modal'

import {
  Button, 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogActions,
  Paper
} from '@mui/material'

import { firstNWords } from '@artemis-prime/wfw/util'
import type { Message } from '@ipsum-labs/domain-types'

import { useThreadService } from '~/domain/thread/ThreadService'
import { MessagesView } from '~/components'

import './threadCard.scss'

const ThreadCard: React.FC<{
  offerId: string
}> = ({
  offerId
}) => {
  const messagesService = useThreadService()
  return (
    <Paper className='offer-messages-card card-outer'>
      <MessagesView 
        messagesSource={messagesService} 
        messagesKey={offerId}
        allowAttachments 
        allowDelete 
        allowEdit 
        confirmDeleteFunction={deleteConfirmed}/>
    </Paper>
  )
}

const deleteConfirmed = async (message: Message) => (
  
    // Note that return type is Promise<boolean> by virtue of the async keyword
    // (infered from the return type of reactModal, I think)
  await reactModal(({ show, onSubmit, onDismiss }) => (
   
    <Dialog open={show} className='offer-messages-card-confirm-delete-modal-outer'>
      <DialogTitle>Confirm Delete Message</DialogTitle>
      <DialogContent>
        Delete message by <span className='author'>{message.author.firstName} {message.author.lastName}</span> that
        starts with <span className='content'><q>{firstNWords(message.content, 5)}</q></span>...?
      </DialogContent>
    

      <DialogActions>
        <Button variant="outlined" color='secondary' onClick={onDismiss}>Cancel</Button>
        <Button color='primary' onClick={onSubmit}>Confirm</Button>
      </DialogActions>
    </Dialog>
  ))
)

export default ThreadCard