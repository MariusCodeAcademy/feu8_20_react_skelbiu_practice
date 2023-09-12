import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../store/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FaHamburger } from 'react-icons/fa';
import { useState } from 'react';
function OneLink(props) {
  return (
    <NavLink
      onClick={props.onClick}
      className={'text-lg px-3 py-2 hover:bg-slate-200'}
      to={props.to}
    >
      {props.title}
    </NavLink>
  );
}

function logoutFire() {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      toast.success('You have logged out');
    })
    .catch((error) => {
      // An error happened.
      console.log('error ===', error);
    });
}

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // atvaizduoti prisijungusio userio email is conteksto
  const ctx = useAuth();
  console.log('ctx ===', ctx);
  return (
    <header className='container flex justify-between items-center '>
      <Link className='text-2xl' to={'/'}>
        Our<strong>Adds</strong>
      </Link>
      <nav
        className={` lg:block ${
          isMobileOpen
            ? 'flex flex-col absolute top-9 bg-slate-200 right-0'
            : 'hidden'
        }`}
      >
        <OneLink to={'/'} title={'Adds'} />
        {ctx.isUserLoggedIn && (
          <>
            <OneLink to={'/my-adds'} title={'My adds'} />
            <OneLink to={'/create-add'} title={'Create add'} />
          </>
        )}
        {ctx.isUserLoggedIn === false && (
          <OneLink to={'/login'} title={'Login'} />
        )}
        {ctx.isUserLoggedIn && (
          <OneLink onClick={logoutFire} to={'/login'} title={'Logout'} />
        )}
        {ctx.isUserLoggedIn && (
          <p className='inline-block text-lg px-3 py-2'>{ctx.email}</p>
        )}
      </nav>
      <div className='block lg:hidden '>
        <FaHamburger onClick={() => setIsMobileOpen(!isMobileOpen)} />
      </div>
    </header>
  );
}
