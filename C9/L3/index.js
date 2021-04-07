const app = Vue.createApp({})

app.component("contoh-component-saya", {
    props: ['nama', 'kota'],
    template: "<h1>Nama: {{ nama }} dari {{ kota }}</h1>"
})

app.mount("#app")