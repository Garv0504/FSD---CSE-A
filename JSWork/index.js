
console.dir(document)
const div = document.getElementsByClassName('parent')
// console.log(div)
// div[0].innerHTML = "<h1>Hello Java</h1>";
// const h1 = document.createElement("h1")
// h1.innerText = "Hello Python"


// h1.style.color = "red"
// h1.style.backgroundColor = "yellow"
// h1.style.width = "fit-content"

// div[0].appendChild(h1)
// console.log(h1)


// const img = document.createElement("img")
// console.log(img)
// img.src = "collegeimage.png"
// img.setAttribute("height","400px")

// div[0].appendChild(img)

// const button = document.getElementById("btn")
// function getData(){
//     console.log("Calling Getdata")
//     display.innerHTML = "<h2 style = color:green>Welcome to CSE</h2>"
// }
// const display = document.getElementById("disp")
// console.log(display)

// button.addEventListener("click",getData)



// const promise1 = new Promise(
// (resolve,reject) => {
//     let a = Math.random() *1000
//     console.log(a)
//     if(a>=100 && a<=200){
//         resolve("value of a is resolved")
//     }
//     else{
//         reject("value of a is rejected")
//     }
// }
// );

// promise1.then((msg) => {console.log(msg)})
// .catch(error => {console.log(error)})
// .finally(() => {console.log('All resources have being closed')})



// const promise2 = new Promise(
//     (resolve,reject) => {
//         resolve({name: "Amit", branch: "CSE"})
//     }
// )
// promise2.then((data) => {console.log(data.name)})
// .catch(error => {console.log(error)})


const response = fetch('https://dummyjson.com/products')
response.then(data => {
    console.log(data)
    data.json().then(res => {
        for(let i=0; i<30; i++){
            console.log(res.products[i].id +" "+ res.products[i].title)
            const h2 = document.createElement("h5")
            h2.innerText = res.products[i].id +" "+ res.products[i].title
            div[0].append(h2)
        }
    })
})


