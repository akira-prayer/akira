document.addEventListener("DOMContentLoaded", function () {

  // 第1階層（大アコーディオン）
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");

      // 親が閉じたら子階層をすべて閉じる
      if (!item.classList.contains("active")) {
        item.querySelectorAll(".sub-accordion-item").forEach(sub => {
          sub.classList.remove("active");
        });
      }
    });
  });

  // 第2階層以降（小アコーディオン）
  document.querySelectorAll(".sub-accordion-header").forEach(header => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      item.classList.toggle("active");

      // 親が閉じたら子階層をすべて閉じる
      if (!item.classList.contains("active")) {
        item.querySelectorAll(".sub-accordion-item").forEach(sub => {
          sub.classList.remove("active");
        });
      }
    });
  });

});
