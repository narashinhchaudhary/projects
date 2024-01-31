const accesskey="TBRz2FS5yJIJmZIWSe8qEvSA1ccI6NPxSA9vmgBKly0";

const formele=document.querySelector("form");

const inputele=document.getElementById("serch-Input");
const searchresults=document.querySelector(".serach-Results");
const  showmore=document.getElementById("show-more");


let inputData="";
let page =1;


 async function searchImages () {
    inputData=inputele.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;


const response =await fetch(url);
const data = await response.json();


const results = data.results;

if (page === 1) {
    searchresults.innerHTML="";

}

results.map ((result) => {
     const  imagewrap = document.createElement("div");
     imagewrap.classList.add("search-Result");
     const image =document.createElement("img");
     image.src = result.urls.small;
     image.alt = result.atl_description;
     const imagelink = document.createElement("a");
     imagelink.href = result.links.html;
     imagelink.target= "_blank";
     imagelink.textContent =result.alt_description ;


     imagewrap.appendChild(image)
     imagewrap.appendChild(imagelink)
     searchresults.appendChild(imagewrap)
     
});

page++
if (page >1) {
    showmore.style.display="block"
}
}

formele.addEventListener("submit",(e) =>{
    e.preventDefault();
    page=1;
    searchImages();
})

showmore.addEventListener("click",() =>{ 
    searchImages();
})