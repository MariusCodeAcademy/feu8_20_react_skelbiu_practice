export default function LoginForm() {
  return (
    <div>
      <form className='max-w-xs'>
        <div className='mb-2'>
          <input
            className='border border-slate-500 px-4 py-2 w-full rounded-md'
            type='text'
            id='email'
            placeholder='Email'
          />
        </div>
        <div className='mb-2'>
          <input
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
