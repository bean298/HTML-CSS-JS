//Alias
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Use alias to get element
const tabs = $$(".tab-item");
const panels = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

tabs.forEach((tab, index) => {
  const pane = panels[index];

  tab.onclick = function () {
    //Remove class last tab
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    // this: tab
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    //Add class at current tab
    this.classList.add("active");
    pane.classList.add("active");
  };
});
