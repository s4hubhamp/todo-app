import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispath = useDispatch();

  return (
    <div className="h5 pb-2 border-bottom d-flex justify-content-between">
      <div>{props.todo}</div>
      <div>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => {
            dispath({ type: "EDIT_TODO", payload: { id: props.id } });
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            dispath({ type: "DELETE_TODO", payload: { id: props.id } });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
