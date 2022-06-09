const d = document
const spinner = d.querySelector('#spinner')

d.addEventListener("DOMContentLoaded", () => {
    fetchApi();
});

const fetchApi = async () => {
    try {
        spinnerLoad(true)
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const resImg = await fetchApi()
        const json = await res.json()

        pintarPoke(json.results)
    } catch (error) {
        
    } finally {
        spinnerLoad(false)
    }
}

const pintarPoke = (json) => {
    const cards = d.querySelector("#cards");
    const template = d.querySelector("#template").content;
    const fragmento = d.createDocumentFragment()

    for (const item of json) {
        const clone = template.cloneNode(true)
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`
        clone.querySelector("img").src = ;
        fragmento.appendChild(clone)
    }
    cards.appendChild(fragmento)
}

const spinnerLoad = (estado) => {
    if(estado) spinner.classList.remove('d-none')
    else spinner.classList.add('d-none')
}