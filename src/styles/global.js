import { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  /* Default */
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    background-color: ${colors.background};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, textarea {
    font-family: 'Ubuntu', sans-serif !important;
  }
  a, button {
    outline: none;
  }

  /* Notification */
  .notification-error,
  .notification-info,
  .notification-success,
  .notification-warning {
    display:flex;
    .notification-body {
      padding: 30px;
      font-size: 14px;

      &:before {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .notification-error {
    background-color: ${colors.error};
    .notification-body:before {
      content: 'Error message:';
    }
  }
  .notification-info {
    background-color: ${colors.info};
    .notification-body:before {
      content: 'Info message:';
    }
  }
  .notification-success {
    background-color: ${colors.success};
    .notification-body:before {
      content: 'Success message:';
    }
  }
  .notification-warning {
    background-color: ${colors.warning};
    .notification-body:before {
      content: 'Warning message:';
    }
  }
`;

export default GlobalStyle;
