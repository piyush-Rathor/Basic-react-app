import Nav from "./Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
const Post = () => {
  const [posts] = useState(JSON.parse(localStorage.getItem("posts")));
  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100">
      <div style={{ width: "90vw" }}>
        <Nav />
        {posts?.length > 0 ? (
          <div>
            {posts?.map((post) => {
              return (
                <div
                  className="d-inline-flex justify-content-center align-items-center w-100 flex-column border-bottom border-muted rounded m-2"
                  key={post.message}
                >
                  <h3>{post.name}</h3>
                  <p className="text-center">{post.message}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="d-inline-flex justify-content-center align-items-center w-100 flex-column"
            style={{ height: "90vh" }}
          >
            <p className="mb-1">Sorry You Do not have any post yet!</p>
            <Link to="/add-post">
              <div>Add a Post</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Post;
