const app = Vue.createApp({
    data() {
        return {
            tabungan: 0
        }
    },
    methods: {
        tambah() {
            this.tabungan = this.tabungan + 1000
        },
        kurangi() {
            this.tabungan = this.tabungan - 1000
        },
    },
    computed: {
        
    },
    watch: {
        tabungan(newTabungan, oldTabungan){
            console.log("newTabungan: ", newTabungan, "oldTabungan :", oldTabungan)
            if (newTabungan > oldTabungan && newTabungan === 10000) {
                alert("Selamat kamu bisa beli es krim :)")
            }
        }
    }
})

app.mount("#app")