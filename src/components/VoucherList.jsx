import React from 'react'
import { BiEdit, BiTrash } from "react-icons/bi";
import { HiDesktopComputer, HiSearch } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const VoucherList = () => {
  return (
    <>
      <div className="flex justify-between mb-3">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiSearch></HiSearch>
          </div>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
          />
        </div>

        <Link to={"/sale"} className=" bg-emerald-900 text-white h-fit py-2 px-5 rounded-xl text-nowrap text-sm">
          Create Sale <HiDesktopComputer className="inline-block text-lg" />
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Created at
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700  hidden last:table-row ">
              <th
                colSpan={5}
                scope="row"
                className="px-6 py-4 font-semibold text-gray-500 font-montserrat whitespace-nowrap dark:text-white text-center"
              >
                There is no product
              </th>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Nyan Lynn Htet
              </th>

              <td className="px-6 py-4">nyan@example.com</td>
              <td className="px-6 py-4">12/2/2020</td>
              <td className="px-6 py-4 flex justify-center gap-5">
                <div
                  className="inline-flex rounded-md shadow-sm bg-gray-200"
                  role="group"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <BiEdit className="size-5 me-2" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                  >
                    <BiTrash className="size-5 me-2" aria-hidden="true" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default VoucherList