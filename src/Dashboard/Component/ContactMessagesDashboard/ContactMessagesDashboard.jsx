import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ContactMessagesTableDashboard } from './ContactMessagesTableDashboard/ContactMessagesTableDashboard';
import { FormattedMessage } from 'react-intl';

export const ContactMessagesDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3000/contactMessages`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/contactMessages/${id}`)
      .then((response) => {
        setMessages(messages.filter(message => message.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the Message!", error);
      });
  };
  let content;
  if (isLoading) {
    content = (
      <div className='flex items-center justify-center'>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (messages.length === 0) {
    content = <h3 className='text-center h-full dark:!text-white py-60 font-medium'>{<FormattedMessage id='noMessagesToShow' />}</h3>;
  } else {
    content = (
      <div>
        <ContactMessagesTableDashboard messages={messages} deleteMessage={handleDelete} />
      </div>
    );
  }
  return (
    <div>
      {content}
    </div>
  )

}
