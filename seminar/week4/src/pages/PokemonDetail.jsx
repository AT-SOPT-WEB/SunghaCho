import { Link, useParams } from "react-router";

const PokemonDetail = () => {
  const { name } = useParams();
  return (
    <div>
      <Link to="/">
        <p>목록으로</p>
      </Link>
      <h1>{name}</h1>
      <p>상세정보</p>
    </div>
  );
};

export default PokemonDetail;
