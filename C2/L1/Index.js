class VueFramework {
    constructor(template) {
        this.template = template
    }

    mount(element) {
        return `Terapkan template ${this.template} ke element ${element}`
    }
}

// instansiasi
const CreateApp = new VueFramework("<h1>Hello World</h1>")

console.log(CreateApp.mount("#app"))

// --------------------------------------------------------------------------------

const app = Vue.createApp({
    template: "<h1>Hello World</h1>"
})

app.mount("#app")