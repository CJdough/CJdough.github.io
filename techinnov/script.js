const NAME = [
    "cheddar",
    "mozzarella",
    "feta",
    "parmesan",
    "ricotta"
]
document.getElementById("Cheddar").classList.add("hidden");
function load_search(keyword) {
    for(i=0; i<NAME.length; i++){
        name = NAME[i];

        element = document.getElementById(name);

        if (name.includes(keyword.toLowerCase().trim())){
            element.classList.remove("hidden");
        } else {
            element.classList.add("hidden");
        }
    }
}
function get_search() {
    keyword = document.getElementById("search").value;
    load_search(keyword);
}

