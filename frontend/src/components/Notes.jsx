import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const Notes = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const userid = localStorage.getItem("userid");

    axios
      .get(`http://localhost:8080/note/${userid}`)
      .then(({ data }) => {
        console.log("data", data);
        setArr(data);
      })
      .catch((er) => {
        console.log("error", er);
      });
  }, []);

  return (
    <div>
      <h1>Add Your Notes </h1>
      <div>
        <input type="text" placeholder="add title" />
        <input type="text" placeholder="add levls" />
        <input type="text" placeholder="add notes" />
        <button>Submit</button>
      </div>
      {arr.map((e) => {
        return (
          <div key={Math.random()}>
            <h1>{e.title}</h1>
            <h2>{e.lavels}</h2>
            <h2>{e.notes}</h2>
            <button>update</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

// http://localhost:8080/note/bunty
// http://localhost:8080/note/${userid}
