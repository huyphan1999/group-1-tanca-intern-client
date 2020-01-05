import * as COMPANY from '../actionTypes/company.actiontypes';

const initialState = {
    requesting: false,
    successful: false,
    data: [],
}

const reducer = function companyReducer(state = initialState, action) {
    switch (action.type) {
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
                data: action.data
            }

        case COMPANY.POS_ERROR:
            return {
                ...state,
                branch_message: action.error,
                successful: false,
                requesting: false
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
        case COMPANY.POS_EDIT:
            return {
                ...state,
                requesting: false,
            }

        default:
            return state
    }
}
export default reducer
