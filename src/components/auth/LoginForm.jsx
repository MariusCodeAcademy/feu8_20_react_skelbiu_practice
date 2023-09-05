import { useFormik } from 'formik';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('supildytos reiksmes ===', values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='max-w-xs'>
        <div className='mb-2'>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            className='border border-slate-500 px-4 py-2 w-full rounded-md'
            type='text'
            id='email'
            placeholder='Email'
          />
        </div>
        <div className='mb-2'>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            className='border border-slate-500 px-4 py-2 w-full rounded-md'
            type='password'
            id='password'
            placeholder='Password'
          />
        </div>
        <button
          className='border border-slate-500 px-4 py-2 rounded-md'
          type='submit'
        >
          Login
        </button>
      </form>
    </div>
  );
}
