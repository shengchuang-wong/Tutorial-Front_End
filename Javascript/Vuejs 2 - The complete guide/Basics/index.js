new Vue({
    el: '#app',
    data: {
        title: `Hello Word`,
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'Max'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            this.title = 'Hello!';
            return `Hello`;
        },
        addCounter: function(step, e) {
            this.counter += step;
            console.log(e);
        },
        updateCoordinates: function(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        // dummy: function(e) {
        //     e.stopPropagation();
        // }
        alertMe: function() {
            alert('Alert!');
        }
    }
});


new Vue({
    el: '#app_v1',
    data: {
        counter: 0
    },
    computed: {
        output: function() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    }
})

new Vue({
    el: '#app_v2',
    data: {
        attachRed: false,
        color: 'green',
        width: 100
    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
})