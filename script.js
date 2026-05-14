const gallery =
document.getElementById("gallery");

async function searchWallpapers(){

  const query =
  document
  .getElementById("searchInput")
  .value || "wallpaper";

  gallery.innerHTML =
  "<h2>Loading...</h2>";

  const res =
  await fetch(
    `/api/search?q=${query}`
  );

  const data =
  await res.json();

  gallery.innerHTML="";

  data.photos.forEach(photo=>{

    const card =
    document.createElement("div");

    card.className="card";

    card.innerHTML=`

      <img src="${photo.src.large}">

      <p>
        ${query.toUpperCase()} Wallpaper
      </p>

    `;

    gallery.appendChild(card);

  });

}

/* DEFAULT */

searchWallpapers("gaming");

/* ENTER KEY */

document
.getElementById("searchInput")
.addEventListener("keypress",(e)=>{

  if(e.key==="Enter"){

    searchWallpapers();

  }

});
