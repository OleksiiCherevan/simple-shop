import { Component } from "react";
import "./style.scss";

class ItemAttributesColor extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            name: this.props.name,
            icon: this.props.icon,
            isActive: this.props.isActive,
        };
    }

    render() {
        return (
            <div className="item-attributes-color">
                <input
                    id={this.state.id + this.state.name}
                    type="radio"
                    name={this.state.id}
                    disabled={!this.state.isActive}
                    value="4"
                />

                <label
                    style={{
                        height: this.props.height + "px",
                        width: this.props.width + "px",
                        backgroundColor: this.props.name
                    }}
                    htmlFor={this.state.id + this.state.name}
                >

                </label>
            </div>
        );
    }
}

export default ItemAttributesColor;
