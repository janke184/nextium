import Swal from "sweetalert2";

export const errorAlert = (title, text = '', callback = null) => {

    Swal.fire({
        title: title, 
        text: text,
        icon: 'error'
    }).then( () => {
        if(callback){
            callback();
        }
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