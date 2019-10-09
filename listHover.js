// this function makes circle larger when listItem hovered

// var fortbytes;
//
// // Forbytes list
// $.getScript("../scripts/bytes.js", function(){
//   fortbytes = getFortbytes();
// });
//
// console.warn(fortbytes)

window.onmouseover=function(e) {
  let ee = e.target.id;
  let ec = e.target.className;
        if(ec === 'collection-item'){
          let id = ee.replace('listItem', "c");

          document.getElementById(id).className = "listSelected";
        }else{
//          console.clear();
        }
};

window.onmouseout=function(e) {
  let ee = e.target.id;
  let ec = e.target.className;

        if(ec === 'collection-item'){
          let id = ee.replace('listItem', "c");
          document.getElementById(id).className = "listNotSelected";
        }else{
//          console.clear();
        }
};
