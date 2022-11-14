import { useState } from "react";

export default function Datatable({
  rows = [],
  columns = [],
  filter = () => [],
  renderRow = (item) => item,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
      <table className="  bg-slate-900 w-full ">
        <thead>
          <tr className="w-fullfocus:outline-none h-16 text-sm leading-none text-gray-800 dark:text-white">
            {columns.map((column) => (
              <th
                className="text-lg leading-3 text-gray-600 dark:text-gray-200   mt-2 justify-between text-start items-baseline capitalize border border-spacing-2 border-shadow shadow-md"
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>{" "}
        <tbody>
          {filter(rows).map((item, i) => (
            <tr className="" key={i}>
              {columns.map((column) => (
                <td
                  className="text-lg lg:p-5 sm:p-0 leading-3 text-start text-gray-600 dark:text-gray-200 py-2 border  "
                  key={column}
                >
                  {renderRow(item[column])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
