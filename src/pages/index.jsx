import { useState } from "react";
import Datatable from "ui/data-table";
import TextField from "ui/text-field";

import { Uploader } from "ui/uploader";
const array = [
  {
    _id: "6362c6583c8d28b7b3494d2a",
    index: 0,
    guid: "6f361841-7d17-4358-b5fb-cf9e0f2acc02",
    isActive: true,
    picture: "http://placehold.it/32x32",
    name: "Meadows Bond",
    company: "NETUR",
    email: "meadowsbond@netur.com",
    about:
      "Sit pariatur ullamco est aliquip est dolor aute. Nisi ipsum velit magna voluptate fugiat laboris mollit. Aliqua nisi est commodo incididunt deserunt amet magna adipisicing commodo. Reprehenderit culpa ullamco culpa quis non quis in voluptate dolore cillum eiusmod.\r\n",
    registered: "2018-08-05T04:15:28 +04:00",
    latitude: 89.653002,
    longitude: 14.479546,
  },
  {
    _id: "6362c65892c4afcf52f77ffb",
    index: 1,
    guid: "828ccb22-9141-43f1-a3ca-c8543267f1a3",
    isActive: false,
    picture: "http://placehold.it/32x32",
    name: "Marisol Rollins",
    company: "BUZZWORKS",
    email: "marisolrollins@buzzworks.com",
    about:
      "Excepteur magna anim veniam ipsum sunt Lorem ea sint. Laboris et voluptate et elit qui amet. Quis cillum aute amet cillum ex sit veniam cupidatat id.\r\n",
    registered: "2020-02-17T02:59:35 +05:00",
    latitude: -18.482503,
    longitude: 22.0176,
  },
  {
    _id: "6362c65815159c55708e96bb",
    index: 2,
    guid: "c127de04-ecb4-4e3b-b3dd-7e279fec3be2",
    isActive: true,
    picture: "http://placehold.it/32x32",
    name: "Alison Nash",
    company: "SHOPABOUT",
    email: "alisonnash@shopabout.com",

    about:
      "Id aliqua excepteur veniam consectetur veniam duis. Et id consectetur irure amet commodo adipisicing dolore incididunt. Nostrud incididunt commodo occaecat Lorem. Id officia consectetur incididunt qui. Irure ad ipsum veniam anim qui cillum velit enim. Irure sunt consectetur dolore est irure fugiat aliqua culpa Lorem ex excepteur anim excepteur.\r\n",
    registered: "2022-09-18T04:34:48 +04:00",
    latitude: -87.993197,
    longitude: 55.604727,
  },
  {
    _id: "6362c6588cdd9b02e4f694fe",
    index: 3,
    guid: "876d038a-0591-4520-9208-9c0cd5ab2d5f",
    isActive: false,
    picture: "http://placehold.it/32x32",
    name: "Humphrey Stephenson",
    company: "KOOGLE",
    email: "humphreystephenson@koogle.com",
    about:
      "Consequat in voluptate id ut magna aute. Qui cupidatat proident sint quis id adipisicing adipisicing ea. Amet ea reprehenderit quis occaecat nulla labore. Officia ad consequat excepteur amet et deserunt officia reprehenderit duis amet. Elit culpa cupidatat cillum et dolor ex duis tempor laborum. Sint Lorem duis sint Lorem. Deserunt aliqua tempor officia ad pariatur et deserunt labore.\r\n",
    registered: "2014-06-30T03:23:01 +04:00",
    latitude: 26.558033,
    longitude: -42.845632,
  },
  {
    _id: "6362c658cd90c6a4cdc94c1d",
    index: 4,
    guid: "9d9763d9-e09e-494d-adcb-96aef4a32e10",
    isActive: true,
    picture: "http://placehold.it/32x32",
    name: "Daniels Herring",
    company: "INSECTUS",
    email: "danielsherring@insectus.com",
    about:
      "Deserunt sunt laborum veniam enim aute sit et. Ullamco ipsum ipsum aliqua dolor minim voluptate adipisicing sint. Non aute occaecat sunt incididunt sunt anim laborum qui in est veniam do aliquip. Dolore anim sit cupidatat fugiat sunt labore nulla amet ex voluptate consequat pariatur esse. Officia non incididunt minim laborum velit cupidatat. Non fugiat occaecat qui amet aute nisi reprehenderit magna officia.\r\n",
    registered: "2021-12-21T04:58:55 +05:00",
    latitude: 4.236376,
    longitude: 110.744308,
  },
];
export default function Homepage({}) {
  const [visible, setVisible] = useState([]);
  const [query, setQuery] = useState("");

  const columns = Object.keys(array[0]);

  if (!columns.length) return <div>The json for this table has 0/NO keys</div>;

  function render(val) {
    if (Array.isArray(val)) return val.join(", ");
    if (typeof val === "object") return val.join("...");
    return val;
  }

  function filter(_array) {
    return _array.filter((item) =>
      visible.some((column) =>
        item[column]
          .toString()
          .trim()
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      )
    );
  }

  return (
    <div className="mt-16 container mx-auto">
      <div className="border px-4 items-center w-full gap-3">
        <Uploader>
          {columns.map((column) => (
            <>
              <div className="p-5" key={column} />
              <input
                type="checkbox"
                value={true}
                onChange={(e) =>
                  setVisible((prev) => {
                    return e.target.checked
                      ? [...prev, column]
                      : prev.filter((_column) => _column !== column);
                  })
                }
              />
            </>
          ))}
        </Uploader>
        {columns.map((column) => (
          <>
            <div key={column} />
            <input
              type="checkbox"
              value={true}
              onChange={(e) =>
                setVisible((prev) => {
                  return e.target.checked
                    ? [...prev, column]
                    : prev.filter((_column) => _column !== column);
                })
              }
            />
            <label> {column}</label>
          </>
        ))}{" "}
      </div>
      <div className="flex flex-col mx-auto w-full">
        <div className="flex flex-col mx-auto w-1/2 pt-10">
          <p className="mx-auto text-lg text-yellow-300 p-5 ">
            Filter and search through your uploaded document.
          </p>
          <TextField value={query} onChange={setQuery} />
        </div>

        <Datatable
          rows={array}
          columns={visible}
          renderRow={render}
          filter={filter}
        />
      </div>
    </div>
  );
}
