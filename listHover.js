// this function makes circle larger when listItem hovered

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
