/* eslint-disable no-undef */
const socket = io();

const formulario = document.getElementById("product-form");
const chatForm = document.getElementById("chat-form");
const errorProduct = document.getElementById("error-product");

formulario.addEventListener("submit", addProduct);
chatForm.addEventListener("submit", newMessage);

// inicio de la app
socket.emit("all-products");
socket.emit("all-messages");

// manejo de error de socket
socket.on("error", (error) => {
  console.log(error);
  handleError(error);
});

// Productos

// Carga de productos
socket.on("envioProds", (data) => {
  loadProducts(data);
});

function addProduct(e) {
  e.preventDefault();
  const titleInput = document.getElementById("title").value;
  const priceInput = document.getElementById("price").value;
  const thumbnailInput = document.getElementById("thumbnail").value;

  if (!titleInput.length || !priceInput.length || !thumbnailInput.length) {
    console.log(titleInput, priceInput, thumbnailInput);
    handleError("Todos los campos son obligatorios");
    return;
  }

  const producto = {
    title: titleInput,
    price: priceInput,
    thumbnail: thumbnailInput,
  };
  socket.emit("new-product", producto);
  return false;
}

function loadProducts(products) {
  const productsBody = document.getElementById("products-body");

  if (!products.length)
    return (productsBody.innerHTML = "<h2>No hay productos</h2>");

  productsBody.innerHTML = "";
  products.map((product) => {
    productsBody.innerHTML += ` <tr>
    <th scope="row">${product.id}</th>
    <td>${product.title}</td>
    <td>$${product.price}</td>
    <td><img
        src=${product.thumbnail}
        alt="imagen de ${product.title}"
        width="50"
      /></td>
    </tr>`;
  });
}

// Chat

// Carga de mensajes
socket.on("messages", (data) => {
  loadMessages(data);
});

function loadMessages(messages) {
  const chat = document.getElementById("chat");

  if (!messages.length) return (chat.innerHTML = "<h2>No hay mensajes</h2>");

  chat.innerHTML = "";
  messages.map((message) => {
    chat.innerHTML += `
    <li class="d-flex align-items-center justify-content-start gap-3 my-2">
      <div class="d-flex align-items-center justify-content-center gap-2">
        <strong class="pr-1 text-primary">${message.email}</strong>
        <span class="text-danger">[${message.fecha}]</span>
      </div>
      <p class="m-0 pl-5 text-success">${message.mensaje}</p>
    </li>`;
  });
}

function newMessage(e) {
  e.preventDefault();
  const emailInput = document.getElementById("chat-email").value;
  const messageInput = document.getElementById("chat-message").value;
  const error = document.getElementById("error");

  if (!emailInput) {
    error.innerText = "you need to enter your email to send a message";
    return;
  }
  if (!ValidateEmail(emailInput)) {
    error.innerText = "Oops it seems that the email is not correct";
    return;
  }
  if (!messageInput) {
    error.innerText = "Empty message";
    return;
  }
  error.innerText = "";

  var d = new Date(),
    dformat =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");

  const message = {
    email: emailInput,
    mensaje: messageInput,
    fecha: dformat,
  };

  socket.emit("new-message", message);
}

// utils
function handleError(error) {
  errorProduct.classList.add("alert", "alert-danger");
  errorProduct.innerText = error;
  setTimeout(() => {
    errorProduct.innerText = "";
    errorProduct.classList.remove("alert", "alert-danger");
  }, 1500);
}

function ValidateEmail(mail) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(mail)) {
    return true;
  }
  return false;
}
