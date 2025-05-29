document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-form-btn");

  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const form = this.parentElement;
    const inputSearch = form.querySelector(".form-control");

    if (inputSearch.value.trim()) {
      form.submit();
    }

    const isVisible = inputSearch.classList.toggle("show");

    if (isVisible) {
      inputSearch.focus();
    }
  });
});
