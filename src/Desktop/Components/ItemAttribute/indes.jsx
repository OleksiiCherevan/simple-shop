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

            parent: this.props.parent,
            index: this.props.index,

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
                htmlFor={
                    this.state.attribute + this.state.id + this.state.index
                }
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
                htmlFor={
                    this.state.attribute + this.state.id + this.state.index
                }
            >
                {this.state.value}
            </label>
        );
    }

    render() {
        return (
            <div className="item-attribute">
                <input
                    className="item-attribute__input"
                    onChange={() =>{}}
                    onClick={() => this.state.onClick(this.state.attribute, this.state.id)}
                    id={
                        this.state.attribute + 
                        this.state.id +
                        this.state.index
                    }
                    type="radio"
                    name={this.state.parent + this.state.attribute + this.state.index}
                    checked={this.state.isChecked}
                    value={this.state.parent + this.state.attribute + this.state.index }
                />

                {this.state.attribute == "Color"
                    ? this.colorLabel()
                    : this.defaultLabel()}
            </div>
        );
    }
}

export default ItemAttribute;
