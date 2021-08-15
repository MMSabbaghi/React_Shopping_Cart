import styles from "./SearchBar.module.css";

const SearchBar = ({ onInputChange }) => {
  return (
    <div className={styles.search_bar}>
      <span> Search For : </span>
      <input
        type="text"
        placeholder="search..."
        onInput={onInputChange}
      ></input>
    </div>
  );
};

export default SearchBar;
