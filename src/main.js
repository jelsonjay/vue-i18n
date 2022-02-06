import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import FlaIcon from 'vue-flag-icon';
import en from '../src/langs/en.json';
//import pt from '../src/langs/pt.json';

const i18n = createI18n({
	locale: 'pt',
	messages: {
		en

		// en: {
		// 	home: 'home',
		// 	about: 'About',
		// 	hello: 'hello'
		// },
		// pt: {
		// 	home: 'Inicio',
		// 	about: 'Sobre',
		// 	hello: 'ola'
		// }
	}
});

createApp(App).use(FlaIcon).use(i18n).use(router).mount('#app');
