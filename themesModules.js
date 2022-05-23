export function darkMode() {

    document.body.classList.remove("light")
    document.body.classList.add("dark")
    
    localStorage.setItem("theme", "dark")
    }

export function lightMode() {

    document.body.classList.remove("dark")
    document.body.classList.add("light")
    
    localStorage.setItem("theme", "light")
}

