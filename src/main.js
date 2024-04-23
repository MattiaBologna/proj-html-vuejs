import { createApp } from 'vue'
import App from './App.vue'

//import font awesome core 
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faAtlassian } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faInstagram, faTwitter, faYoutube, faCartShopping, faMagnifyingGlass, faAtlassian)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

