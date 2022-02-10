
const SelectBox = ({display, changeSelection, type}) =>    {
    return (

        <div className="details-filter-row " style={{width: "100%", display: `${display}` }}>
            <div className="select-custom" style={{width:'100%'}}>
                <select
                    name="size"
                    className="form-control"
                    required
                    onChange={changeSelection}
                >
                    <option selected disabled>Select a {type}</option>
                    <option vlaue="">Random</option>
                </select>
            </div>
        </div>
    )
}

export default SelectBox;