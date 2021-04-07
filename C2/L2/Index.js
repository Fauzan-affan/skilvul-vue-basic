// Instansiasi menggunakan objek
// const app = Vue.createApp({
//     template: "<h1>Belajar Vue</h1>"
// })

// app.mount("#app")

// Menggunakan global attribue
const globalAttr = {
    template: "<h1>Belajar Vue Global Attr</h1>"
}

Vue.createApp(globalAttr).mount("#app")