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
        seen: true
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