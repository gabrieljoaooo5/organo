import './DropdownList.css'

const DropdownList = (props) => {

    return (
        <div className="dopdown-list">
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={evento => props.onChange(evento.target.value)}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default DropdownList;