
import React, { useState, useEffect } from 'react';
import './App.css';
import WhatsAppAPI from 'web-whatsapp-api';

const api = new WhatsAppAPI();

function App() {
  const [messages, setMessages] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadMessages = async () => {
      const messagesResponse = await api.getMessages();
      setMessages(messagesResponse);

      const contactsResponse = await api.getContacts();
      setContacts(contactsResponse);

      setLoaded(true);
    };

    loadMessages();
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>WhatsApp Clone</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
