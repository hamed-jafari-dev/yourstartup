module.exports = {
    content: [
        './src/**/*.{html,js,ts,tsx,jsx}'
    ],
    theme: {
        fontFamily: {
            'SFProDisplay': ['SFProDisplay'],
            'SFProText': ['SFProText']
        },
        extend: {
            colors:{
                space: '#333',
                mainBlue: '#0e6ace',
                mainGreen: '#00cc73',
                lightestColor: '#f3f2fb',
                lighterColor: '#d4ccff',
                lightColor:'#aca4dc',
                mainColor: '#4b2df7',
                darkColor: '#371fc1',
                darkerColor: '#23118b',
                darkestColor: '#0f0355',
                orangeColor: '#ffa409'
            }
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: [
        require("tailwindcss-animate")
    ],
}
