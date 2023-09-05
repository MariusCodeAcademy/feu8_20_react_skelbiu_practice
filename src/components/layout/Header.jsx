import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../store/AuthProvider';

export default function Header() {
  const ctx = useAuth();
  console.log('ctx ===', ctx);
  return (
    <header className='container flex justify-between items-center '>
      <Link className='text-2xl' to={'/'}>
        Our<strong>Adds</strong>
      </Link>
      <nav>
        <NavLink className={'text-lg px-3 py-2 hover:bg-slate-200'} to={'/'}>
          Adds
        </NavLink>
        <NavLink
          className={'text-lg px-3 py-2 hover:bg-slate-200'}
          to={'/my-adds'}
        >
          My adds
        </NavLink>
        <NavLink
          className={'text-lg px-3 py-2 hover:bg-slate-200'}
          to={'/create-add'}
        >
          Create add
        </NavLink>
        <NavLink
          className={'text-lg px-3 py-2 hover:bg-slate-200'}
          to={'/login'}
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}
