import { Form, useLoaderData, Link } from 'react-router-dom';
import { FormInput, FormSelect, FormRange, FormCheckbox } from './';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      {/* SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
        size="input-sm"
      />

      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name="category"
        defaultValue={category}
        list={meta.categories}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name="company"
        defaultValue={company}
        list={meta.companies}
        size='select-sm'
      />
      {/* ORDER */}
      <FormSelect
        label="sort by"
        name="order"
        defaultValue={order}
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
      />
      {/* PRICE */}
      <FormRange
        label="select price"
        name="price"
        price={price}
        size="range-sm"
      />
      {/* SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
        size="checkbox-sm"
      />
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>

      {/* This way we reset the form because there is not params in the url - '/products', therefore all form fields will accept their default values */}
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}

export default Filters;