import React from 'react';

const Notifications = () => {
    const notifications = [
        { id: 1, message: 'John Doe liked your tweet.', time: '2h ago' },
        { id: 2, message: 'Jane Smith followed you.', time: '5h ago' },
        { id: 3, message: 'Your tweet was retweeted by Alex.', time: '1d ago' },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Notifications</h2>
            {notifications.length > 0 ? (
                <ul style={styles.list}>
                    {notifications.map((notification) => (
                        <li key={notification.id} style={styles.notification}>
                            <p style={styles.message}>{notification.message}</p>
                            <span style={styles.time}>{notification.time}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={styles.noNotifications}>You have no notifications.</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    notification: {
        backgroundColor: '#f5f8fa',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    message: {
        margin: 0,
        fontSize: '16px',
    },
    time: {
        fontSize: '12px',
        color: '#657786',
        marginTop: '5px',
        display: 'block',
    },
    noNotifications: {
        textAlign: 'center',
        color: '#657786',
        fontSize: '16px',
    },
};

export default Notifications;