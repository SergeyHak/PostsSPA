import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export default function  Loader({isLoading}){
    return(
        <S.Loader>
        <S.LoaderDiv style={{ display: isLoading ? "block" : "" }}>
          <S.LoaderSpan>Loading...</S.LoaderSpan>
          <FontAwesomeIcon
            icon={faFan}
            beat
            size="2xl"
            style={{ color: "#266fed" }}
          />
        </S.LoaderDiv>
      </S.Loader>
    )
    
}