import ReactDOM from 'react-dom/client';
import './App';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
