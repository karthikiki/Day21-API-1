let title= document.createElement("div");
title.className="title"
title.innerHTML= "<h1>Crypto Tracker</h1>"
document.body.append(title)

var container = document.createElement("div");
container.className = "container"
 
var  row = document.createElement("div");
row.className = "row"
container.append(row)
document.body.append(container)

async function getdata(){
    var  res = await fetch("https://api.coinstats.app/public/v1/coins");
    var resdata= await res.json();
    var value = resdata.coins;
    console.log(value);

    for(var i=0;i<value.length;i++){
        row.innerHTML +=`
       <div class="col-lg-4 mb-4">
    <div class="card text-center" style="width: 18rem;">
        <img class= "card-img-overlay" style="width:100px; height:100px" src="${value[i].icon}"  alt="crypt-icon">
        
      <div class="card-body">
         <h5 class="card-title">${value[i].name}</h5>
        <p class="card-text" style="font-size:15px">(Rank: ${value[i].rank})</p>
        <p class="card-text">Price: ${value[i].price}</p>
        <p class="card-text">Total: ${value[i].totalSupply}</p>
        <button type="button" class="btn btn-light" onclick="location.href='${value[i].exp[0]}'">${value[i].symbol}</button><br>
        <br>
        <a href="${value[i].websiteUrl}" target="_blank" class="bi bi-link" style="font-size:35px"></a>

        <a href="${value[i].twitterUrl}" target="_blank" class="bi bi-twitter" style="font-size:35px"></a>
       </div>
    </div>`
    } 
    function getstatis(){
        console.log()
    }
}
getdata();