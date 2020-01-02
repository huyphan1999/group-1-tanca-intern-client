import * as COMPANY from '../actionTypes/company.actiontypes';

const initialState = {
    requesting: false,
    successful: false,
    branch_message: [],
    branchs: [],
    deps: [],
    dep_message: [],
    positions: [],
    pos_message: [],
}

const reducer = function companyReducer(state = initialState, action) {
    switch (action.type) {
        case COMPANY.BRANCH_REQUESTING:
            return {
                ...state,
                requesting: true,
            }

        case COMPANY.BRANCH_SUCCESS:
            return {
                ...state,
                requesting: false,
                successful: true,
                branchs: action.data
            }

        case COMPANY.BRANCH_ERROR:
            return {
                ...state,
                branch_message: action.error,
                successful: false,
                requesting: false
            }

        case COMPANY.BRANCH_ADD:
            return {
                ...state,
                requesting: true,
            }

        case COMPANY.BRANCH_DEL:
            return {
                ...state,
                requesting: true,
            }
        case COMPANY.BRANCH_ADD:
            return {
                ...state,
                requesting: false,
            }


        case COMPANY.DEPT_REQUESTING:
            return {
                ...state,
                requesting: true,
            }

        case COMPANY.DEPT_SUCCESS:
            return {
                ...state,
                requesting: false,
                successful: true,
                deps: action.data
            }

        case COMPANY.DEPT_ERROR:
            return {
                ...state,
                dep_message: action.error,
                successful: false,
            }

        case COMPANY.DEPT_ADD:
            return {
                ...state,
                requesting: true,
            }

        case COMPANY.DEPT_DEL:
            return {
                ...state,
                requesting: true,
            }
        case COMPANY.DEPT_ADD:
            return {
                ...state,
                requesting: false,
            }

        case COMPANY.POS_REQUESTING:
            return {
                ...state,
                requesting: true,
            }

        case COMPANY.POS_SUCCESS:
            return {
                ...state,
                requesting: false,
                successful: true,
                positions: action.data
            }

        case COMPANY.POS_ERROR:
            return {
                ...state,
                pos_message: action.error,
                successful: false,
            }

        case COMPANY.POS_ADD:
            return {
                ...state,
                requesting: true,
            }

        case COMPANY.POS_DEL:
            return {
                ...state,
                requesting: true,
            }
        case COMPANY.POS_ADD:
            return {
                ...state,
                requesting: false,
            }
        default:
            return state
    }
}
export default reducer
