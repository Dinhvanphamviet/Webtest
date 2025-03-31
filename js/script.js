let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }
});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}

document.querySelectorAll('.course-1 .box .btn').forEach(button => {
    button.onclick = (event) => {
        event.preventDefault();
        let link = button.getAttribute('data-link');
        if (link) window.location.href = link;
    };
});
