import './Team.css'
import Employee from '../Employee'

const Team = (props) => {

    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.employees.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className='employees'>
                {props.employees.map( employee => <Employee key={employee.name} name={employee.name} role={employee.role} image={employee.image} backgroundColor={props.primaryColor} /> )}
            </div>
        </section> 
        : ''
    )
}

export default Team;