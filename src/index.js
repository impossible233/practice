// const modal = document.getElementById('myModal')
// const img = document.getElementById('myImg')
// const modalImg = document.getElementById("img01")
// const captionText = document.getElementById("caption")
// img.onclick =  function (){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }
// const span = document.getElementsByClassName("close")[0];
// span.onclick = () =>{
//     modal.style.display = "none"
// }

// window.myFunction = function() {
//   let input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// };
// window.myFunction = function() {
//   let input, table, tr, td, filter, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//           if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//               tr[i].style.display = "";
//           } else {
//               tr[i].style.display = "none";
//           }
//       }
//   }
// };
// window.sortList = function (){
//     let list,i,switching,b,shouldSwitch;
//     list = document.getElementById("id01")
//     switching = true;
//     while (switching){
//         switching = false;
//         b = list.getElementsByTagName("li");
//         for (i = 0 ;i<b.length-1 ;i++){
//             shouldSwitch = false;
//             if (b[i].innerHTML.toUpperCase()>b[i+1].innerHTML.toUpperCase()){
//                 shouldSwitch = true;
//                 break;
//             }
//         }
//         if (shouldSwitch){
//             b[i].parentNode.insertBefore(b[i+1],b[i]);
//             switching =true;
//         }
//     }
//
// }
window.sortTable = function() {
  let table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
};
import("./form.less");
