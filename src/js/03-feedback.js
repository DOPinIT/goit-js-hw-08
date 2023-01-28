import { onInput } from "./functions-forForm.js"
import {onTextArea} from "./functions-forForm.js"

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const submit = document.querySelector("button");
const textArea = document.querySelector("textarea");


input.addEventListener("input", onInput)

textArea.addEventListener("input", onTextArea)

form.addEventListener("submit", ({target}) => {
  Event.preventDefault();
  const { elements: { email, message } } = target;
  if (email.value === "" || message.value === "") {
      alert("Всі поля повинні бути заповнені!");
  } else {
      console.log({ "email": email.value, "message": message.value });
      target.reset();
  }
})