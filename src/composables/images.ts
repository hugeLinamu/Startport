import { createFloating } from './createFloating'
import TheImageVue from '../components/TheImage.vue'
const { 
    Proxy:theImageProxy,
    Container:theImageContainer
} =  createFloating(TheImageVue)

export {
    theImageProxy,
    theImageContainer
}