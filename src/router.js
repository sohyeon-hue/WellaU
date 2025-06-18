import {createRouter,createWebHistory} from 'vue-router'
import mainPageView from '@views/mainPageView'
import loginVue from '@pages/loginVue'
import searchPassWord from '@pages/searchPassWord'
import searchPassWordCode from '@pages/searchPassWordCode'
import resetPassWord from '@pages/resetPassWord'
import groupMainFirst from '@pages/groupMainFirst'
import joinGroup from '@pages/joinGroup'
import joinGroupInvite from '@pages/joinGroupInvite'
import groupCheck from '@pages/groupCheck'
import createdGroup from '@pages/createdGroup'
import shareGroup from '@pages/shareGroup'
import groupMain from '@pages/groupMain'
import locationDetail from '@pages/locationDetail'
import locationSharing from '@pages/locationSharing'
import locationSharingDoneTime from '@pages/locationSharingDoneTime'
import recordLocation from '@pages/recordLocation'
import alertPage from '@pages/alertPage'

/* 메인 */
import batteryOff from '@pages/batteryOff'
import accessRight from '@pages/accessRight'

/* 메뉴 */
import groupManagement from '@pages/groupManagement'
import locationSharingStatus from '@pages/locationSharingStatus'
import inactiveSensing from '@pages/inactiveSensing'
import batteryAlert from '@pages/batteryAlert'
import sosSetting from '@pages/sosSetting'
import memberSetting from '@pages/memberSetting'
import removeGroup from '@pages/removeGroup'
import removeGrodupCheckNumber from '@pages/removeGrodupCheckNumber'
import safeZoneList from '@pages/safeZoneList'
import createSafezone from '@pages/createSafezone'
import searchAddress from '@pages/searchAddress'
import safeZoneView from '@pages/safeZoneView'
import safeZoneEidt from '@pages/safeZoneEidt'
import proximityAlertSetting from '@pages/proximityAlertSetting'
import proximityAlertEnter from '@pages/proximityAlertEnter'
import proximityAlertEdit from '@pages/proximityAlertEdit'
import sosView from '@pages/sosView'
import sosViewCancel from '@pages/sosViewCancel'
import sosDetail from '@pages/sosDetail'
import myProfileEditPhoto from '@pages/myProfileEditPhoto'
import nameChange from '@pages/nameChange'
import phoneChange from '@pages/phoneChange'
import phoneChangeCheck from '@pages/phoneChangeCheck'
import birthChange from '@pages/birthChange'
import passwordChange from '@pages/passwordChange'
import noticeView from '@pages/noticeView'
import faqView from '@pages/faqView'
import settingView from '@pages/settingView'
import openSauceLicenses from '@pages/openSauceLicenses'
import conditionsUse from '@pages/conditionsUse'

/* 가입하기 */
import joinPhoneInput from '@pages/joinPhoneInput'
import joinPhoneCheck from '@pages/joinPhoneCheck'
import enterPassword from '@pages/enterPassword'
import enterProfile from '@pages/enterProfile'
import provisionAgree from '@pages/provisionAgree'
import provisionView from '@pages/provisionView'
import authorityCheck from '@pages/authorityCheck'

/* 팝업스토어 */
import paymentView from '@pages/paymentView'
import popupStoreInfo from '@pages/popupStoreInfo'

/* PC */
import pcView from '@pages/pcView'

/* 관리자페이지 */
import managerPage from '@pages/managerPage'

import testVue from '@pages/testVue'
import vuePage01 from '@pages/vuePage01'

/* Guide */
import GuideHeader from '@pages/guide/GuideHeader'
import GuideDesign from '@pages/guide/GuideDesign'


const routes = [
    {
        path : '/',
        components : {
            default : mainPageView
        },
    },
    {
        path : '/test',
        components : {
            default : testVue
        },
    },
    {
        path : '/login',
        component : loginVue,
    },
    {
        path : '/searchPassWord',
        component : searchPassWord,
    },
    {
        path : '/searchPassWordCode',
        component : searchPassWordCode,
    },
    {
        path : '/resetPassWord',
        component : resetPassWord,
    },
    /* 가입하기 */
    {
        path : '/joinPhoneInput',
        component : joinPhoneInput,
    },
    {
        path : '/joinPhoneCheck',
        component : joinPhoneCheck,
    },
    {
        path : '/enterPassword',
        component : enterPassword,
    },
    {
        path : '/enterProfile',
        component : enterProfile,
    },
    {
        path : '/provisionAgree',
        component : provisionAgree,
    },
    {
        path : '/provisionView',
        component : provisionView,
    },
    {
        path : '/authorityCheck',
        component : authorityCheck,
    },

    {
        path : '/groupMainFirst',
        component : groupMainFirst,
    },
    {
        path : '/joinGroup',
        component : joinGroup,
    },
    {
        path : '/joinGroup/invite',
        component : joinGroupInvite,
    },
    {
        path : '/groupCheck',
        component : groupCheck,
    },
    {
        path : '/createdGroup',
        component : createdGroup,
    },
    {
        path : '/shareGroup',
        component : shareGroup,
    },
    {
        path : '/groupMain',
        component : groupMain,
    },
    {
        path : '/locationDetail',
        component : locationDetail,
    },
    {
        path : '/locationSharing',
        component : locationSharing,
    },
    {
        path : '/locationSharingDoneTime',
        component : locationSharingDoneTime,
    },
    {
        path : '/recordLocation',
        component : recordLocation,
    },
    {
        path : '/alertPage',
        component : alertPage,
    },
    /* 메인 */
    {
        path : '/batteryOff',
        component : batteryOff,
    },
    {
        path : '/accessRight',
        component : accessRight,
    },

    /* 메뉴 */
    {
        path : '/groupManagement',
        component : groupManagement,
    },
    {
        path : '/locationSharingStatus',
        component : locationSharingStatus,
    },
    {
        path : '/inactiveSensing',
        component : inactiveSensing,
    },
    {
        path : '/batteryAlert',
        component : batteryAlert,
    },
    {
        path : '/sosSetting',
        component : sosSetting,
    },
    {
        path : '/memberSetting',
        component : memberSetting,
    },
    {
        path : '/removeGroup',
        component : removeGroup,
    },
    {
        path : '/removeGrodupCheckNumber',
        component : removeGrodupCheckNumber,
    },
    {
        path : '/safeZoneList',
        component : safeZoneList,
    },
    {
        path : '/createSafezone',
        component : createSafezone,
    },
    {
        path : '/searchAddress',
        component : searchAddress,
    },
    {
        path : '/safeZoneView',
        component : safeZoneView,
    },
    {
        path : '/safeZoneEidt',
        component : safeZoneEidt,
    },
    {
        path : '/proximityAlertSetting',
        component : proximityAlertSetting,
    },
    {
        path : '/proximityAlertEnter',
        component : proximityAlertEnter,
    },
    {
        path : '/proximityAlertEdit',
        component : proximityAlertEdit,
    },
    {
        path : '/sosView',
        component : sosView,
    },
    {
        path : '/sosViewCancel',
        component : sosViewCancel,
    },
    {
        path : '/sosDetail',
        component : sosDetail,
    },
    {
        path : '/myProfileEditPhoto',
        component : myProfileEditPhoto,
    },
    {
        path : '/nameChange',
        component : nameChange,
    },
    {
        path : '/phoneChange',
        component : phoneChange,
    },
    {
        path : '/phoneChangeCheck',
        component : phoneChangeCheck,
    },
    {
        path : '/birthChange',
        component : birthChange,
    },
    {
        path : '/passwordChange',
        component : passwordChange,
    },
    {
        path : '/noticeView',
        component : noticeView,
    },
    {
        path : '/faqView',
        component : faqView,
    },
    {
        path : '/settingView',
        component : settingView,
    },
    {
        path : '/openSauceLicenses',
        component : openSauceLicenses,
    },
    {
        path : '/conditionsUse',
        component : conditionsUse,
    },
    {
        path : '/paymentView',
        component : paymentView,
    },
    {
        path : '/popupStoreInfo',
        component : popupStoreInfo,
    },
    // PC
    {
        path : '/pcView',
        component : pcView,
    },
    // 관리자페이지
    {
        path : '/managerPage',
        component : managerPage,
    },



    {
        path : '/page01',
        component : vuePage01,
    },
    // Guide
    {
        path : '/GuideHeader',
        component : GuideHeader,
    },
    {
        path : '/GuideDesign',
        component : GuideDesign,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router