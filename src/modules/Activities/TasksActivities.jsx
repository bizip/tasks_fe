import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Secure from '../../utils/SecureLs';
import Keys from '../../utils/keys';

function TasksActivities() {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const getAllTasks = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${Keys.DEFAULT_API}/api/v1/task`,
        {
          headers: {
            Authorization: `Bearer ${Secure.getToken()}`,
          },
        },
      );
      if (res.status === 200) {
        const { data } = res;
        setTaskList(data);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="shadow-md sm:rounded-lg mt-2 scrollbar-thumb-blue flex justify-between bg-white dark:bg-gray-900 z-1 overflow-y-auto overflow-x-auto max-h-96">
        <table className="w-full text-sm min-w-max mt-2 text-left text-gray-500 dark:text-gray-400 z-1">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>

              <th scope="col" className="px-6 py-3">
                ID
              </th>

              <th scope="col" className="px-6 py-3">
                TITLE
              </th>

              <th scope="col" className="px-6 py-3">
                DATE TO
              </th>

              <th scope="col" className="px-6 py-3">
                DATE FROM
              </th>

              <th scope="col" className="px-6 py-3">
                Priority
              </th>

              <th scope="col" className="px-6 py-3">
                Atachement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 overflow-y-auto" key="item.id">

              <td className="px-6 py-4">item.id</td>

              <tr
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              />

              <td className="px-6 py-4">title</td>

              <td className="px-6 py-4">date_from</td>

              <td className="px-6 py-4">
                date_to
              </td>

              <td className="px-6 py-4">
                priority
              </td>

            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TasksActivities;
