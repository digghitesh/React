import React, { Component } from 'react';

import ProductService from '../../services/ProductService';

import Mainpage from '../../MainPage';

const productService = new ProductService();

const deleteStyle = {
  color: '#cd0000'
};

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productId: -1
    };

    this.handleModelWindow = this.handleModelWindow.bind(this);
  }

  componentDidMount() {
    console.log(this.props);

    var self = this;
    productService.getProducts().then(function(result) {
      console.log(result);
      self.setState({ products: result.data });
    });
  }

  handleModelWindow(param) {
    this.props.handleModelWindow(param);

    var self = this;

    productService
      .getProducts({ ProductId: param.ProductId })
      .then(function(result) {
        self.state.products[param.index] = {
          ProductId: result.data.ProductId,
          ProductName: result.data.ProductName,
          UserName: result.data.UserName,
          CreatedAt: result.data.CreatedAt
        };

        self.setState({ products: self.state.products });
      });
  }

  render() {
    return (
      <div className="product--list">
        <table className="table">
          <thead key="thead">
            <tr>
              <th>Product Name</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((row, index) => (
              <tr key={index}>
                <td>{row.ProductName} </td>
                <td>{row.UserName}</td>
                <td>{row.CreatedAt}</td>
                <td>
                  <a
                    href="#"
                    onClick={() =>
                      this.handleModelWindow({
                        row: index,
                        compName: 'AddOrUpdateProduct',
                        id: row.ProductId,
                        action: 'Update'
                      })
                    }
                  >
                    <i className="fa fa-pencil-square-o" />
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="#"
                    onClick={() =>
                      this.handleModelWindow({
                        row: index,
                        compName: 'AddOrUpdateProduct',
                        id: row.ProductId,
                        action: 'Delete'
                      })
                    }
                    style={deleteStyle}
                  >
                    <i className="fa fa-trash" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;
