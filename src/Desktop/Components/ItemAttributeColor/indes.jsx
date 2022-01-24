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
            <div className="item-attribute-color">
                <input
                    onChange={this.props.onChange}
                    id={this.state.id + this.state.name}
                    type="radio"
                    name={this.state.id}
                    disabled={!this.state.isActive}
                    value={this.state.name}
                />

                <label
                    style={{
                        height: 50,
                        width: 50,
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
