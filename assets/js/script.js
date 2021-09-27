//DOM Selectors

const projectContainer = $("#projects");


// //Cursor
// $(document).ready(function () {

//     var mousePos = {};

//     function getRandomInt(min, max) {
//         return Math.round(Math.random() * (max - min + 1)) + min;
//     }

//     $(window).mousemove(function (e) {
//         mousePos.x = e.pageX;
//         mousePos.y = e.pageY;
//     });

//     $(window).mouseleave(function (e) {
//         mousePos.x = -1;
//         mousePos.y = -1;
//     });

//     var draw = setInterval(function () {
//         if (mousePos.x > 0 && mousePos.y > 0) {

//             var range = 15;

//             var color = "background: rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ");";

//             var sizeInt = getRandomInt(10, 30);
//             size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

//             var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

//             var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

//             var style = left + top + color + size;
//             $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { $(this).remove(); });
//         }
//     }, 1);
// });


// Responsive Nav
$(function () {
    menu = $("nav ul");

    $("#openup").on("click", function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 580 && menu.is(":hidden")) {
            menu.removeAttr("style");
        }
    });

    $("nav li").on("click", function (e) {
        var w = $(window).width();
        if (w < 580) {
            menu.slideToggle();
        }
    });
    $(".open-menu").height($(window).height());
});

// Name animation



// //Project array

// let projects = [
//     {
//         title: 'Astronomical Guidance',
//         role: 'Front-end design/development',
//         link: ''
//     },
//     {
//         title: 'Astronomical Guidance',
//         role: 'Front-end design/development',
//         link: ''
//     },
//     {
//         title: 'Astronomical Guidance',
//         role: 'Front-end design/development',
//         link: ''
//     },
//     {
//         title: 'Astronomical Guidance',
//         role: 'Front-end design/development',
//         link: ''
//     },
//     {
//         title: 'Astronomical Guidance',
//         role: 'Front-end design/development',
//         link: ''
//     },

// ];

// //Project card HTML Components
// //const projectContainer = $("#projects");

// let projectCard = $("<div class='col-sm project-card'>");
// let projectImage = $("<img alt='Project card image' id='content'>");
// let projectTitle = $("<h6>");

// for (let i = 0; i <= projects.length; i++) {
//     projectImage.attr("src", "./assets/images/bluebg-whiteflowers.jpg")
//     projectImage.attr("height", "200")
//     projectImage.attr("width", "300")
//     projectCard.append(projectImage);
//     projectContainer.append(projectCard);
//     projectTitle.text(projects[i].title);
//     projectCard.append(projectTitle);



// }