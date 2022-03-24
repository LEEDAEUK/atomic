import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        black: '#000000',
        white: '#FFFFFF',
        red: '#B71C1C',
        blue: '#1565C0',
        orange: '#F57F17',
      },
    },
  },
});
