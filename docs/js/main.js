async function addPart(id, file) {
    const elmnt = document.getElementById(id);    
    try {
        const res = await fetch(file);
        const html = await res.text();
        elmnt.innerHTML = html;
    } catch(e) {
        console.error(e);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    addPart('header', './header.html');
    addPart('footer', './footer.html');
});