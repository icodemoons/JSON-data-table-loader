import { useState } from "react";

export function Upload({}) {
  const [JSONFile, setJSONFile] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);
      setJSONFile(e.target.result);
    };
  };

  return (
    <>
      <div className="mt-10 ">
        <p className="text-xl pb-5">
          Upload your JSON file select your column[key] order.
        </p>{" "}
        <input type="file" onChange={handleChange} />
        <p>{JSONFile}</p>
      </div>
    </>
  );
}
