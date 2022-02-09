
const SelectBox = (props) =>    {
    return (

        <div className="details-filter-row " style={{width: "100%", display: `${props.display}` }}>
            <div className="select-custom" style={{width:'100%'}}>
                <select
                    name="size"
                    className="form-control"
                    required
                    onChange={props.changeSelection}
                >
                    <option selected disabled>Select a {props.type}</option>
                    <option vlaue="">Random</option>
                </select>
            </div>
        </div>
    )
}

export default SelectBox;