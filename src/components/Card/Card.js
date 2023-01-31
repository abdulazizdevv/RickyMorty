import { Link } from "react-router-dom";

export const Card = ({ image, name, location, status }) => {
  return (
    <>
      <div
        className="card p-2 shadow position-relative"
        style={{ width: "18rem" }}
      >
        {(function () {
          if (status === "Alive") {
            return<span
              style={{ top: "10px", right: "10px" }}
              className="position-absolute badge py-2 px-3  bg-success float-end"
            >
              {status}
            </span>;
          } else if (status === "Dead") {
            return <span
              style={{ top: "10px", right: "10px" }}
              className="position-absolute badge py-2 px-3  bg-danger float-end"
            >
              {status}
            </span>;
          } else {
            return <span
              style={{ top: "10px", right: "10px" }}
              className="position-absolute badge py-2 px-3  bg-secondary float-end"
            >
              {status}
            </span>;
          }
        })()}
        <img src={image} className="card-img-top" alt={name} />
        <div classname="card-body">
          <h5 classname="card-title">{name}</h5>
          <p className="card-text m-0 fs-5">Locaation name</p>
          <p className="card-text fs-6">{location}</p>
          <Link to="/" className="btn m-2 btn-primary">
            More
          </Link>
        </div>
      </div>
    </>
  );
};
