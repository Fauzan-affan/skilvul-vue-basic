const app = Vue.createApp({
    data() {
        return {
            formData: {
                nama: "",
                alamat: "",
                negara: "",
                tempatKerja: [],
                remoteWork: "",
                skill: [],
                pengalamanKerja: ""
            }
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault()
            console.log(this.formData)
        }
    }
})

app.mount("#app")