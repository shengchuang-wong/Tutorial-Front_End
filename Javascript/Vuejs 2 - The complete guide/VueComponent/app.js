var data = { status: 'Critical' };

// local component
var cmp = {
    data: function() {
        return data;
    },
    template: '<p>Server Status Same: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Changed'
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'my-cmp': cmp
    }
})

// global component
Vue.component('my-cmp-2', {
    data: function() {
        return { status: 'Critical' };
    },
    template: '<p>Server Status Same: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Changed'
        }
    }
});

new Vue({
    el: '#app2'
})