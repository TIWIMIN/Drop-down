export class DropDownMenu {
  #menuContainer = document.querySelector("div.menu-container");
  #menuButton = document.querySelector("button#menu-button");
  #menuPopup = document.createElement("div");
  #isMenuOpen = false;
  constructor(...list) {
    this.#menuPopup.classList.add("menu-popup");

    for (const item of list) {
      const menuItem = document.createElement("button");
      menuItem.textContent = item;
      menuItem.classList.add("menu-item");
      this.#menuPopup.appendChild(menuItem);
    }

    this.#menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.#isMenuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
  }

  openMenu() {
    this.#menuContainer.appendChild(this.#menuPopup);
    this.#isMenuOpen = true;
  }

  closeMenu() {
    this.#menuContainer.removeChild(this.#menuPopup);
    this.#isMenuOpen = false;
  }
}
