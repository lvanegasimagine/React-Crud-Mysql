import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const URI = 'https://react-mysql-nicaragua.herokuapp.com/blogs/';

function EditBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Procedimiento para actualizar

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, {
            title: title,
            content: content
        });
        navigate('/');
    }

    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () =>{
        console.log(id);
        const res = await axios.get(`${URI}${id}`);
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
    }
    

  return (
    <div className="container mt-5">
      <h3>Edit POST</h3>
      <form onSubmit={update}>
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
  )
}

export default EditBlog