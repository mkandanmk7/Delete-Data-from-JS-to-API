async function getData() {
  const data = await fetch(
    "https://611f26289771bf001785c71b.mockapi.io/profiles",
    { method: "GET" }
  );
  const details = await data.json();
  document.body.innerHTML = ``;
  // console.log(details);
  details.forEach((datas) => createProfile(datas));
}

function createProfile({ name, avatar, createdAt, id }) {
  // console.log(avatar);
  const info = document.createElement("div");

  info.className = "container";
  info.innerHTML = `
    <div class="profile-container">
    <img class="profile" src="${avatar}"  width="200px" heigth="100px" >
    </div>
    
    <div class="details">
    <h3>${name}</h3>
    <p>${new Date(createdAt).toDateString()}</p>
    <button onclick="deleteUser(${id})">Delete</button>
    </div>
    `;
  document.body.append(info);
}

getData();

async function deleteUser(id) {
  const data = await fetch(
    `https://611f26289771bf001785c71b.mockapi.io/profiles/${id}`,
    { method: "DELETE" }
  );
  const details = await data.json();
  getData();
  console.log(details);
}
