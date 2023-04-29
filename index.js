const btnNext = document.querySelector(".bgButtonNext > button.next");

console.log(btnNext);

btnNext.addEventListener("click", function (e) {
  if (btnNext.click) {
    console.log("click next");
  }
});

const btnPrev = document.querySelector(".bgButtonPrev > button.previous");

console.log(btnPrev);

btnPrev.addEventListener("click", function (e) {
  if (btnNext.click) {
    console.log("click prev");
  }
});

(async function () {
  const setImg = document.querySelector(".containerProducts");

  console.log(setImg);

  const resp = await fetch(
    "https://gradistore-spi.herokuapp.com/products/all",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      },
      method: "GET",
    }
  );

  const result = await resp.json();

  const arrProducts = result.products.nodes;

  console.log(arrProducts);

  for (let i = 0; i < arrProducts.length; i++) {
    const img = arrProducts[i].featuredImage.url;
    const title = arrProducts[i].title;
    const id = arrProducts[i].id.split("Product/")[1];
    const sellTag = arrProducts[i].tags[0];
    let tag = arrProducts[i].tags[0];
    const price = arrProducts[i].prices.max.amount;

    console.log(tag);

    switch (true) {
      case tag < 100:
        tag = 10;
        console.log("1 Star");
        break;

      case tag >= 100 && tag < 200:
        tag = 20;
        console.log("2 Star");
        break;

      case tag >= 200 && tag < 300:
        tag = 30;
        console.log("3 Star");
        break;

      case tag >= 300 && tag < 400:
        tag = 40;
        console.log("4 Star");
        break;

      case tag >= 400 && tag <= 500:
        tag = 50;
        console.log("5 Star");
        break;

      default:
        console.log("No star");
        break;
    }

    console.log("STAR: " + tag);

    //console.log(id);

    if (id.indexOf("8141368492342") == -1) {
      setImg.innerHTML += `
        <div class="product" id="${id}">
            <div class="slide">
              <img src="${img}" alt="${title}" />
            </div>
            <button class="addToCart">Add to cart</button>
           
            <div class="infoProduct">
                <div class="nameProduct">
                    The Multi-managed Snowboard
                </div>
                <div class="rateValue"> 
                  <fieldset class="val-fieldset"><legend>Calificación:</legend><span class="valoracion val-${tag}"></span></fieldset>
                  <p class="tag"> (${sellTag}) </p>
                  <p class="price">
                    €${price}
                  </p>
                </div>
            </div>
        </div>`;
    }
  }
})();
