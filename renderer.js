
const nativeTheme = window.process.argv.slice(-2)[0] // retrieves native theme
if(!localStorage.getItem("mode")){ // uses stored options first
    if(nativeTheme === "light"){
        document.documentElement.setAttribute("mode", "light");
        localStorage.setItem("mode", "light");
    } else if(nativeTheme === "dark") {
        document.documentElement.setAttribute("mode", "dark");
        localStorage.setItem("mode", "dark");
    } else {
        console.log("error");
    }
}

// listens for light mode toggle change
document.getElementById("mode-toggle").addEventListener("click", toggleMode); 

function toggleMode() {
    if(document.documentElement.getAttribute("mode") === "dark"){
        document.documentElement.setAttribute("mode", "light")
        localStorage.setItem("mode", "light");
    } else if(document.documentElement.getAttribute("mode") === "light"){
        document.documentElement.setAttribute("mode", "dark")
        localStorage.setItem("mode", "dark");
    }
}
