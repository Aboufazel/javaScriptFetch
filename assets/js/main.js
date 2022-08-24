

const tabel = document.querySelector("#table")

const user = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then((users) => {
    users.forEach((user , index) =>{
        tabel.innerHTML += (`<tr>
               <th scope="row" class="id_number">${user.id}</th>
               <td class="name">${user.name}</td>
               <td class="username">${user.username}</td>
               <td class="mail">${user.email}</td>
           </tr>`)
    })
});