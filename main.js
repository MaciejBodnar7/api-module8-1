const containerAPI = document.getElementById("container-api");
const btn = document.getElementById("get-request-btn");

document.addEventListener("click", function (e) {
  if (e.target.id === "get-request-btn") {
    console.log("btn");
    apiHandle();
  }
});

const apiHandle = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      containerAPI.innerHTML = `
        <h4 class="h4-hard">${data.activity}</h4>`;
    });
};
