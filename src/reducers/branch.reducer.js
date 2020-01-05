import * as COMPANY from '../actionTypes/company.actiontypes';

const initialState = {
    requesting: false,
    successful: false,
    data: [],
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
                data: action.data
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
        case COMPANY.BRANCH_EDIT:
            return {
                ...state,
                requesting: false,
            }

        default:
            return state
    }
}
export default reducer
