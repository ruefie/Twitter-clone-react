import React from 'react';
import { Settings, MessageSquarePlus } from 'lucide-react';
import styles from './Messages.module.css';

const Messages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <main className={styles.mainSection}>
          <div className={styles.header}>
            <h1>Messages</h1>
            <div className={styles.headerIcons}>
              <Settings className={styles.icon} />
              <MessageSquarePlus className={styles.icon} />
            </div>
          </div>
          
          <div className={styles.welcomeSection}>
            <h2>Welcome to your inbox!</h2>
            <p>Drop a line, share posts and more with private conversations between you and others on ShoutOut!</p>
            <button className={styles.writeButton}>Write a message</button>
          </div>
        </main>

        <aside className={styles.messageSection}>
          <div className={styles.messageHeader}>
            <h2>Select a message</h2>
            <p>Choose from your existing conversations, start a new one, or just keep swimming.</p>
            <button className={styles.newMessageButton}>New message</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Messages;