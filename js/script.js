const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = await fetch (
        "https://randomuser.me/api?results=5"
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
getData();
