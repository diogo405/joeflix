import {atom} from 'recoil'

const feedbackState = atom({
    key: 'feedbackState',
    default: {isVisible: false, message: ''}
})

export default feedbackState