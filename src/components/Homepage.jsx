import styles from "./Homepage.module.css";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

function Homepage() {
    return (
        <div className={styles.homepage}>
            <h1 className={styles.header}>Employee Directory</h1>
            <SearchBar />
            <EmployeeList />
        </div>
    );
}

export default Homepage;
