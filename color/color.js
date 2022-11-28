let root = document.documentElement;
let shadeM = 0.5;
let hex = []

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function changecolor(){
    hex = calculatecolor("","random-hex");
    updatecolor(hex)
}
function calculatecolor(code,mode){
    var hexlist = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    if (mode == "random-hex"){
      var hex = ["#"];
      for (i=1;i<=6;i++){
        num = random(0,16);
        hex[i] = hexlist[num];
      }
      hex = hex.join("");
      return hex;
    }
    if (mode == "hex-rgb"){
      var r=0;
      var g=0;
      var b=0;
      var c_1=0;
      var c_2=0;
      c_1 = hexlist.indexOf(code[1]);
      c_2 = hexlist.indexOf(code[2]);
      c_1 = c_1 * 16;
      r = c_1 + c_2;
      c_1 = hexlist.indexOf(code[3]);
      c_2 = hexlist.indexOf(code[4]);
      c_1 = c_1 * 16;
      g = c_1 + c_2;
      c_1 = hexlist.indexOf(code[5]);
      c_2 = hexlist.indexOf(code[6]);
      c_1 = c_1 * 16;
      b = c_1 + c_2;
      var rgb = [r,g,b];
      return rgb;
    }
    if (mode == "rgb-hex"){
      var hex = ["#"]
      var r = code[0];
      var g = code[1];
      var b = code[2];
      r2 = (r/16);
      var r3 = Math.floor(r2);
      var rR = (r2 - r3)
      rR = (rR * 16)
      hex[1] = hexlist[r3];
      hex[2] = hexlist[rR];

      r2 = (g/16);
      r3 = Math.floor(r2);
      rR = (r2 - r3)
      rR = (rR * 16)
      hex[3] = hexlist[r3];
      hex[4] = hexlist[rR];

      r2 = (b/16);
      r3 = Math.floor(r2);
      rR = (r2 - r3)
      rR = (rR * 16)
      hex[5] = hexlist[r3];
      hex[6] = hexlist[rR];
      console.log(hex);
      return hex.join("");
    }
    if (mode == "rgb-dark") {
      var r = Math.floor((code[0]*(1-shadeM)));
      var g = Math.floor((code[1]*(1-shadeM)));
      var b = Math.floor((code[2]*(1-shadeM)));
      return [r,g,b];
    }
    if (mode == "rgb-light") {
      var r = Math.floor(code[0] + (shadeM * (255 - code[0])))
      var g = Math.floor(code[1] + (shadeM * (255 - code[1])))
      var b = Math.floor(code[2] + (shadeM * (255 - code[2])))
      return [r,g,b];
    }
    return;
}
function updatecolor(hex){
  var rgb = calculatecolor(hex,"hex-rgb");
  root.style.setProperty("--color", hex);
  document.getElementById("hextext1").innerHTML = hex;
  document.getElementById("rgbtext1").innerHTML = rgb[0].toString()+", "+rgb[1].toString()+", "+rgb[2].toString();

  var dark_rgb = calculatecolor(rgb,"rgb-dark");
  var dark_hex = calculatecolor(dark_rgb,"rgb-hex");
  root.style.setProperty("--dark", dark_hex);
  document.getElementById("hextext2").innerHTML = dark_hex;
  document.getElementById("rgbtext2").innerHTML = dark_rgb[0].toString()+", "+dark_rgb[1].toString()+", "+dark_rgb[2].toString();

  var light_rgb = calculatecolor(rgb,"rgb-light");
  var light_hex = calculatecolor(light_rgb,"rgb-hex");
  root.style.setProperty("--light", light_hex);
  document.getElementById("hextext0").innerHTML = light_hex;
  document.getElementById("rgbtext0").innerHTML = light_rgb[0].toString()+", "+light_rgb[1].toString()+", "+light_rgb[2].toString();
}
function openui(){
  document.getElementById("helpuioverlay").dataset.reveal = "1";
  document.getElementById("helpui").dataset.reveal = "1";
}
function closeui(){
  document.getElementById("helpuioverlay").dataset.reveal = "0";
  document.getElementById("helpui").dataset.reveal = "0";
}
function gethex(){
  hex = document.getElementById("hex").value;
  document.getElementById("hex").value = "";
  updatecolor(hex);
}