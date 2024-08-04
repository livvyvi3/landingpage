const menuBtn = document.querySelector(".menu-btn");
        const menu = document.querySelector(".menu");
        const navItems = document.querySelectorAll(".nav-item");

        // Set Initial State Of Menu
        let showMenu = false;

        menuBtn.addEventListener("click", () => {
            if (!showMenu) {
                menuBtn.classList.add("open");
                menu.classList.add("show");
                navItems.forEach((item) => item.classList.add("show"));

                showMenu = true;
            } else {
                menuBtn.classList.remove("open");
                menu.classList.remove("show");
                navItems.forEach((item) => item.classList.remove("show"));

                showMenu = false;
            }
        });