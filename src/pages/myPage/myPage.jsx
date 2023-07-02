import * as S from "./style";
import { NavLink } from "react-router-dom";
import Navigation from "../../components/MenuNavigation/Navigation";
import MyPhoto from "../../pictures/myPhoto.jpg";
import Button from "react-bootstrap/esm/Button";

export default function MyPage() {
  return (
    <div>
      <S.HeaderDiv>
        <S.HeaderSpan>POSTS-PROJECT</S.HeaderSpan>
      </S.HeaderDiv>
      <S.ContentDiv>
        <S.InfoDiv>
          <S.MyInfo>
            <S.MyPhoto src={MyPhoto} alt="" />
          </S.MyInfo>
          <S.TextDiv>
            <S.TextSpan>
              Меня зовут\ Сергей, мне 31 год. Я живу в Восточном Казахстане, это
              очень живописный край. В данный момент работаю электриком. Также
              учусь на Frontend разработчика и мечтаю работать из дома. Люблю
              активные виды спорта и путешествовать.
            </S.TextSpan>
          </S.TextDiv>
          <NavLink to="/">
            <Button variant="success">Назад</Button>
          </NavLink>
        </S.InfoDiv>
        <Navigation />
      </S.ContentDiv>
    </div>
  );
}
