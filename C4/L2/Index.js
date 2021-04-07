const app = Vue.createApp({
    data() {
        return {
            angka1: 5,
            angka2: 9,
            angka3: 3
        }
    },
    methods: {
        penambahan = (a,b,c) => {
            return a + b + c
        }
    }
})

app.mount("#app")