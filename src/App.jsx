import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyAccountPage from './pages/MyAccountPage';
import Header from './components/layout/Header';
import CreateAdd from './pages/CreateAdd';
import LoginPage from './pages/LoginPage';
import { useAuth } from './store/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const ctx = useAuth();
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/create-add'
          element={
            ctx.isUserLoggedIn ? <CreateAdd /> : <Navigate to={'/login'} />
          }
        />
        <Route
          path='/my-adds'
          element={
            ctx.isUserLoggedIn ? <MyAccountPage /> : <Navigate to={'/login'} />
          }
        />
        {/* pasiekiamas tik neprisijugusiems */}
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='*'
          element={
            <div>
              <h1>404</h1>
              <p>page not found</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
