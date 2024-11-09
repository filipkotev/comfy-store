import { FormInput, SubmitBtn } from '../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { customFetch } from '../utils';


const LOGIN_URL = '/auth/local';

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post(LOGIN_URL, data);
      store.dispatch(loginUser(response.data));
      toast.success('Logged in successfully');
      return redirect('/');
    } catch (error) {
      const errorMessage = error?.response?.data?.error?.message || 'Someting went wrong! Try to login again';
      toast.error(errorMessage);
      return null;
    }
  }
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuest = async () => {
    try {
      const response = customFetch.post(LOGIN_URL, { identifier: 'test@test.com', password: 'secret' });
      dispatch(loginUser(response.data));
      toast.success('Welcome guest user');
      navigate('/products');
    } catch (error) {
      console.log(error);
      toast.error('guest user login error.please try later.');
    }
  }

  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block uppercase"
          onClick={loginAsGuest}
        >guest user</button>
        <p className="text-center">
          Not a member yet?{' '}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login