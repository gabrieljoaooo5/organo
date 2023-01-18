import './TextField.css'

const TextField = (props) => {

    const onChange = (event) => {
        props.onChange(event.target.value)
    }
    
    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input required={props.required} placeholder={props.placeholder} value={props.value} onChange={onChange}/>
        </div>
    )
}

export default TextField;