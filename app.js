document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector("#formCard");
  const form = document.querySelector("#form");
  const successCard = document.querySelector("#success-subscription");

  // initialize form data objects
  let data = new FormData();

  const userSubscription = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // update the data object with form data
      data = new FormData(e.target);
      const email = data.get("email");

      // set data subscription to true
      card.setAttribute("data-subscription", "true");

      // if data subscription is true
      // hide subscription form, show success message
      // insert dynamic html on success message
      if (card.attributes.getNamedItem("data-subscription").value === "true") {
        card.classList.add("hide");
        successCard.classList.remove("hide");
        successCard.innerHTML = `
        <img
        src="./assets/images/icon-success.svg"
        alt="check logo  for success message"
      />
      <h2>Thanks for subscribing!</h2>
        <p> A confirmation email has been sent to
        <span id="user-email">${email}</span>. Please open it and click the button inside
        to confirm your subscription.</p>
        <button id="success-handler">Dismiss message</button>
        `;

        successCardHandler();
      }
    });
  };

  const successCardHandler = () => {
    const successCardHandlerBtn = document.querySelector("#success-handler");
    if (successCardHandlerBtn) {
      successCardHandlerBtn.addEventListener("click", () => {
        // hide success message, show subscription card and reset the form
        successCard.classList.add("hide");
        card.classList.remove("hide");
        form.reset();
      });
    }
  };

  const initApp = () => {
    userSubscription();
  };
  initApp();
});
