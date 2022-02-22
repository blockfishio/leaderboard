module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./layouts/**/*.{js,ts,jsx,tsx}'],
  purge:[],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(./images/home_section_1.jpg)",
        'hero-image-mobile': "url(./images/home_section_1_mobile.jpg)",
        'hero-image-lg': "url(./images/home_section_1_extra_lg.png)",
        'explore-image': "url(./images/explore.jpg)",
        'defense-image': "url(./images/defense_bg.png)",
        'defense-image-mobile': "url(./images/defense_bg_mobile.png)",
        "defense-right-background": "url(./images/defend@2x.png)",
        "astro-background": "url(./images/astro.jpg)",
        "astro-background-mobile": "url(./images/astro_mobile.jpg)",
        "login-background": "url(./images/ic_loginbasemap.png)",
        "dot-image": "url(./images/ic_dottedline.png)",
        "triangle-bg": "url(./images/triangle_bg@2x.png)"
      }), 
 
      maxWidth: {
        '1064': '1064px'
      },
      width: {
        '128': '32rem'
      },
      backgroundPosition: {
          "center-right": "70% top"
      },
      height: {
        '120': '36rem',
        '192': '48rem'
      },
        maxHeight: {
        '120': '36rem'
      },
      fontSize: {
        'nav': ['13px', '20px']
     },
     margin: {
       '5px': '5px',
       '3px': '3px'
     },
     padding: {
       '3px': '3px',
       '16px': '16px',
       '19px': '19px',
       '65px': '65px'
     },
     fontSize: {
       '13px': '13px'
     },
     colors: {
      'spacey-heavy': '#060f18', 
      'spacey-white': '#fff',
      'spacey-navbar': '#242129',
      'spacey-light-grey': '#464646',
      'spacey-underline': '#373634',
      'spacey-black-background': '#1a1a1a',
      'spacey-black': '#000',
      'spacey-pink': '#ff2d54',
      'spacey-yellow': '#bd8e6a',
      'spacey-pink-hover': '#ff5c58',
      'spacey-yellow-hover': '#f09711',
      'spacey-input-background': '#f1f1f1',
      'spacey-sidemenu-background': '#21252e',
      'spacey-orange-border': '#f87c6b',
      'spacey-grey': '#9e9e9e',
      'spacey-form-background': '#0b1926',
      'spacey-form-input-background': '#1d3149',
      'spacey-form-text': '#a7b0b9',
      'spacey-form-border': '#1c3049',
      'spacey-mobile-grey': '#9b9b9b',
      'spacey-mobile-background': '#322e37',
      'spacey-mobile-background-hover': '#bd8e6a',
      'spacey-mobile-grey-heavy':'#5a5a5a',
      "spacey-text-header": '#f9f9f9',
      "spacey-text-subheader": '#cccbc9',
      "spacey-vote-button": '#ad693a',
      "spacey-learnmore-button": '#575757',
      "spacey-dao-tab-seperator": '#595959',
      "spacey-dao-tab-active": '#bd8e6a',
      "spacey-dao-line-breaker": "#20222e",
      "spacey-dao-grey": "#747474",
      "spacey-dao-content": "#121d2b",
      "spacey-dao-content-bg": "#121e2c",
      "spacey-dao-content-bottom": '#0d1522',
      'spacey-dao-content-text': '#c6c6c8',
      'spacey-dao-content-dashline': '#34445b',
      'spacey-dao-blue-bar': '#0ae5ff',
      'spacey-login-close': '#3d3b47',
      'spacey-login-text-heavy': '#bdbbc7',
      'spacey-login-text-light': '#777387',
      'spacey-leaderboard-grey': '#393a4b',
      'spacey-leaderboard-orange':'#e6931b',
      'spacey-leaderboard-orange-light': '#ecaf6a',
      'spacey-leaderboard-orange-lighter': '#b88b69',
      'spacey-leaderboard-blue': '#0ba29a',
      'spacey-leaderboard-button': '#B88B68',
      'spacey-leaderboard-button-highlight': '#e6931d',
      'spacey-leaderboard-yellow': '#f39800',
      'spacey-leader-grey-heavy' : '#0e1622',
      'spacey-leaderboard-very-easy': '#8fbd7a',
      'spacey-leaderboard-easy': '#367336',
      'spacey-leaderboard-medium': '#e8bc37',
      'spacey-leaderboard-hard': '#f3951b',
      'spacey-leaderboard-very-hard': '#d56363',
      'spacey-leaderboard-insane':  '#a2bce2', 
      'spacey-leaderboard-impossible': '#8878b6'
     },
      gridTemplateColumns: {
        // Simple 16 column grid
        '17': 'repeat(17, minmax(0, 1fr))',
      }
    },
    fontFamily: {
      'segoe': ["Segoe UI", "roboto", "Helvetica Neue", "arial, sans-serif"],
      'robo': ['roboto', 'sans-serif', 'arial','helvetica','clean'], 
      'bankgothic': ['Bank Gothic', 'roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
