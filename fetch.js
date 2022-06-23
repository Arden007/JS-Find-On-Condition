fetch('https://randomuser.me/api/?results=100').then(res => {
    return res.json()
}).then(data => {
    console.log(data)
    let users = data.results;
    let result = users.find(user => {
        return (
          user.name.first == "Tom" ||
          user.name.first == "Jake" ||
          user.name.first == "Albert" ||
          user.name.first == "Nicolai" ||
          user.name.first == "Tidemann"
        ); 
    })
    console.log(result)
    if(!result){
        throw new Error(
          "We did not find the results you looking for ,condition not met! please refresh till results show");
    }
    else{
        document.getElementById('demo').innerHTML = `
            <img src ="${result.picture}">
            <h2>${result.name.title}. ${result.name.first} ${result.name.last}</h2>
            <h4>gender: ${result.gender}</h4>
            <h4>State: ${result.location.country}</h4>
        `
    }
})
.catch(err => alert(err.message))