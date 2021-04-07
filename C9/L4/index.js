const app = Vue.createApp({})

app.component("contoh-component-saya", {
    props: ['nama', 'kota'],
    template: `
            <div>
                <h1>Nama: {{ nama }} dari {{ kota }}</h1>
                <h3>
                    Umur: <slot></slot>
                </h3>
            </div>`
})

app.mount("#app")