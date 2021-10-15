import styles from "./SearchBar.module.css";

const SearchBar = ({ onInputChange, value }) => {
  return (
    <div className={styles.search_bar}>
      <span> search for : </span>
      <input
        type="text"
        value={value}
        placeholder="search..."
        onChange={onInputChange}
      ></input>
    </div>
  );
};

export default SearchBar;
