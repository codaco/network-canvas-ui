import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Toast from './Toast';
import window from '../window';

const ToastManager = ({
  toasts,
  removeToast,
}) => (
  <div className="toast-container">
    <ul className="toast-container-list">
      <AnimatePresence initial={false}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            dismissHandler={() => {
              if (toast.dismissHandler) {
                toast.dismissHandler();
              }

              removeToast(toast.id);
            }}
            title={toast.title}
            content={toast.content}
            type={toast.type}
            autoDismiss={toast.autoDismiss}
          />
        ))}
      </AnimatePresence>
    </ul>
  </div>
);

export default window(ToastManager);
