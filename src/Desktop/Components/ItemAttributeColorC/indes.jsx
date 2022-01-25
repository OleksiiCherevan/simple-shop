import { Component } from "react";
import "./style.scss";

class ItemAttributesColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            attribute: this.props.attribute,
            value: this.props.value,
            
            isActive: !this.props.isActive,
            isChecked: this.props.isChecked,

            onClick: this.props.onClick,
        };
    }

    render() {
        console.log(this.state.isChecked, this.state.attribute, this.state.value)
        return (
            <div className="item-attribute-color" 
            onClick={ () => this.state.onClick(this.state.value, this.state.attribute)}>
                <input
                    id={this.state.attribute + this.state.value}
                    type="radio"
                    name={this.state.attribute}
                    checked={this.state.isChecked}
                    disabled={!this.state.selected}
                    value={this.state.value}
                />

                <label
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: this.state.value
                    }}
                    htmlFor={this.state.attribute + this.state.name}
                >
                </label>
            </div>
        );
    }
}

export default ItemAttributesColor;
