
// // ===================================using then and catch =============

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
//          return response.json();
// 	})
//     .then ((data)=>{
//         console.log(data)
//     })
// 	.catch((error) => {
// 		console.log(error);
// 	});

// ================================acync and await =====================

async function fetchUsers() {
	try {
        let container = document.body;
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();

        data.forEach(user => {
            let button = document.createElement("button");
            button.innerHTML = `${user.username}`;
            button.addEventListener("click", () => fetchPosts(user.id)); 

            container.appendChild(button);
        });
	} catch (error) {
		console.log("Error fetching users:", error);
	}
}


async function fetchPosts(user_id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${user_id}`)
    let container = document.body;
    let data = await response.json()
    if (!data) {
        console.log('user not have posts')
    }
    console.log(data)
    let header = document.createElement("h1")
    let title_header = document.createElement("h3")
    let par = document.createElement("p")
    header.innerHTML = `post is Number is ${user_id} `
    title_header.innerHTML=`${data[0].title}`
    par.innerHTML = `${data[0].body}`
    container.append(header)
    container.append(title_header)
    container.append(par)


}

fetchUsers();
