import { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 7000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`toast ${visible ? 'show' : 'hide'}`}>
            {message}
        </div>
    );
};

export default Toast;