class DynamicButton extends HTMLElement {
  constructor() {
    super();

    // Create the button element
    const button = document.createElement("button");
    button.className =
      "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    button.textContent = this.getAttribute("name") || "";

    // Pass all attributes from the custom element to the button element
    Array.from(this.attributes).forEach((attr) => {
      button.setAttribute(attr.name, attr.value);
    });

    // Append the button to the custom element
    this.appendChild(button);
  }
}

// Define the custom element
customElements.define("dynamic-button", DynamicButton);
