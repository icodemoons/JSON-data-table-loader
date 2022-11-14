export default function Button({ children }) {
  return (
    <div>
      <button
        onClick={() => {
          alert("okay");
        }}
        className="border shadow py-2 px-8 rounded-lg bg-blue-500 border-blue"
      >
        {children}
      </button>
    </div>
  );
}
export function OutlineButton({ children }) {
  return (
    <div>
      <Button>{children}</Button>
    </div>
  );
}
