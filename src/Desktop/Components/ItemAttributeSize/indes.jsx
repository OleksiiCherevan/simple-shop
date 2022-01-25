import { Component } from "react";
import "./style.scss";

class ItemAttributeSize extends Component {
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
            <div className="item-attribute-size">
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
                    }}
                    htmlFor={this.state.attribute + this.state.value}
                >
                    {/* {" "} */}
                    {this.state.value}{" "}
                </label>
            </div>
        );
    }
}

export default ItemAttributeSize;
