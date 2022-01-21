import { Component } from "react";
import "./style.scss";

class ItemAttributes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "title",
            name: "name",
            icon: "T",
            id: "attribute",
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
        });
    }

    render() {
        return (
            <div  className="item-attributes">
                <input
                    id={this.state.title + this.state.name}
                    type="radio"
                    name={this.state.id}
                    disabled={!this.state.isActive}
                    value="4"
                />
                
                <label style={{height: this.props.height+'px', width: this.props.width+'px'}} htmlFor={this.state.title + this.state.name}>
                    {/* {" "} */}
                    {this.state.name}{" "}
                </label>
            </div>
        );
    }
}

export default ItemAttributes;
