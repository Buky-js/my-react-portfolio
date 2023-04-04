export function firstLetterUppercase(){
    return String.charAt(0).toUpperCase() + String.slice(1);
};

export function checkEmail(email){
    var check = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toLowerCase())
};

// export function checkBlank(item){
//     var check = /^\s*$/;
//     return check.test(String(item).toLowerCase());
// }