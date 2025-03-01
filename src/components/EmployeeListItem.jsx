import styles from "./EmployeeListItem.module.css";

function EmployeeListItem({ img, name, title }) {
    return (
        <div className={styles.employeeListItem}>
            <img src={img || EmployeeListItem.defaultProps.img} alt={name} />
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
}


EmployeeListItem.defaultProps = {
    img: "https://placehold.co/150",
    name: "Unknown Employee",
    title: "Unknown Title"
};

export default EmployeeListItem;
