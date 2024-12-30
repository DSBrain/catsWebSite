const template = `
        <label class="block text-sm/6 font-medium text-gray-900"></label>
        <div class="mt-2">
          <input class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      `;

class DynamicInput extends HTMLElement {
  constructor() {
    super();

    // Create a container for the content
    const wrapper = document.createElement("div");
    wrapper.innerHTML = template;

    // Append the constructed wrapper to the custom element
    this.appendChild(wrapper);

    // Get references to the label and input elements
    const label = wrapper.querySelector("label");
    const input = wrapper.querySelector("input");

    // Set the label text and associate it with the input element using the "for" attribute
    label.textContent = this.getAttribute("name") || "";
    label.setAttribute("for", this.getAttribute("id"));

    // Pass all attributes from the custom element (except "label") to the input element
    Array.from(this.attributes).forEach((attr) => {
      input.setAttribute(attr.name, attr.value);
    });
  }
}

// Define the custom element
customElements.define("dynamic-input", DynamicInput);
