import Swal from "sweetalert2";
import store from "../redux/store/Store.jsx";
import { UpdateTodo } from "../redux/slice/TodoSlice.jsx";

export function EditAL(index, item) {
    Swal.fire({
        title: "Edit",
        input: "text",
        inputValue: item,
        inputValidator: (value) => {
            if (!value.trim()) {
                return "You must enter a value!";
            } else {
                store.dispatch(UpdateTodo({ index: index, value: value.trim() }));
            }
        },
    });
}


