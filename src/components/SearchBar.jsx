import styles from "./SearchBar.module.css";

function SearchBar() {
    return (
        <form className={styles.searchBar}>
            <input type="text" />
        </form>
    );
}

export default SearchBar;
