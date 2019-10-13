var pointsJSON = {};
var points = [];


// On JSON load use data to display list and specified points.
function dataReady(data){
  pointsJSON = data;
  points = pointsJSON.points;
  console.log(points)

  $('#butts').append(createList(points));
  $("#ima").append(makePoints(points));
}


// Create points list
function createList(array) {
     var di = document.createElement('div');
     // Create the list element:
     for (var i = 0; i < array.length; i++) {
       let a = array[i];

       let num = i+1;
       let note = a.list;


       // Skip if point has no coordinates
       if(a.coordinates == undefined){
         continue;
       }

    var ah = document.createElement('a');
    var textNode = document.createTextNode(note);
    ah.appendChild(textNode);
    ah.className = 'collection-item';
    ah.id = "listItem" + num;


      di.appendChild(ah);
    }
    console.log(di);
    return di;
}

// Draw circles on specified coordinates
function makePoints(array) {

    var element = document.getElementById('map');
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    // var started = pointsJSON.map;
    var started = 4000;
    var fin = width/started;

    var circle = 45/started;
    var dimen = width * circle;


    var di = document.createElement('div');
    // Create the list element:
    for (var i = 0; i < array.length; i++) {
      var ah = document.createElement('a');
      var divi = document.createElement('div');
      let a = array[i];

      let num = i+1;
      let note = a.note;

//			console.warn(typeof a.type == "string");

      if(typeof a.type == "string" || typeof a.coordinates == "undefined"){

      } else{

        let cc = a.coordinates;
        // console.log(a);
        let c = cc.split('/');

        let x = c[0] * fin;
        let y = c[1] * fin;

        x = x-(dimen/2);
        y = y-(dimen/2);

        let pID = "c" + num;
        let tID = 'n' + num;

        var picture = new Image;
        picture.src = "./circle.png"

        picture.style.left = x + 'px';
        picture.style.top = y + 'px';
        picture.style.position = 'absolute';
        picture.style.height = dimen + 'px';
        picture.style.width = dimen + 'px';
        picture.id = pID;

        divi.style.position = 'absolute';
        divi.style.display = 'flex';
        divi.style.left = x + 10 + 'px';
        divi.style.top = y - 40 + 'px';
        divi.style.backgroundColor = 'rgba(29, 29, 29, 0.5)';
        divi.appendChild(document.createTextNode(note));


        ah.title = a.hover;
        divi.id = tID;
        ah.className = 'hhhh'
        divi.className = 'notehidden';
        picture.className = 'el';

        ah.appendChild(picture);

        if(note != "" && typeof note != "undefined"){
        ah.appendChild(divi);

      }


    }

      di.appendChild(ah);
    }
    return di;
}

// Load JSON from site address;
function loadContent(){}
    let params = document.location.search || window.location.hash;
    // params = "?json.json";
    console.warn(params);

    if (params) {
        console.log("Found params to load from");
        // var URL = "https://forthelper.github.io/assets/";
        var URL = "https://mrovtest.github.io/f/";

        // if(params.includes("#frame")){
        //   console.log("para")
        //   params.replace("#frame", "");
        //   $("#map").style['width'] = "500px";
        //   $(".butts").style['height'] = '500px';
        // }

        if (params.startsWith("?") || params.startsWith("#")) {
            params = params.substring(1);
            params = URL + params;
            console.log(params);

            $.getJSON(params, function(data) {
              console.log(data)
               dataReady(data);
            });

            if(params.includes("-frame")){
              $(".image1").css('width', '500px');
              $(".butts").css('height', "500px");
              $(".butts").css('width', "150px");
              $("#footer").css('font-size', "12px");
            }
        }

  }

// Start
$(loadContent);
