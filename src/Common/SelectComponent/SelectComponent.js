import Select from "react-select";
import styles from "./SelectComponent.module.css";

const SelectComponent = ({ label, value, options, onChange, className }) => {
  return (
    <div className={`${styles.select_container} ${className ? className : ""}`}>
      <span>{label}</span>
      <Select
        value={value}
        options={options}
        onChange={onChange}
        className={styles.select}
      />
    </div>
  );
};

export default SelectComponent;
