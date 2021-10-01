import styles from "./SearchBar.module.css";

const SearchBar = ({ onInputChange, value, className }) => {
  return (
    <div className={`${styles.search_bar} ${className ? className : ""}`}>
      <span> Search For : </span>
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
