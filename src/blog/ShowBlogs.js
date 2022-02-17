import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URI = "https://react-mysql-nicaragua.herokuapp.com/blogs/";

const ShowBlogs = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlog(res.data);
  };

  const deleteBlog = async (id) => {
    axios.delete(`${URI}${id}`);
    getBlogs();
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
            <Link to='/create' className="btn btn-primary mt-2 mb-2 float-right"><i className="fas fa-plus"></i> Crear Blog</Link>
          <table className="table text-center">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info mr-2">
                      <i className="fas fa-edit"></i> Editar
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="btn btn-danger"
                    >
                     <i className="fas fa-trash-alt"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogs;
