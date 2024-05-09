const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  // Error handling: checking if inputs are empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Error handling: checking if inputs contain invalid characters
  const validInputRegex = /^[0-9]+$/;
  if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
    result.classList.add("critical-error")
    result.innerText = "Something critical went wrong. Please reload the page.";
    return;
  }

  try {
    // Forcing number conversion
    const dividendNumber = Number(dividend);
    const dividerNumber = Number(divider);

    
  }

});