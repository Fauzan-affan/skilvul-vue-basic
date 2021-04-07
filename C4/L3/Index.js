const app = Vue.createApp({
    data() {
        return {
            mataPelajaran: [
                {
                    id: 1,
                    judul: "Javascript",
                    nilai: 75
                },
                {
                    id: 2,
                    judul: "ES6",
                    nilai: 80
                },
                {
                    id: 3,
                    judul: "Vue.js",
                    nilai: 95
                },
            ],
            nama: ""
        }
    },
    methods: {
        tambahMataPelajaran(id, judul, nilai) {
            this.mataPelajaran.push({id: id, judul: judul, nilai: nilai})
        },
        methodRataRata() {
            console.log("Methods")
            return this.mataPelajaran.reduce((nilai, curr) => (nilai = nilai + curr.nilai), 0) / this.mataPelajaran.length
        }
    },
    computed: {
        // rata-rata: total nilai mata pelajaran / semua mata pelajaran
        nilaiRataRata() {
            console.log("Computed")
            return this.mataPelajaran.reduce((nilai, curr) => (nilai = nilai + curr.nilai), 0) / this.mataPelajaran.length
        }
    }
})

app.mount("#app")