let projects = document.createElement ("div");
let text3 = document.createTextNode("projects");
projects.appendChild(text3);
document.body.appendChild(projects)
projects.style.cssText = "text-align:center;background:pink;margin:10px;font-size:30px;font-weight:bold;color:blue";
let content = document.createElement("div");

for(let i=0;i<18;i++){
let box = document.createElement("div")
let proj = document.createElement("h3");
let name = document.createElement("p");
let text1 = document.createTextNode(`project ${(i+1)}`);
let text2 = document.createTextNode("youssef");
proj.appendChild(text1);
name.appendChild(text2);
box.appendChild(proj);
box.appendChild(name);
content.appendChild(box);
document.body.appendChild(content);
box.style.cssText =
"text-align:center;background:white;margin:10px;width:225px";
box.style.color="purple";
}
content.style.cssText = "display:flex;flex-wrap:wrap; f";
document.body.style.backgroundColor = " pink";
content.style.flexWrap;