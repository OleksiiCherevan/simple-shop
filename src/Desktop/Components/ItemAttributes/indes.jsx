import { Component } from "react";
import "./style.scss";

class ItemAttributes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            name: null,
            icon: null,
            isActive: null,
        };
    }

    componentDidMount() {
        console.log(this.props);
        this.setState({
            title: this.props.title,
            name: this.props.name,
            icon: this.props.icon,
            isActive: this.props.isActive,
        });
    }

    render() {
        return (
            <div class="item-attributes">
                <input
                    id={this.state.title + this.state.name}
                    type="radio"
                    name={this.state.title}
                    disabled={!this.state.isActive}
                    value="4"
                />
                
                <label for={this.state.title + this.state.name}>
                    {" "}
                    {this.state.name}{" "}
                </label>
            </div>
        );
    }
}

export default ItemAttributes;
