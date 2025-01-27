/* La ligne document.addEventListener("DOMContentLoaded", ...) est utilisée pour s'assurer que le script JavaScript est exécuté après que le DOM soit complètement chargé. Cela garantit que tous les éléments HTML sont disponibles pour être manipulés par le script. */
document.addEventListener("DOMContentLoaded", () => {
  const plusBtn = document.querySelectorAll(".btn-plus");
  const minusBtn = document.querySelectorAll(".btn-moins");

  const deleteBtn = document.querySelectorAll(".btn-delete");
  const heartBtn = document.querySelectorAll(".btn-heart");

  const totalElement = document.querySelector(".total");
  let total = parseFloat(totalElement.textContent.replace("$", "").trim());

  plusBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const cardBody = button.closest(".card-body");
      const unitPriceElement = cardBody.querySelector(".unit-price");
      const qteElement = button.nextElementSibling;
      let qte = parseInt(qteElement.textContent);
      let unitPrice = parseFloat(
        unitPriceElement.textContent.replace("$", "").trim()
      );
      qte++;
      qteElement.textContent = qte;

      total += unitPrice;
      totalElement.textContent = total + " $";

      /* const heartBtn = cardBody.querySelector(".fa-heart");
      heartBtn.addEventListener(
        ("click",
        () => {
          heartBtn.style.backgroundColor = "red";
        })
      ); */
    });
  });

  minusBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const cardBody = button.closest(".card-body");
      const unitPriceElement = cardBody.querySelector(".unit-price");
      const qteElement = button.previousElementSibling;
      let qte = parseInt(qteElement.textContent);
      let unitPrice = parseFloat(
        unitPriceElement.textContent.replace("$", "").trim()
      );

      if (qte > 0) {
        qte--;
        qteElement.textContent = qte;

        total -= unitPrice;
        totalElement.textContent = total + " $";
      }
    });
  });

  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const cardBody = button.closest(".card-body");
      const unitPriceElement = cardBody.querySelector(".unit-price");
      const unitPrice = parseFloat(
        unitPriceElement.textContent.replace("$", "").trim()
      );
      const qteElement = cardBody.querySelector(".quantity");
      const qte = qteElement.textContent;

      total -= qte * unitPrice;
      totalElement.textContent = total + " $";

      qteElement.textContent = 0;
    });
  });

  heartBtn.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.style.color != "red") {
        button.style.color = "red";
      } else {
        button.style.color = "black";
      }
    });
  });
});
