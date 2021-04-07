const app = Vue.createApp({
    data() {
        return {
            formValues: {
                name: '',
                profileSummary: '',
                country: '',
                jobLocation: [],
                remoteWork: 'no',
                skillSet: [],
                yearsOfExperience: '',
                age: null,
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