(async function () {
  const setImg = document.querySelector(".containerProducts");
  
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

  for (let i = 0; i < arrProducts.length; i++) {
    const img = arrProducts[i].featuredImage.url;
    const title = arrProducts[i].title;
    const id = arrProducts[i].id.split("Product/")[1];
    const sellTag = arrProducts[i].tags[0];
    let tag = arrProducts[i].tags[0];
    const price = arrProducts[i].prices.max.amount;

    switch (true) {
      case tag < 100:
        tag = 10;
        break;

      case tag >= 100 && tag < 200:
        tag = 20;
        break;

      case tag >= 200 && tag < 300:
        tag = 30;
        break;

      case tag >= 300 && tag < 400:
        tag = 40;
        break;

      case tag >= 400 && tag <= 500:
        tag = 50;
        break;

      default:
        tag = 0;
        break;
    }

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
                  <fieldset class="val-fieldset"><span class="valoracion val-${tag}"></span></fieldset>
                  <p class="tag"> (${sellTag}) </p>
                  <p class="price">
                    €${price}
                  </p>
                </div>
            </div>
        </div>`;
    }
  }

  const slides = document.querySelectorAll(".product");

  // loop through slides and set each slides translateX property to index * 100% 
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  // select next slide button
  const nextSlide = document.querySelector(".next");

  // current slide counter
  let curSlide = 0;
  // maximum number of slides
  let maxSlide = slides.length - 1;

  // add event listener and navigation functionality
  nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    //   move slide by -100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

  // select prev slide button
  const prevSlide = document.querySelector(".previous");

  // add event listener and navigation functionality
  prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide --;
    }

    //   move slide by 100%
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });


})();
