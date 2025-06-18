import { createStore } from 'vuex'

export default createStore({
    state : {
        pageStatus : "listPage",
        visitedPath : "",
    },
    getters : {
        getTwoPowerPageStatus(state){
            return state.pageStatus;
        },
        getVisitedPath(state){
            return state.visitedPath;
        }
    },
    mutations : {
        setPageStatus(state,value){
            state.pageStatus = value;
        },
        setVisitedPath(state,value){
            state.visitedPath = value;
        }
    },
    actions : {
        acPageStatus({commit},state){
            commit('setPageStatus',state.pageStatus);
        },
        acVisitedPath({commit},state){
            commit('setVisitedPath',state.visitedPath);
        },
    }
})