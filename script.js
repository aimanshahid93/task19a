document.body.innerHTML=`<div class="heading-container">
<h1>THE CATS STORE</h1>
<img src="https://media.istockphoto.com/photos/overcoming-mental-health-issues-with-pets-picture-id1295859169?b=1&k=20&m=1295859169&s=170667a&w=0&h=Eu0FGFUgGGARgzsFRe7S8Umq-5ceaGe07x4s_NY1g-E=" alt="image" id="img"</img>
</div>
<input id="searchbar" type="text" placeholder="search the cat">
<div class="maincontainer" id="main">
</div>;
`
const characterlist=document.getElementById("main")
const searchbar=document.getElementById("searchbar");
let newdata=[];
searchbar.addEventListener("keyup",(e)=>{
  const searchstring=e.target.value;
  console.log(searchstring);
 const filteredcats= newdata.filter((obj)=>{
    return obj.name.includes(searchstring) 
  });
  console.log(filteredcats);
  
});

let getdata=async()=>{
  try{ 
    let data=await fetch("https://api.thecatapi.com/v1/breeds")
    newdata=await data.json();
    console.log(newdata);
    newdata.forEach((element)=>{
      displaydata(element);
  })
}catch(error){
    console.log("oops!there was an error",error)
  }
}
getdata();
const displaydata=(obj)=>{
  main.innerHTML +=
  `<div class="container">
    <h3>Cat Name:${obj.name}</h3>
    <img  id="image" src="${obj.image.url}" alt="image"</img>
    <p>Nature:${obj.temperament}</p>
    <p>Region:${obj.origin}</p>
    <p>About:${obj.description}</p>
   </div>`
}


