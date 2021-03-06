import SelectBox from "~/components/partials/media/selectBox";
import React, { Component } from "react";

class InputBoxes extends Component {

    constructor(props)  {
        super(props);
        this.state = {
            display: ["", "none", "none"]
        }
    }

    changeSelection = (e, id) =>  {
        e.preventDefault();
        let dArray = this.state.display;
        dArray[id+1] = "";
        if(id == 0) dArray[2] = "";
        this.setState({
            display: dArray
        })
    }

    render()    {
        return (
            <>
                <SelectBox name={this.props.name} type="Country" display={this.state.display[0]} changeSelection={(e)=>this.changeSelection(e,0)}/>
                <SelectBox name={this.props.name} type="Quantity" display={this.state.display[1]} changeSelection={(e)=>this.changeSelection(e,1)}/>
                <input type="text" className="form-control"placeholder="Linked in Profile Url*" required style={{display: `${this.state.display[2]}`}}/>
            </>
        )
    }

}

export default InputBoxes;