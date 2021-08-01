const codeforces = document.getElementById('codeforces');
const codechef = document.getElementById('codechef');
const leetcode = document.getElementById('leetcode');
const atcoder = document.getElementById('atcoder');
const gfg = document.getElementById('gfg');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
codeforces.addEventListener('click', () => {
    window.location.href = "http://www.codeforces.com";
})
codechef.addEventListener('click', () => {
    window.location.href = "http://www.codechef.com";
})
leetcode.addEventListener('click', () => {
    window.location.href = "http://www.leetcode.com";
})
atcoder.addEventListener('click', () => {
    window.location.href = "http://www.atcoder.jp";
})
gfg.addEventListener('click', () => {
    window.location.href = "http://www.geeksforgeeks.org";
})

// SignUp and Login Button
const signup = document.getElementById('signup');
const login = document.getElementById('login');
signup.addEventListener('click', () => {
    window.location.href = "../signup.html";
});
// Specific Site Contests List

const fsite = 'codeforces';
const codeforcessite = document.getElementById('sitelist');

console.log(codeforcessite);


// Default List
const contests_api_url = "https://clist.by:443/api/v2/contest/all";
var contestsList;
// Defining async function
fetch(`https://kontests.net/api/v1/${fsite}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        // console.log(data);
        show(data);
    })
    .catch(error => console.log(`Error is ${error}`));

function show(data) {
    let tab = '';
    // Loop to access all rows 
    for (let i = 0; i < data.length; i++) {
        tab += `<tr> 
                    <td>${data[i].name} </td>
                    <td><a href='${data[i].url}'></a></td>
                    <td>${data[i].start_time}</td>
                    <td>${data[i].end_time}</td>
                </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("contests").innerHTML = tab;
}