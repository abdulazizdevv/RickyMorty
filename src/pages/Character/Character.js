import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import { Pagination } from "../../components/Pagination/Pagination";
import { Search } from "../../components/Search/Search";

export const Character = () => {
  const [activePage, setActivePage] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const { info, results } = data;

  let api = `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${search}&status=${status}&gender=${gender}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then((res) => res.json());
      setData(data);
    })();
  }, [api]);

  return (
    <>
      <h1 className="text-center">Character</h1>
      <Search setSearch={setSearch} setActivePage={setActivePage} />
      <div className="row">
        <div className="col-3">
          <Filter setStatus={setStatus} setGender={setGender} />
        </div>
        <div className="col-9">
          {results?.length ? (
            <div className="d-flex flex-wrap gap-5">
              {results.map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  location={item.location.name}
                  status={item.status}
                />
              ))}
            </div>
          ) : (
            <h3>not found</h3>
          )}
        </div>
      </div>
      <Pagination
        activePage={activePage === 1 ? 0 : -1}
        totalPage={info?.pages}
        setActivePage={setActivePage}
      />
    </>
  );
};
