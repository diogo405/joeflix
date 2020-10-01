import {atom} from 'recoil'

const videoPopupState = atom({
    key: 'videoPopupState',
    default: {isVisible: false}
})

export default videoPopupState
