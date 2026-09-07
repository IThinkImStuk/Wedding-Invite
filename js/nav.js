document.documentElement.classList.add("nav-loading");

fetch("./nav.html")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Navigation request failed: ${response.status}`);
        }
        return response.text();
    })
    .then(html => {
        document.getElementById("nav").innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        document.documentElement.classList.remove("nav-loading");
    });