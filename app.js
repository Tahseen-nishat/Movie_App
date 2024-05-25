let search_inp=document.querySelector("#name");
let search_btn=document.querySelector("#search");
let card=document.querySelector(".card");

search_btn.addEventListener("click",async()=>{
    let movie_name=search_inp.value;
    if(movie_name!==""){
        try{
    let api=`https://www.omdbapi.com/?apikey=9418ed5b&t=${movie_name}`;
    let responce=await fetch(api);
    let data=await responce.json();
    console.log(data);
    card.innerHTML="";
    search_inp.value="";
    let div=document.createElement("div");
    div.classList.add("moviecard");
    div.innerHTML=`
    <img src=${data.Poster} alt="">
    <div class="disc">
    <h1>${data.Title}</h1>
    <p id="head">Rating : ${data.Ratings[0].Value}</p>
    <p id="genere">${data.Genre}</p>
    <p>Realesed Date: ${data.Released}</p>
    <p>Actors: ${data.Actors}</p>
    <p>Duration: ${data.Runtime}</p>
    <p>Plot: ${data.Plot}</p>
    </div>
    `;
    card.append(div);
        }catch(error){
            card.innerHTML=`
            <img src="error.jpg" height=650vmax width=100%>
            `; 
        }
    }else{
        card.innerHTML=`
        <img src="emptyimg.jpg" height=650vmax width=100%>
        `;
    }
});