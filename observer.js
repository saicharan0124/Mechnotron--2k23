// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// const observercard = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show-card');

//         }
//         else {
//             entry.target.classList.remove('show-card');
//         }
//     });
// });

// const hiddenElementscard = document.querySelectorAll('.hidden-card');
// hiddenElementscard.forEach((el) => observercard.observe(el));


