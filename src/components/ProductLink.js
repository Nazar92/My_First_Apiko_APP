import React from 'react';
import { Link } from 'react-router-dom';
// import { productPropTypes } from '../common/propTypes';
import { number, string } from 'prop-types';
import { formatRouter } from 'react-router-named-routes'; 
import { routes } from '../routes';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  display: block;
`;
const Button = styled.button`
  width: 120px;
  background-color: red;
  color: blue;
  border: 0;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Container = styled.header``;
const ImageContainer = styled.div``;

const Image = styled.img``;

const Title = styled.h3``;
const Price = styled.p``;

const ProductLink = ({ 
  title, 
  id,
  image,
  price,
  item,
  showBorder,
  onActionButtonClick,
  actionButtonTitle,
}) => {
  return (
    <div>
      {/* <Link to={formatRouter(routes.adminProduct, { id })}>
        {title}
        {image}
      </Link> */}
    
    <Container showBorder={showBorder}>
      <div>
          <StyledLink to={formatRouter(routes.product, {id})}>
            
            <ImageContainer>
              <Image src={image} alt="img" />
            </ImageContainer>
            
            <Title>{title}</Title>

          </StyledLink>
        <Price>{price} грн</Price>
      </div>
      <Button onClick={() => onActionButtonClick(item)}>
        {actionButtonTitle}
      </Button>
    </Container>
    </div>
  )
  };
  export default ProductLink;

  


ProductLink.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
};


// export const ProductLink = ({ title }) => {
//   return (
//     <div>{title}</div>
//   );
// }
// ProductLink.propTypes = productPropTypes;
