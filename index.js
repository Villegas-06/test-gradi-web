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
    const tag = arrProducts[i].tags[0];
    const price = arrProducts[i].prices.max.amount;

    console.log(id);

    if (id.indexOf("8141368492342") == -1) {
      setImg.innerHTML += `
        <div class="product" id="${id}">

            <img src="${img}" alt="${title}" />
            <button class="addToCart">Add to cart</button>
           
            <div class="infoProduct">
                <div class="nameProduct">
                    The Multi-managed Snowboard
                </div>
                <div class="rateValue"> 
                    <p class="rate"> 
                        <form>
                            <p class="rateStar">
                                <input id="radio1" type="radio" name="estrellas" value="5">
                                <label for="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4">
                                <label for="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3">
                                <label for="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2">
                                <label for="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1">
                                <label for="radio5">★</label>
                            </p>

                            <p class="tag"> 
                                (${tag})
                            </p
                        </form>
                    </p>
                    <p class="price">
                        €${price}
                    </p>
                </div>
            </div>

        </div>`;
    }
  }
})();
