import { Component } from "react";
import "./style.scss";

class ItemAttributesColor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            attribute: this.props.attribute,
            id: this.props.id,
            value: this.props.value,
            
            isActive: !this.props.isActive,
            isChecked: this.props.isChecked,
        };
    }

    render() {
        return (
            <div className="item-attribute-color">
                <input
                    id={this.state.attribute + this.state.value}
                    type="radio"
                    name={this.state.attribute}
                    checked={this.state.isChecked}
                    value={this.state.value}
                />

                <label
                    style={{
                        height: 50,
                        width: 50,
                        backgroundColor: this.state.value
                    }}
                    htmlFor={this.state.attribute + this.state.value}
                >
                </label>
            </div>
        );
    }
}

export default ItemAttributesColor;
