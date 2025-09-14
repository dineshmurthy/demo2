import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const addMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !author.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post('/api/messages', {
        text: newMessage,
        author: author
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding message:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`/api/messages/${id}`);
      setMessages(messages.filter(msg => msg._id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
        <p>Share your thoughts with the community!</p>
      </header>

      <main className="App-main">
        <div className="message-form">
          <h2>Post a New Message</h2>
          <form onSubmit={addMessage}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="What's on your mind?"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                required
                rows="4"
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Posting...' : 'Post Message'}
            </button>
          </form>
        </div>

        <div className="messages-section">
          <h2>Messages ({messages.length})</h2>
          <div className="messages-list">
            {messages.length === 0 ? (
              <p className="no-messages">No messages yet. Be the first to post!</p>
            ) : (
              messages.map((message) => (
                <div key={message._id} className="message-card">
                  <div className="message-header">
                    <span className="author">{message.author}</span>
                    <span className="timestamp">
                      {new Date(message.createdAt).toLocaleString()}
                    </span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteMessage(message._id)}
                      title="Delete message"
                    >
                      
                    </button>
                  </div>
                  <div className="message-text">{message.text}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
