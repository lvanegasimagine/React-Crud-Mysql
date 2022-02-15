import { Fragment } from "react";
import ShowBlogs from "./blog/ShowBlogs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CreateBlog from "./blog/CreateBlog";
import EditBlog from "./blog/EditBlog";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<ShowBlogs/>}></Route>
          <Route path="/create" element={<CreateBlog/>}></Route>
          <Route path="/edit/:id" element={<EditBlog/>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
