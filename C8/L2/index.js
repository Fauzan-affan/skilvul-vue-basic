const app = Vue.createApp({
    data() {
        return {
            formValues: {
                nama: '',
                alamat: '',
                negara: '',
                tempatKerja: [],
                remoteWork: 'no',
                skills: [],
                pengalamanKerja: '',
            },
        }
    },
    methods: {
        submitForm() {
            console.log('form values', this.formValues)
        }
    }
})

app.mount("#app")