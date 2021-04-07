const app = Vue.createApp({
    data() {
        return {
            html: "<h1>Belajar Vue</h1>",
            url: "https://skilvul.com",
            attr: "href"
        }
    }
})

app.mount("#app")