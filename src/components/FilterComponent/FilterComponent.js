import React from "react";
import PropTypes from "prop-types";
import ProductsService from "../../service/product.service";

import "./FilterComponent.scss";

class FilterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: "",
      manufactureValue: "All"
    };
  }

  handleNameChange = event => {
    this.props.onTextInputChange(event.target.value);
    this.setState({ nameValue: event.target.value });
  };

  handleClearButtonChange = () => {
    this.setState({ nameValue: "", manufacture: "" });
    this.props.onTextInputChange("");
    this.props.onRadioButtuonsChange("");
  };

  handleRadioButtonsChange = event => {
    this.setState({ manufactureValue: event.target.value });
    this.props.onRadioButtuonsChange(event.target.value);
  };

  render() {
    const manufactures = ProductsService.getUniqueManufacture();
    manufactures.unshift("All");

    return (
      <div className="filter">
        <div className="filter-header">
          <h4>Search</h4>
          <a href="#" className="clear" onClick={this.handleClearButtonChange}>
            Clear
          </a>
        </div>
        <div>
          <input
            type="text"
            value={this.state.nameValue}
            onChange={this.handleNameChange}
          />
        </div>
        <h4>Manufacturer</h4>
        <div onChange={this.handleRadioButtonsChange}>
          {manufactures.map(manufacture => (
            <div key={manufacture}>
              <input
                type="radio"
                name="manufacture"
                id={manufacture}
                value={manufacture}
              />
              <label htmlFor={manufacture}>{manufacture}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

FilterComponent.propTypes = {
  name: PropTypes.string
};

export default FilterComponent;
