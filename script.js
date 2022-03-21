const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    sidebarClose = body.querySelector(".close"),
    main = body.querySelector("main"),
    menuButton = body.querySelector(".menu-button-icon"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text")

    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })

    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("light");

        if(body.classList.contains("light")){
            modeText.innerText = "Light Mode"
        }
        else{
            modeText.innerText = "Dark Mode"
        }
    })