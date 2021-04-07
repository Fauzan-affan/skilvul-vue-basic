const app = Vue.createApp({
    methods: {
        func1() {
            alert("DIV 1")
        },
        func2() {
            alert("DIV 2")
        },
        show(){
            alert('thank you')
        }
    }
})

app.mount("#app")