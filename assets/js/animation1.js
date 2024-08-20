import { Application } from '@splinetool/runtime';

document.addEventListener("DOMContentLoaded", function() {
    const canvas1 = document.getElementById('canvas1');
    const app1 = new Application(canvas1);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                app1.load('https://prod.spline.design/7yjNXFZy4JKD8it6/scene.splinecode');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(canvas1);
});
