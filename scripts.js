const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Error handling: checking if inputs are empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Error handling: checking for division by zero before number conversion
  if (divider === "0") {
    result.innerText = "Invalid input: Division by zero or non-numeric value provided.";
    return;
  }

  // Error handling: checking if inputs contain invalid characters
  const validInputRegex = /^[0-9]+$/;
  if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    return;
  }

  try {
    // Forcing number conversion
    const dividendNumber = Number(dividend);
    const dividerNumber = Number(divider);

    const resultValue = Math.floor(dividendNumber / dividerNumber);
    result.innerText = resultValue.toString();

  } catch (error) {
    console.error("An error occured:", error);
    console.error("Call stack:", error.stack);

    // Critical Error Handling
    result.innerText = "Invalid input: Division by zero or non-numeric value provided.";
  }
});
