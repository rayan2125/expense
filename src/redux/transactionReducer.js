import { createSlice } from "@reduxjs/toolkit";

const TransactionReducer = createSlice({
    name: 'transaction',
    initialState: {
        alltransaction: [],
    },
    reducers: {
        add(state, action) {
            if (!Array.isArray(state.alltransaction)) {
                state.alltransaction = [];
            }
            state.alltransaction.push(action.payload);
        },
        del(state, action) {
            state.alltransaction = state.alltransaction.filter(item => item.id !== action.payload);
        },
        edit(state, action) {
            const index = state.alltransaction.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.alltransaction[index] = {
                    ...state.alltransaction[index],
                    ...action.payload.editedItem
                };
            }
        },
        
    }
});

export const { add, del, edit } = TransactionReducer.actions;
export default TransactionReducer.reducer;
