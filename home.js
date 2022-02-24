
//for 1st slideshow

let firstSlideshow = () => {

    let images_arr = JSON.parse(localStorage.getItem("sildeshow_images"))
    // console.log(images_arr);

    let slideshow = document.getElementById("slideshow_img")

    let i = 0

    x = setInterval(() => {

        if (i == images_arr.length) {

            i = 0
        }

        slideshow.src = images_arr[i].image

        i = i + 1
        // console.log(i);
    }, 2000)
}
firstSlideshow()

// for 2nd slideshow

let secondSlideshow = () =>{

    let images_arr = JSON.parse(localStorage.getItem("slideshow_images2"))
    console.log(images_arr);

    let slideshow = document.getElementById("slideshow_img2")

    let i = 0

    let x = setInterval(() =>{

        if(i == images_arr.length){

            i = 0
        }

        slideshow.src = images_arr[i].image

        i = i + 1
    }, 2000)

}

secondSlideshow()

// for 3rd slideshow

let thirdSlideshow = () =>{

    let images_arr = JSON.parse(localStorage.getItem("slideshow_images3"))
    // console.log(images_arr);

    let slideshow = document.getElementById("slideshow_img3")

    let i = 0

    let x = setInterval(() =>{

        if(i == images_arr.length){

            i = 0
        }

        slideshow.src = images_arr[i].image

        i = i + 1
    }, 2000)
}

thirdSlideshow()

let fourthSlideshow = () => {

    let images_arr = JSON.parse(localStorage.getItem("slideshow_images4"))
    // console.log(images_arr);

    let slideshow = document.getElementById("slideshow_img4")

    let i = 0

    let x = setInterval(() =>{

        if(i == images_arr.length){

            i = 0
        }

        slideshow.src = images_arr[i].image

        i = i + 1
    }, 2000)
}

fourthSlideshow()