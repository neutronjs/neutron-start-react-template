import { toast } from 'react-toastify';

export default {
  info: (message) => {
    toast.info(message, {
      className: 'notification-info',
      bodyClassName: 'notification-body',
    });
  },

  success: (message) => {
    toast.success(message, {
      className: 'notification-success',
      bodyClassName: 'notification-body',
    });
  },

  error: (message) => {
    toast.error(message, {
      className: 'notification-error',
      bodyClassName: 'notification-body',
    });
  },

  warning: (message) => {
    toast.warn(message, {
      className: 'notification-warning',
      bodyClassName: 'notification-body',
    });
  },
};
