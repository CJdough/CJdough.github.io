function createImageFromQuery() {
    // Get the query string
    const queryString = window.location.search;
    // Get the "imagedata" parameter from the query string
    const params = new URLSearchParams(queryString);
    const imageData = params.get("imagedata");

    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    // Get the 2D context of the canvas
    const ctx = canvas.getContext("2d");

    // Iterate through the characters in the "imagedata" parameter
    for (let i = 0; i < 100000; i++) {
      // Get the color for the current pixel
      let color;
      switch (imageData[i]) {
        case "1":
          color = "blue";
          break;
        case "2":
          color = "red";
          break;
        // You can add more cases for other colors
        default:
          // Set the color to black if the character is not recognized
          color = "black";
      }

      // Calculate the x and y coordinates of the current pixel
      const x = i % 100;
      const y = Math.floor(i/100);

      const noise = perlin.get(x/10, y/10);
      if (noise >= 0) {
        color = "green";
      }
      if (noise < 0 && noise > -0.2) {
        color = "#3ba1c5";
      }
      if (noise < -0.2) {
        color = "#2596be";
      }

      // Set the pixel color
      ctx.fillStyle = color;
      ctx.fillRect(x*10, y*10, 10, 10);
    }

    // Create an img element
    const img = document.getElementById("myImage");
    // Set the src attribute of the img element to the data URL of the canvas
    img.src = canvas.toDataURL();
    // Append the img element to the body of the page
    document.body.appendChild(img);
}


// Call the function after the page has loaded
window.addEventListener("load", createImageFromQuery);
