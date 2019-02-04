/**
 * Created by dsh on 31.01.19.
 */
var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!'
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Привет, Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Привет, Vue!'
    }
})
new Vue({
    el: '#app-7',
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi));
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }
})
new Vue({
    el: '#app-8',
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios
            .get('https://api.datalight.me/v1/request/coinmarketcap.coin.price_usd/?coin=eth,btc,eos&limit=100&offset=0&order=date&to_date=2017-10-20T21:09:53')
            .then(response => (this.info = response.data.result));
    },
    filters: {
        currencydecimal (value) {
            return value.toFixed(2)
        }
    }
})