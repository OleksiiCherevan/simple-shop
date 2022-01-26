import { Component } from "react";
import "./style.scss";

class ItemAttribute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onClick: this.props.onClick,
            attribute: this.props.attribute,
            id: this.props.id,
            value: this.props.value,

            isActive: !this.props.isActive,
            isChecked: this.props.isChecked,
        };
    }

    colorLabel() {
        return (
            <label
                className="item-attribute__label"
                style={{
                    height: 50,
                    width: 50,
                    backgroundColor: this.state.value,
                }}
                htmlFor={this.state.attribute + this.state.value}
            ></label>
        );
    }

    defaultLabel() {
        return (
            <label
                className="item-attribute__label"
                style={{
                    height: 50,
                    width: 50,
                    backgroundColor: this.state.value,
                }}
                htmlFor={this.state.attribute + this.state.value}
            >
                {this.state.value}
            </label>
        );
    }

    render() {
        console.log(this.state)
        console.log('id', this.state.id)
        console.log('att', this.state.attribute);
        return (
            <div className="item-attribute">
                <input
                    className="item-attribute__input"
                    onChange={() =>
                        this.state.onClick(this.state.attribute, this.state.id)
                    }
                    id={this.state.attribute + this.state.value}
                    type="radio"
                    name={this.state.attribute}
                    checked={this.state.isChecked}
                    value={this.state.value}
                />

                {this.state.attribute == "Color"
                    ? this.colorLabel()
                    : this.defaultLabel()}
            </div>
        );
    }
}

export default ItemAttribute;
