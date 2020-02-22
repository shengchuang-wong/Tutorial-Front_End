var vm1 = new Vue({
    el: '#app',
    data: {
        title: 'The First VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            console.log(this.$refs);
            this.$refs.myButton.textContent = 'Auto Changed';
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

setTimeout(function() {
    vm1.title = 'Changed by Timer'; // vm1.$data.title <<< same
    vm1.show();
}, 3000);

// define the element in any vue el
// define before the vue instance
Vue.component('hello', {
    template: '<h1>Hello!</h1>'
})


var vm2 = new Vue({
    data: {
        title: 'The Second VueJS Instance'
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed!';
        }
    }
});

vm2.$mount('#app2');

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});

vm3.$mount('#app3');



// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);