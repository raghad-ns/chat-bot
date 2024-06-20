/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#222',
                myGray: 'rgb(148 148 148)'
            }
        }, boxShadow: {
            'right-lg': '10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)',
            // You can add more custom shadows here
        }
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.hide-scrollbar': {
                    /* For Webkit browsers */
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    /* For Firefox */
                    '-ms-overflow-style': 'none',  /* IE 10+ */
                    'scrollbar-width': 'none',     /* Firefox */
                }
            });
        }
    ],
};
