///Add HTML by using createElement() and appendChild methods. 
const newDiv = document.createElement("div");
const newContent = document.createTextNode("Hello, this is a new div!");
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

document.getElementById("target").innerHTML = `<li>First item</li>
<li>Second item</li>
<li>Third item</li>`;
///Add class my-item to the second list item
const listItems = document.querySelectorAll("#target li");
if (listItems.length > 1) {
  listItems[1].classList.add("my-item");
}
