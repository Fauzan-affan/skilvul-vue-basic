const app = Vue.createApp({
    data() {
        return {
            banyakNama: ["Eren", "Mikasa", "Armin"],
            attackOnTitan: [
                {namaDepan: "Eren", namaBelakang: "Yeager"},
                {namaDepan: "Mikasa", namaBelakang: "Ackerman"},
                {namaDepan: "Armin", namaBelakang: "Arlert"}
            ],
            attackOnTitanSkills: [
                {
                    nama: "Eren",
                    skills: ["Attack Titan", "Pemberani"]
                },
                {
                    nama: "Mikasa",
                    skills: ["Fisik Kuat", "Jago Manuver"]
                },
                {
                    nama: "Armin",
                    skills: ["Kolosal Titan", "Taktikal"]
                },
            ],
            karakterAOT: {
                nama: "Eren Yeager",
                titan: "Attack Titan",
                divisi: "Pasukan Pengintai"
            }
        }
    },
    methods: {
        // Fisher-Yates (aka Knuth) algorithm
        acakAlgoritma(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },
        acak() {
            this.banyakNama = this.acakAlgoritma(this.banyakNama)
        }
    },
    computed: {
        banyakNamaComputed() {
            return this.banyakNama.filter((item) => item === "Eren")
        }
    }
})

app.mount("#app")