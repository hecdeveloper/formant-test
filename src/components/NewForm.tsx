import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NewAlert from './NewAlert';
// json-server --watch db.json --port 4000
const NewForm = () => {
  const newRobotSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').required('Name is required'),
  });
  const handleSubmit = async (values: any) => {
    try {
      const url = 'http://localhost:4000/robots';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add Robot
      </h1>
      <Formik
        initialValues={{ name: '', arms: '', notes: '' }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newRobotSchema}
      >
        {({ errors, touched }) => {
          // console.log(data);

          return (
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
                {errors.name && touched.name ? (
                  <NewAlert>{errors.name}</NewAlert>
                ) : null}
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
                  htmlFor="notes
            "
                >
                  Notes:
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Special Notes"
                  name="notes"
                />
              </div>
              <input
                type="submit"
                value="Add Robot"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default NewForm;
