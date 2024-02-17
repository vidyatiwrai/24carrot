  var currentImageIndex = 0;
  var images = document.querySelectorAll('.random_image_right img');
  var dots = document.querySelectorAll('.dot');

  function showImage(index) {
    // Hide all images and remove the 'active' class from dots
    images.forEach(function (image) {
      image.style.display = 'none';
    });
    dots.forEach(function (dot) {
      dot.classList.remove('active');
    });

    // Show the selected image and add the 'active' class to the corresponding dot
    images[index].style.display = 'block';
    dots[index].classList.add('active');

    // Update the currentImageIndex
    currentImageIndex = index;
  }

  function createDotClickHandler(index) {
    return function () {
      showImage(index);
    };
  }

  // Assign click handlers to each dot
  dots.forEach(function (dot, index) {
    dot.addEventListener('click', createDotClickHandler(index));
  });

  // Initially, show the first image
  showImage(0);
//////////////////////////////////randomly image///////////


    // Array of image URLs
    const gifUrl = "https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif";

    // Get the image element
    const slideshowImg = document.getElementById("slideshow-img");

    // Function to update the image source
    function updateImage() {
        slideshowImg.src = gifUrl;
    }

    // Initial update
    updateImage();

    // Set interval to update the image every 3000 milliseconds (3 seconds)
    setInterval(updateImage, 3000);
