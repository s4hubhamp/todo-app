import { useEffect, useRef, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoForm = () => {
  const todoToEdit = useSelector((state) => state.todoToEdit);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();

  const [isTodoValid, setIsTodoValid] = useState(true);

  const todoInputRef = useRef();

  useEffect(() => {
    if (todoToEdit) {
      todoInputRef.current.value = todoToEdit.todo;
      setIsEditMode(true);
      todoInputRef.current.focus();
    } else {
      setIsEditMode(false);
    }
  }, [todoToEdit]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (todoInputRef.current.value.trim().length > 0) {
      setIsTodoValid(true);
      if (todoToEdit) {
        dispatch({
          type: "SAVE_TODO",
          payload: { id: todoToEdit.id, todo: todoInputRef.current.value },
        });
      } else {
        dispatch({
          type: "ADD_TODO",
          payload: { todo: todoInputRef.current.value },
        });
      }

      todoInputRef.current.value = "";
    } else {
      setIsTodoValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="mb-3">
        <input
          type="text"
          ref={todoInputRef}
          className="form-control form-control-lg"
          placeholder="enter your todo..."
          onFocus={() => {
            setIsTodoValid(true);
          }}
        />
        {!isTodoValid && (
          <p className="text-danger fw-bold ms-1 mt-2">todo cannot be empty</p>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-lg btn-dark fw-bold px-5 mx-auto"
        >
          {isEditMode ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default memo(TodoForm);
