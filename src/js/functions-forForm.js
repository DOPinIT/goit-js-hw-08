import throttle from "lodash.throttle";

export function onInput({ target }) {
    if (target || textarea !== "") {
        localStorage.setItem("userEmail", target.value)
  
    }
}
export function onTextArea({target}) {
    if (target || textarea !== "") {
        localStorage.setItem("userMessage", target.value)

    }
}