import { useState } from "react";
import * as S from "./styles";
import MyAvatar from '../../pictures/myAvatar.jpg'
import { Link } from "react-router-dom";

export default function Navigation() {
  const [menuShown, setMenuShown] = useState(false);
  const burgerClickHandler = () => setMenuShown(!menuShown);

  return (
    <S.Navigation>
      <S.Burger onClick={burgerClickHandler}>
        {menuShown ? (
          <>
            <S.BurgerClose />
            <S.BurgerClose />
            <S.BurgerClose />
          </>
        ) : (
          <>
            <S.BurgerLine />
            <S.BurgerLine />
            <S.BurgerLine />
          </>
        )}
      </S.Burger>    
      <S.Menu style={{ display: menuShown ? "block" : "none" }}>
      <S.UserInfo>
        <S.User>
      <S.UserAvatar src={MyAvatar} alt="avatar" />
      <S.NameSpan>Sergey</S.NameSpan>
      </S.User>
      <S.MailSpan>hakimzhanov92@mail.ru</S.MailSpan>
      </S.UserInfo>
        <S.MenuList>
          <Link to="/">
          <S.MenuItem>Список постов</S.MenuItem>
          </Link>
            <Link to="/myPage">
            <S.MenuItem>Обо мне</S.MenuItem>
            </Link>
            {/* <S.MenuItem>Выйти</S.MenuItem> */}
        </S.MenuList>
      </S.Menu>
    </S.Navigation>
  );
}
