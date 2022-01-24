import { Component } from "react";
import "./style.scss";

class ItemAttributeSize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true,
        };
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            name: this.props.name,
            icon: this.props.icon,
            isActive: this.props.isActive,
            onChange: this.props.onChange
        });
    }

    render() {
        return (
            <div className="item-attribute-size">
                <input
                onChange={this.state.onChange}
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
                    }}
                    htmlFor={this.state.id + this.state.name}
                >
                    {/* {" "} */}
                    {this.state.name}{" "}
                </label>
            </div>
        );
    }
}

export default ItemAttributeSize;
