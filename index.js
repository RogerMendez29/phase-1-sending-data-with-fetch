// let data = {
//   name: "Steve",
//   email: "steve@steve.com",
// };

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => renderId(data))
    .catch((error) => {
      renderErrMsg(error);
    });
}

const renderId = (data) => {
  document.body.innerHTML = data.id;
};

function renderErrMsg(error) {
  document.body.innerHTML = error.message;
}
