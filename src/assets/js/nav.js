(() => {
    var n = document.querySelector("body"),
        s = document.querySelector("#cs-navigation"),
        c = document.querySelector("#cs-navigation .cs-toggle");

    c.addEventListener("click", function() {
        c.classList.toggle("cs-active");
        s.classList.toggle("cs-active");
        n.classList.toggle("cs-open");
        updateAriaExpanded();
    });

    function updateAriaExpanded() {
        let e = document.querySelector("#cs-expanded");
        e.getAttribute("aria-expanded") === "false"
            ? e.setAttribute("aria-expanded", "true")
            : e.setAttribute("aria-expanded", "false");
    }

    var a = Array.from(document.querySelectorAll("#cs-navigation .cs-dropdown"));
    for (let e of a) {
        let t = () => {
            e.classList.toggle("cs-active");
        };
        e.addEventListener("click", t);
    }
})();

// This code is outside the IIFE and should be part of its own script or properly encapsulated if needed
(function() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }

    // Mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
            item.classList.toggle('cs-active');
        };
        item.addEventListener('click', onClick);
    }
})();
