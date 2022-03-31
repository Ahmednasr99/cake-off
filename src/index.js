// your code here
let cakelist = document.getElementById("cake-list")
let cakeName = document.getElementById("cake-name")
let cakeImage = document.getElementById("cake-image")
let reviewlist = document.getElementById("reviewServer")
let cakeDescription = document.getElementById("cake-description")




let request = async()=>{
    let req = await fetch('http://localhost:3000/cakes')
    let res = await req.json()
    console.log(res)
// to access the first element
    cakeName.innerHTML = res[0].name 
    cakeImage.setAttribute('src',res[0].image_url)
    reviewlist.innerHTML =`<li>${res[0].reviews}</li>` 
    cakeDescription.innerHTML = res[0].description


//for each element in the array
    res.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element.name
        cakelist.appendChild(li)

        let review = document.getElementById("review")
        let customerReview = document.getElementById('customerReview')
    
        document.getElementById("review-form").addEventListener('submit',(e)=>{
            e.preventDefault()
            customerReview.innerText=review.value
        })
    });



}

request()
