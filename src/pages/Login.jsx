import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { customFetch } from '../utils';

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const loginUrl = '/auth/local';

    try {
      const response = await customFetch.post(loginUrl, data);
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
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block uppercase">guest user</button>
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