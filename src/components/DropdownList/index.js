import './DropdownList.css'

const DropdownList = (props) => {
    return (
        <div className="dopdown-list">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default DropdownList;