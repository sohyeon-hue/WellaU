import HeaderVue from './HeaderVue'
import lnbVue from './lnbVue'
import MaxInput from './MaxInput'
import MapPin from './MapPin'
import BothBar from './BothBar'
import ProfileBox from './ProfileBox'
import ModalBox from './ModalBox'
import ListSelectBox from './ListSelectBox'
import IconButtonBox from './IconButtonBox'
import IconButton from './IconButton'
import AlertBox from './AlertBox'
import StepBox from './StepBox'
import SafeZoneList from './SafeZoneList'
import SearchInput from './SearchInput'
import AccordionBox from './AccordionBox'
import PcLnb from './PcLnb'
import MapMarkPin from './MapMarkPin'

import VueDatePicker from '@vuepic/vue-datepicker';


export default {
    install(app) {
        app.component(HeaderVue.name,HeaderVue)
        app.component("lnbVue",lnbVue)
        app.component("MaxInput",MaxInput)
        app.component("MapPin",MapPin)
        app.component("BothBar",BothBar)
        app.component("ProfileBox",ProfileBox)
        app.component("ModalBox",ModalBox)
        app.component("ListSelectBox",ListSelectBox)
        app.component("IconButtonBox",IconButtonBox)
        app.component("IconButton",IconButton)
        app.component("AlertBox",AlertBox)
        app.component("StepBox",StepBox)
        app.component("SafeZoneList",SafeZoneList)
        app.component("SearchInput",SearchInput)
        app.component("AccordionBox",AccordionBox)
        app.component("PcLnb",PcLnb)
        app.component("MapMarkPin",MapMarkPin)
        app.component("VueDatePicker",VueDatePicker)
    }
}