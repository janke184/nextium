import Swal from "sweetalert2";

export const error_alert = (title, text = '') => {

    Swal.fire({
        title: title, 
        text: text,
        icon: 'error'
    });

}

export const ok_alert = (title, text = '') => {

    Swal.fire({
        title: title, 
        text: text,
        icon: 'success'
    });

}