const app = Vue.createApp({
    data() {
        return {
            total: 0
        }
    },
    methods: {
        penambahan(event){
            this.total += 1
            console.log(event)
        },
        pengurangan(event){
            this.total -= 1
            console.log(event)
        },
        notif(){
            alert("Thank you")
        }
    }
})

app.mount("#app")