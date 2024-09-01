import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ContactMessagesTableDashboard } from './ContactMessagesTableDashboard/ContactMessagesTableDashboard';
import { FormattedMessage } from 'react-intl';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../../../Components/Loading/Loading';
import './ContactMessagesDashboard.scss';
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
    confirmAlert({
      title: ' Confirm Delete',
      message: 'Are you sure you want to delete this message?',
      buttons: [{
        label: 'Yes',
        onClick: () => {
          axios.delete(`http://localhost:3000/contactMessages/${id}`)
            .then((response) => {
              setMessages(messages.filter(message => message.id !== id));
              toast.success("Message deleted successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            })
            .catch((error) => {
              console.error("There was an error deleting the Message!", error);
              toast.error("Error deleting the message", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        }
      }, {
        label: 'No',
        onClick: () => {
          // Do nothing if 'No' is clicked
        }
      }]
    })

  };
  let content;
  if (isLoading) {
    content = (
      <Loading />
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
    <div id='contactMessageDashboard'>
      {content}
      <ToastContainer />
    </div>
  )

}
