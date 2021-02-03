const app = {
    data() {
        return {
            // msg: 'Hello, Vue3',
            // shown:true,
            // url:'https://www.sit.kmutt.ac.th' 
            firstname : 'Praepanwa',
            lastname : 'Tedprasit',
            job : 'secondary year student at SIT KMUTT',
            article : '90',
            follower : '924',
            rating : '2.7',
            myprofilepic : "./images/profile.jpg",
            facebook:"https://www.facebook.com/praepanwa.phaeng.3/",
            ig:"https://www.instagram.com/2000meters/"
        }
    }

}
var mountedApp = Vue.createApp(app).mount('#app')
