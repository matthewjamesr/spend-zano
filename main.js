var app = new Vue({
    el: '#app',

    // Boiler listing template: {alias: '@', description: '', contactPrefs: {aliasOnly: false, discord: '', github: '', email: '', telegram: ''}}

    data: {
        listings: {
            development: [
                {alias: '@theagiledev', description: 'Full-stack web developer with special interests in decentralized applications, authentication, and geo-spatial applications.', contactPrefs: {aliasOnly: false, discord: 'theagiledev#8936', github: 'https://github.com/matthewjamesr', email: '', telegram: 'theagiledev'}}
            ],
            art_design: [],
            finance: [],
            services: [
                {alias: '@zanozon', description: 'We help our clients procure Books and other miscellaneous items.', contactPrefs: {aliasOnly: true, discord: '', github: '', email: '', telegram: ''}}
            ]
        }
    },
    methods: {
        // Methods
    },
    mounted: function () {
        // Do things when app loads
    }
})