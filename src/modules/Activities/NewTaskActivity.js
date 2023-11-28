/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import moment from 'moment';
import NavBar from './NavBar';
import classes from './NewTask.module.css';
import CustomDatepicker from './CustomDatepicker';
import Assignee from './Assignee';

function NewTaskActivity() {
  const [dateData, setDateData] = useState({
    date_from: '',
    date_to: '',
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFromValue = (Chosendate) => {
    setDateData({
      ...dateData,
      date_from: moment(Chosendate).format('YYYY-MM-DD'),
    });
  };

  const handleEndValue = (Chosendate) => {
    setDateData({
      ...dateData,
      date_to: moment(Chosendate).format('YYYY-MM-DD'),
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className={classes.formContent}>
      <NavBar />
      <div className={classes.formHeader}>
        <h2 className="text-2xl">Create Task</h2>
        <div>Save Draft</div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white p-4 rounded-xl dark:bg-gray-700"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block  font-bold mb-2 text-gray-900 dark:text-white"
          >
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                placeholder="Name"
                className={`w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${errors.name
                  ? 'border-red-500'
                  : 'border-gray-300'
                } rounded`}
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex mb-4 -mx-2">
          <div className="w-1/2 px-2">
            <label
              htmlFor="from"
              className="block  font-bold mb-2 text-gray-900 dark:text-white"
            >
              Start Date
            </label>
            <CustomDatepicker
              title="From"
              fromValue={handleFromValue}
            />
          </div>
          <div className="w-1/2 px-2">
            <label
              htmlFor="to"
              className="block  font-bold mb-2 text-gray-900 dark:text-white"
            >
              Start End
            </label>
            <CustomDatepicker
              title="To"
              fromValue={handleEndValue}
            />
          </div>
        </div>
        <div className="mb-4">
          <Assignee />
        </div>

        <div className="mb-4">
          <label
            htmlFor="project"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project
          </label>
          <Controller
            name="project_id"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                id="project_id"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.estate_city
                  ? 'border-red-500'
                  : 'border-gray-300'
                } rounded`}
              >
                <option value="" disabled selected>
                  Project Name
                </option>
                {
                  [{ id: 1, project_name: 'Event managemment' }, { id: 2, project_name: 'RDB report' }].map((item) => (
                    <option value={item.id}>
                      {item.project_name}
                    </option>
                  ))
                }
              </select>
            )}
          />
          {errors.project_name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.estate_city.message}
            </p>
          )}
        </div>

        <div className="mb-4">

          <label
            htmlFor="task_description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descriptions
          </label>
          <Controller
            name="task_description"
            control={control}
            defaultValue=""
            rules={{
              required: 'Description is required',
              minLength: {
                value: 108,
                message:
                  'Description must have a minimum of 108 characters',
              },
            }}
            render={({ field }) => (
              <textarea
                {...field}
                id="task_description"
                placeholder="Descriptions"
                className={`w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
                  errors.estate_description
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded`}
              />
            )}
          />
          {errors.task_description && (
            <p className="text-red-500 text-sm mt-2">
              {errors.task_description.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Priority
          </label>
          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white  rounded-lg sm:flex dark:bg-gray-700  dark:text-white">
            <li className="w-1/2">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Low </label>
              </div>
            </li>
            <li className="w-1/2">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Normal</label>
              </div>
            </li>
            <li className="w-1/2">
              <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
              </div>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>

    </section>
  );
}

export default NewTaskActivity;
