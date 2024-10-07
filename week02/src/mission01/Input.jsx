export default function Input({ task, handleOnChange }) {
  return (
    <input
      style={{
        boxSizing: "border-box",
        margin: "20px 0",
        padding: "4px",
        width: `calc(50vw + 136px - 84px - 84px)`,
      }}
      type="text"
      defaultValue={task}
      onChange={handleOnChange}
    />
  );
}
