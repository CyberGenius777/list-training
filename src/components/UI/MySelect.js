const MySelect = ({ options, defaultValue, value, onChange }) => {
  const styles = {
    select: {
      padding: 10,
      outline: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <select style={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
