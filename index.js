const btnNext = document.querySelector(".bgButtonNext > button.next");

console.log(btnNext);

btnNext.addEventListener("click", function (e) {
    if (btnNext.click) {
        console.log("click next")
    }
});

const btnPrev = document.querySelector(".bgButtonPrev > button.previous");

console.log(btnPrev);

btnPrev.addEventListener("click", function (e) {
    if (btnNext.click) {
        console.log("click prev")
    }
});

(async function () {

    const setImg = document.querySelector(".containerImg > img");

    console.log(setImg)

    const resp = await fetch("https://gradistore-spi.herokuapp.com/products/all", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        },
        "method": "GET"
    })

    const result = await resp.json();

    const arrProducts = result.products.nodes;

    console.log(arrProducts);


    for (let i = 0; i < arrProducts.length; i++) {

        const img = arrProducts[i].featuredImage.url;
        const title = arrProducts[i].title;

        setImg.setAttribute("src", img);
        setImg.setAttribute("alt", title);
    }



})();
