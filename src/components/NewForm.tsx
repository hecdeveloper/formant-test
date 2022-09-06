import React from 'react';
import { Formik, Form, Field } from 'formik';

const NewForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add Robot
      </h1>
      <Formik
        initialValues={{ name: '', arms: '', email: '', notes: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="name">
                Name:
              </label>
              <Field
                id="name"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Robot Name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="number">
                Number of arms:
              </label>
              <Field
                id="arms"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Arms Number"
                name="arms"
              />
            </div>

            <div className="mb-4">
              <label
                className="text-gray-800"
                htmlFor="phone
            "
              >
                Notes:
              </label>
              <Field
                as="textarea"
                id="notes"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Phone del Cliente"
                name="notes"
              />
            </div>
            <input
              type="submit"
              value="Add Robot"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewForm;
