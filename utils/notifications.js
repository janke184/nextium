import Swal from "sweetalert2";

export const errorAlert = (title, text = '') => {

    Swal.fire({
        title: title, 
        text: text,
        icon: 'error'
    });

}

export const okAlert = (title, text = '', callback = null) => {

    Swal.fire({
        title: title, 
        text: text,
        icon: 'success'
    }).then( () => {
        if(callback){
            callback();
        }
    });

}