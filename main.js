fetch("https://randomuser.me/api/?results=100%27")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data.results);

    if(data.results.find(user => user.gender == "male") === undefined)
      throw new Error("User does not exist");
    else {
        console.log(data.results.find(user => user.gender == "male"));
    }

}).catch((err) => {
    alert(err.message);
    document.write('resolve', err);
});