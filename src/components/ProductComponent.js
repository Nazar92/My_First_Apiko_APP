import React from 'react';
import { productPropTypes } from '../common/propTypes';
import styled from 'styled-components';
import { arrayOf } from 'prop-types';
import { routes } from '../routes';

const InputField = styled.input`
  display: block;
  width: 400px;
`;
const TextArea = styled.textarea`
  display:block;
  width: 398px;
  height: 100px;
`;
// const ProductImg = styled.div`
//   display: block;
// `;
const Price = styled.input`
display: block;
`;
const ProductComponent = ({title, id, description, onChange, onSubmit, image, price}) => (
  <form onSubmit={onSubmit}>
    
    <InputField 
      name="title" 
      value={title}
      onChange={onChange('title')} 
    />
    <TextArea  
      name="description" 
      value={description} 
      onChange={onChange('decription')} 
    />
    <p className="priceTitle">Price:</p>
    <Price 
      className="priceBody"
      name="price" 
      value={price}
      onChange={onChange('price')} 
    />
    <button type="submit">Save</button>
  </form>
);
ProductComponent.propTypes = productPropTypes;

export class ProductConteiner extends React.Component {
  constructor(props) {
    super(props);
    const { match: { params }, productList } = props;

    const product = productList.find(({id}) => Number(params.id) === id);
    this.state = {
      ...product,
    }
  }
  onChange = (name) => ({ target: {value}  }) => {
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateProduct(this.state);
    this.props.history.push(routes.admin);
  };
  render() {
    // console.log('this,state', this.state);
      return <ProductComponent 
        {...this.state} 
        onSubmit={this.onSubmit} 
        onChange={this.onChange}
      />
    };
  }
  ProductComponent.propTypes = {
    productList: arrayOf(productPropTypes).isRequired,
  };