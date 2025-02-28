

function EmployeeListItem(props) {
    return (
        <>
            <img src="https://via.placeholder.com/150" alt="profile picture">
                {props.img}
            </img>
            <h2>
                {props.name}
            </h2>
            <p>
                {props.title}
            </p>
        </>
    )
}


export default EmployeeListItem