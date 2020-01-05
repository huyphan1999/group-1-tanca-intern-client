import * as COMPANY from '../actionTypes/company.actiontypes';

const initialState = {
    requesting: false,
    successful: false,
    data: [],
}

const reducer = function companyReducer(state = initialState, action) {
    switch (action.type) {
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
                data: action.data
            }

        case COMPANY.DEPT_ERROR:
            return {
                ...state,
                branch_message: action.error,
                successful: false,
                requesting: false
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
        case COMPANY.DEPT_EDIT:
            return {
                ...state,
                requesting: false,
            }

        default:
            return state
    }
}
export default reducer
