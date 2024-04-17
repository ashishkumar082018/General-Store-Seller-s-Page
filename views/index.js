const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = e.target.item.value;
  const description = e.target.description.value;
  const price = e.target.price.value;
  const quantity = e.target.quantity.value;

  const itemDetails = {
    item: item,
    description: description,
    price: price,
    quantity: quantity
  };

  axios
    .post("http://localhost:3000/dashboard/add-items", itemDetails)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
});

document.addEventListener("DOMContentLoaded", () => {
  axios
    .get("http://localhost:3000/dashboard/get-items")
    .then((result) => {
      result.data.forEach((res) => {
        const item = res.item;
        const description = res.description;
        const price = res.price;
        const quantity = res.quantity;
        const li = document.createElement("li");
        li.id = res.id;
        const buttonHTML = `
                <button type="button" class="btn btn-success" id="one" style="margin-left:auto; margin-right:5px;">Buy One</button>
                <button type="button" class="btn btn-warning" id="two"> Buy Two </button>
                <button type="button" class="btn btn-danger" id="three"> Buy Three </button>
                `;
        li.innerHTML = `${item} - ${description} - ${price} - ${quantity}   ${buttonHTML}`;
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.classList.add("align-items-center");
        ul.appendChild(li);
        const buyOne = li.querySelector("#one");
        const buyTwo = li.querySelector("#two");
        const buyThree = li.querySelector("#three");
        buyOne.addEventListener("click", () => {
          axios.post(`http://localhost:3000/dashboard/buy-items/${res.id}?type=${buyOne.id}`)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => console.log(err));
        })
        buyTwo.addEventListener("click", () => {
          axios.post(`http://localhost:3000/dashboard/buy-items/${res.id}?type=${buyTwo.id}`)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => console.log(err));
        })
        buyThree.addEventListener("click", () => {
          axios.post(`http://localhost:3000/dashboard/buy-items/${res.id}?type=${buyThree.id}`)
            .then((res) => {
              window.location.reload();
            })
            .catch((err) => console.log(err));
        })
      });
    })
    .catch((err) => console.log(err));
});