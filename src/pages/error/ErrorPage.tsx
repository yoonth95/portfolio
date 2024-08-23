import { useNavigate } from "react-router-dom";
import * as E from "./ErrorPage.styled";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <E.ErrorContanier>
      <h1>404 페이지</h1>
      <div>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. <br /> 웹 주소가 올바른지 확인해 주세요.
        </p>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </E.ErrorContanier>
  );
};

export default ErrorPage;
