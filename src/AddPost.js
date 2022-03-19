import Nav from "./Nav";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Post = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    let old = JSON.parse(localStorage.getItem("posts")) || [];
    localStorage.setItem("posts", JSON.stringify([...old, { name, message }]));
    history.push("/post");
  };
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100">
      <div style={{ width: "90vw" }}>
        <Nav />
        <div
          className="d-inline-flex justify-content-center align-items-center w-100 flex-column"
          style={{ height: "70vh" }}
        >
          <form className="w-50" onSubmit={(e) => submit(e)}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Gaurav"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Post;
