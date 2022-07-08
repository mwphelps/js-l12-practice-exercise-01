const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function (numUsers) {
    const usersRequest = await fetch (
        `https://randomuser.me/api?results=${numUsers}`
    )
    const data = await usersRequest.json();
    //console.log(data);
    const userResults = data.results;
    //console.log(userResults);
    displayUsers(userResults)
};

const displayUsers = function(userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
        let country = user.location.country;
        let name = `${user.name.first} ${user.name.last}`;
        let imageUrl = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt=User avatar />
        `;
        randomFolks.append(userDiv);
    }
};
selectUserNumber.addEventListener("change", function() {
    const numUsers = selectUserNumber.value;
    getData(numUsers);
});

getData(1);
