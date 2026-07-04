import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        activeTab: 'photos',
        page: 1,
        results: [],
        loading: false,
        error: null,
    },

    reducers: {
        setQuery(state, actions) {
            state.query = actions.payload
        },
        setActiveTabs(state, actions) {
            state.activeTab = actions.payload
        },
        setResults(state, actions) {
            state.results = actions.payload
            state.loading = false
        },
        setLoading(state) {
            state.loading = true;
            state.error = null
        },
        setError(state, actions) {
            state.error = actions.payload;
            state.loading = false;
        },
        clearResults(state) {
            state.results = []
        },
        setPage(state, action) {
            state.page = action.payload;
        },

        nextPage(state) {
            state.page += 1;
        },

        prevPage(state) {
            if (state.page > 1) state.page -= 1;
        },
    }
})

export const { setActiveTabs, setError, setLoading, setQuery, setResults, clearResults, setPage, nextPage, prevPage } = searchSlice.actions

export const searchReducer = searchSlice.reducer
export default searchSlice.reducer
