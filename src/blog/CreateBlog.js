import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "https://react-mysql-nicaragua.herokuapp.com/blogs/";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { title: title, content: content });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h3>Create POST</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Content" className="form-label">
            Content
          </label>
          <input
            type="text"
            value={content}
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-1">
          <i className="fa-solid fa-plus"></i> Save
        </button>
        <Link to={`/`} className="btn btn-info mr-2">
          <i className="fa-solid fa-arrow-left"></i> Cancel
        </Link>
      </form>
    </div>
  );
}

export default CreateBlog;
