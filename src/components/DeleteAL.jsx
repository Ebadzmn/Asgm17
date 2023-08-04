import Swal from "sweetalert2";
import store from "../redux/store/Store.jsx";
import {DeleteTodo} from "../redux/slice/TodoSlice.jsx";

export function DeleteAL (index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            store.dispatch(DeleteTodo(index))

        }
    })
}