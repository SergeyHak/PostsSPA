import * as S from "./style";
import Button from 'react-bootstrap/Button';

export const Pagination = ({ resultPerPage, totalLogins, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLogins / resultPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <S.Paginate>
        {pageNumbers.map((number) => (
            <Button  variant="outline-success" key={number} onClick={() => paginate(number)}>
              {number}
            </Button>
        ))}        
    </S.Paginate>
  );
};
