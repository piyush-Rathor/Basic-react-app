import { Link ,useLocation} from "react-router-dom";
const Nav = () => {
    const location = useLocation();
  return (
    <div className="d-inline-flex w-100 justify-content-center align-items-center bg-dark">
      <div
        className="d-inline-flex w-100 justify-content-between align-items-center "
        style={{ height: "10vh", maxWidth: "65vw" }}
      >
        <div
          className="d-inline-flex w-50 justify-content-center align-items-center"
          style={{ height: "10vh" }}
        >
          <Link to="/post" className={`${location.pathname.toString()==="/post"?"text-light":""} text-decoration-none`}>
            <div>Posts</div>
          </Link>
        </div>
        <div
          className="d-inline-flex w-50 justify-content-center align-items-center"
          style={{ height: "10vh" }}
        >
          <Link to="/add-post" className={`${location.pathname.toString()==="/add-post"?"text-light":""} text-decoration-none`}>
            <div>Add Posts</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
