import { FormInput, SubmitBtn } from '../components';
import { Form, Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const registerUrl = '/auth/local/register';

  try {
    const response = await customFetch.post(registerUrl, data);
    toast.success('Account created successfully!');
    return redirect('/login');
  } catch(err) {
    const errorMessage = err?.response?.data?.error?.message || 'Please double check your credentials';

    toast.error(errorMessage);
    return null;
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="username"
          name="username"
        />
        <FormInput
          type="email"
          label="email"
          name="email"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?{' '}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Register