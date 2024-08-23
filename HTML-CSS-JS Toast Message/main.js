// Toast function
function toast({ title = "", message = "", type = "info", duration = 5000 }) {
  const main = document.getElementById("toast");

  if (main) {
    const toast = document.createElement("div");
    const icons = {
      success: "fas fa-check-circle",
      information: "fa-solid fa-circle-info",
      warning: "fa-solid fa-triangle-exclamation",
      error: "fa-solid fa-bug",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    const fade = duration + 1000;
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, fade);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.8s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
        <div class="toast__icon">
          <i class="${icon}"></i>
        </div>

        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
        </div>

        <div class="toast__close">
          <i class="fas fa-times"></i>
        </div>
    `;
    main.appendChild(toast);

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };
  }
}

function showSuccessToast() {
  toast({
    title: "Success",
    message: "Thành công rồi nè !!!!!",
    type: "success",
    duration: 5000,
  });
}

function showInfoToast() {
  toast({
    title: "Information",
    message: "Thông tin nè !!!!!",
    type: "information",
    duration: 5000,
  });
}

function showWarningToast() {
  toast({
    title: "Warning",
    message: "Cảnh báo nè !!!!!",
    type: "warning",
    duration: 5000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "Lỗi rồi nè !!!!!",
    type: "error",
    duration: 5000,
  });
}
