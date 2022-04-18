//initializing variables
var fbi='/findByIngredients?';
var p1='https://api.spoonacular.com/recipes';
var info='/information?';
var ingredients='&ingredients=';
var key='apiKey=afe32ef94f4540639d6045c9e7c8da1e';
var resultNum='&number=10';
var picture='Images/';
var pType='.jpg';
var url;
var pictureUrl;
var recipCode;
//gather recipes
async function getRecipes(){
 
  var ingCode=document.getElementById('src-bar').value;
  //  console.log(ingCode);
    url=p1+fbi+key+ ingredients+ ingCode +resultNum;
  //  console.log(url);
  
  let response=await fetch(url);
  let data= await response.json();
  console.log(data);
 // document.getElementById('src-bar').reset();
  searchData(data);
}

//create table
function drawTable(data1){
  let results=document.querySelector('#res-table');
  let html='';
  var i=data1.image;
  var h=data1.healthScore;
  var h1="Health Score: ";
  var h2=h1+h;
  var t=data1.title;
  var s=data1.servings;
  var s1='Serves:';
  var s2=s1+s;
  var l=data1.sourceUrl
  html += `<tr>                        
<td> <img class="recipe-pic" src='${i}' alt="Picture of ${t}"> </td>                              
<td ><a href=${l}>${t}</a></td>                             <td>${h2}</td>                                            <td>${s2}</td>                                               </tr>`
results.innerHTML +=html;
}

//searches the data
function searchData(data){
  var num=data.length;
  console.log(num)
  for(j=0;j<num;j++){
     recipCode=data[j].id;
     console.log(recipCode);
       getRecipe(recipCode);
  }
}
// get individual recipe
async function getRecipe(recipCode){
  var slash='/';
 var url1=p1+slash+recipCode+info+key;
  let response= await fetch(url1);
  let data1=await response.json();
  console.log(data1)
 drawTable(data1);
}
  

