const app = Vue.createApp({
    data() {
        return {
            color: "orange",
            txDecor: "underline",
            bgColor: "black",
            divStyle: {
                backgroundColor: "aqua"
            },
            textStyle: {
                fontSize: 50 + "px"
            }
        }
    }
})

app.mount("#app")