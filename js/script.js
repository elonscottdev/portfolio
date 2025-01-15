const cadre = document.querySelector('.cadre');
const hoverEffect = document.querySelector('.hover-effect');

cadre.addEventListener('mousemove', (event) => {
    const rect = cadre.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    hoverEffect.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
});

cadre.addEventListener('mouseleave', () => {
    hoverEffect.style.transform = 'translate(-150%, -150%)';
});

const boxes = document.querySelectorAll('.box');

const checkScroll = () => {
    boxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (boxPosition < windowHeight - 100) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
checkScroll();

const header = document.querySelector('header');
const heroSection = document.querySelector('#hero');

function checkHeaderScroll() {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY === 0) {
        header.classList.remove('sticky');
        header.classList.remove('sticky-return');
    } else {
        if (window.scrollY >= heroHeight) {
            header.classList.add('sticky');
            header.classList.remove('sticky-return');
        } else {
            header.classList.remove('sticky');
            header.classList.add('sticky-return');
        }
    }
}

window.addEventListener('scroll', checkHeaderScroll);
checkHeaderScroll();

const links = document.querySelectorAll('.navbar_item_link'); 
const sections = document.querySelectorAll('section');

function highlightLinkOnScroll() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            links.forEach(link => link.classList.remove('active'));
            links.forEach(link => {
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active'); 
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightLinkOnScroll);
highlightLinkOnScroll();

const bluePulse1 = document.querySelector("#blue-pulse-1");

function animateBluePulse1() {
    const startX1 = 83, startY1 = 320, startX2 = 83, startY2 = 415;
    const targetX1 = 400, targetY1 = 83, targetX2 = 350, targetY2 = 133.75;

    const duration = 2200;
    const delay = 500;
    const repeatDelay = 1400;
    let step = 0;
    const steps = 110;

    function updateGradient() {
        if (step <= steps) {
            const x1 = startX1 + (targetX1 - startX1) * (step / steps);
            const y1 = startY1 + (targetY1 - startY1) * (step / steps);
            const x2 = startX2 + (targetX2 - startX2) * (step / steps);
            const y2 = startY2 + (targetY2 - startY2) * (step / steps);

            bluePulse1.setAttribute("x1", x1);
            bluePulse1.setAttribute("y1", y1);
            bluePulse1.setAttribute("x2", x2);
            bluePulse1.setAttribute("y2", y2);

            step++;

            requestAnimationFrame(updateGradient);
        } else {
            setTimeout(animateBluePulse1, repeatDelay);
        }
    }

    setTimeout(updateGradient, delay);
}

animateBluePulse1();


const bluePulse2 = document.querySelector("#blue-pulse-2");

function animateBluePulse2() {
    const startX1 = 83, startY1 = 267.5, startX2 = 83, startY2 = 415;
    const targetX1 = 400, targetY1 = 83, targetX2 = 350, targetY2 = 133.75;

    const duration = 2200;
    const delay = 500;
    const repeatDelay = 1400;
    let step = 0;
    const steps = 160;

    function updateGradient() {
        if (step <= steps) {
            const x1 = startX1 + (targetX1 - startX1) * (step / steps);
            const y1 = startY1 + (targetY1 - startY1) * (step / steps);
            const x2 = startX2 + (targetX2 - startX2) * (step / steps);
            const y2 = startY2 + (targetY2 - startY2) * (step / steps);

            bluePulse2.setAttribute("x1", x1);
            bluePulse2.setAttribute("y1", y1);
            bluePulse2.setAttribute("x2", x2);
            bluePulse2.setAttribute("y2", y2);

            step++;

            requestAnimationFrame(updateGradient);
        } else {
            setTimeout(animateBluePulse2, repeatDelay);
        }
    }

    setTimeout(updateGradient, delay);
}

animateBluePulse2();


const pinkPulse1 = document.querySelector("#pink-pulse-1");

function animatePinkPulse1() {
    const startX1 = 412, startY1 = 264, startX2 = 412, startY2 = 304;
    const targetX1 = 400, targetY1 = 83, targetX2 = 350, targetY2 = 133.75;

    const duration = 2200;
    const delay = 500;
    const repeatDelay = 1400;
    let step = 0;
    const steps = 50;

    function updateGradient() {
        if (step <= steps) {
            const x1 = startX1 + (targetX1 - startX1) * (step / steps);
            const y1 = startY1 + (targetY1 - startY1) * (step / steps);
            const x2 = startX2 + (targetX2 - startX2) * (step / steps);
            const y2 = startY2 + (targetY2 - startY2) * (step / steps);

            pinkPulse1.setAttribute("x1", x1);
            pinkPulse1.setAttribute("y1", y1);
            pinkPulse1.setAttribute("x2", x2);
            pinkPulse1.setAttribute("y2", y2);

            step++;

            requestAnimationFrame(updateGradient);
        } else {
            setTimeout(animatePinkPulse1, repeatDelay);
        }
    }

    setTimeout(updateGradient, delay);
}

animatePinkPulse1();


const pinkGradient2 = document.querySelector("#pink-pulse-2");

function animatePinkPulse2() {
    const startX1 = 490, startX2 = 490, startY1 = 266, startY2 = 284;
    const targetX1 = 479, targetX2 = 479, targetY1 = 120, targetY2 = 150;

    const duration = 2200;
    const delay = 500;
    const repeatDelay = 1800;
    let step = 0;
    const steps = 110;

    function updateGradient() {
        if (step <= steps) {
            const x1 = startX1 + (targetX1 - startX1) * (step / steps);
            const y1 = startY1 + (targetY1 - startY1) * (step / steps);
            const x2 = startX2 + (targetX2 - startX2) * (step / steps);
            const y2 = startY2 + (targetY2 - startY2) * (step / steps);

            pinkGradient2.setAttribute("x1", x1);
            pinkGradient2.setAttribute("y1", y1);
            pinkGradient2.setAttribute("x2", x2);
            pinkGradient2.setAttribute("y2", y2);

            step++;

            requestAnimationFrame(updateGradient);
        } else {
            setTimeout(animatePinkPulse2, repeatDelay);
        }
    }

    setTimeout(updateGradient, delay);
}

animatePinkPulse2();

const orangePulse1 = document.querySelector("#orange-pulse-1");

function animateOrangePulse1() {
    const startX1 = 826, startY1 = 270, startX2 = 826, startY2 = 340;
    const targetX1 = 360, targetY1 = 130, targetX2 = 400, targetY2 = 170;

    const duration = 2200;
    const delay = 500;
    const repeatDelay = 1800;
    let step = 0;
    const steps = 105;

    function updateGradient() {
        if (step <= steps) {
            const x1 = startX1 + (targetX1 - startX1) * (step / steps);
            const y1 = startY1 + (targetY1 - startY1) * (step / steps);
            const x2 = startX2 + (targetX2 - startX2) * (step / steps);
            const y2 = startY2 + (targetY2 - startY2) * (step / steps);

            orangePulse1.setAttribute("x1", x1);
            orangePulse1.setAttribute("y1", y1);
            orangePulse1.setAttribute("x2", x2);
            orangePulse1.setAttribute("y2", y2);

            step++;

            requestAnimationFrame(updateGradient);
        } else {
            setTimeout(animateOrangePulse1, repeatDelay);
        }
    }

    setTimeout(updateGradient, delay);
}

animateOrangePulse1();

const orangePulse2 = document.querySelector("#orange-pulse-2");

function animateOrangePulse2() {
    const startX1 = 868, startY1 = 280, startX2 = 868, startY2 = 440;
    const targetX1 = 300, targetY1 = 140, targetX2 = 400, targetY2 = 180;

    const duration = 2200;
    const delay = 500;
    const repeatDelay = 1800;
    let step = 0;
    const steps = 170;

    function updateGradient() {
        if (step <= steps) {
            const x1 = startX1 + (targetX1 - startX1) * (step / steps);
            const y1 = startY1 + (targetY1 - startY1) * (step / steps);
            const x2 = startX2 + (targetX2 - startX2) * (step / steps);
            const y2 = startY2 + (targetY2 - startY2) * (step / steps);

            orangePulse2.setAttribute("x1", x1);
            orangePulse2.setAttribute("y1", y1);
            orangePulse2.setAttribute("x2", x2);
            orangePulse2.setAttribute("y2", y2);

            step++;

            requestAnimationFrame(updateGradient);
        } else {
            setTimeout(animateOrangePulse2, repeatDelay);
        }
    }

    setTimeout(updateGradient, delay);
}

animateOrangePulse2();

window.addEventListener("scroll", function () {
    const gradientLine = document.querySelector(".gradient-line");
    const scrollPosition = window.scrollY;

    const maxHeight = 700;
    const offset = 1950;

    const newHeight = Math.max(0, Math.min(scrollPosition - offset, maxHeight));
    gradientLine.style.height = newHeight + "px";
});

window.addEventListener("scroll", function () {
    const gradientLine = document.querySelector(".gradient-line-gop");
    const scrollPosition = window.scrollY;

    const maxHeight = 740;
    const offset = 2750;

    const newHeight = Math.max(0, Math.min(scrollPosition - offset, maxHeight));
    gradientLine.style.height = newHeight + "px";
});

window.addEventListener("scroll", function () {
    const gradientLine = document.querySelector(".gradient-line-hammad");
    const scrollPosition = window.scrollY;

    const maxHeight = 740;
    const offset = 3600;

    const newHeight = Math.max(0, Math.min(scrollPosition - offset, maxHeight));
    gradientLine.style.height = newHeight + "px";
});

window.addEventListener("scroll", function () {
    const gradientLine = document.querySelector(".gradient-line-jorf");
    const scrollPosition = window.scrollY;

    const maxHeight = 600;
    const offset = 4450;

    const newHeight = Math.max(0, Math.min(scrollPosition - offset, maxHeight));
    gradientLine.style.height = newHeight + "px";
});


const experienceCadres = document.querySelectorAll('.experience_cadre');

experienceCadres.forEach((experienceCadre) => {
    const backDiv = experienceCadre.querySelector('.back');

    experienceCadre.addEventListener('mousemove', (e) => {
        const { clientX: mouseX, clientY: mouseY } = e;
        const { left, top, width, height } = experienceCadre.getBoundingClientRect();

        const centerX = left + width / 1.1;
        const centerY = top + height / 1.1;
        const deltaX = (mouseX - centerX) / width * 2;
        const deltaY = (mouseY - centerY) / height * 2;

        experienceCadre.style.transform =
            `perspective(1400px) rotateX(${deltaY}deg) rotateY(${deltaX}deg)`;

        if (backDiv) {
            const x = mouseX - left;
            const y = mouseY - top;
            backDiv.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
        }
    });

    experienceCadre.addEventListener('mouseleave', () => {
        experienceCadre.style.transform = '';
        if (backDiv) {
            backDiv.style.transform = 'translate(-150%, -150%)';
        }
    });
});


function toggleSkills(button) {
    const buttons = document.querySelectorAll('.skills_category button');
    buttons.forEach((btn) => btn.classList.remove('active'));

    button.classList.add('active');

    const category = button.getAttribute('data-category');

    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill) => {
        if (skill.classList.contains(`not-${category}`)) {
            skill.style.opacity = '0.3';
        } else {
            skill.style.opacity = '1';
        }
    });
}

document.querySelectorAll('.navbar_item_link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function toggleMenu(button) {
    const menu = document.querySelector('.menu-items');
    const icon = button.querySelector('i');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        icon.classList.remove('fa-xmark');
        button.classList.remove('active');
        icon.classList.add('fa-bars');
    } else {
        menu.classList.add('show');
        icon.classList.remove('fa-bars');
        button.classList.add('active');
        icon.classList.add('fa-xmark');
    }
}