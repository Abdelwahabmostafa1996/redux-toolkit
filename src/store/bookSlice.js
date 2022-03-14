import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk('book/getBooks',
    async(_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const res = await fetch('https://api.publicapis.org/entries');
            const data = await res.json();
            console.log(res);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }

);


export const insertBook = createAsyncThunk('book/insertBook', async(data, thunkAPI) => {})











const bookSlice = createSlice({
    name: 'book',
    initialState: { books: [], isLoading: false, error: null },
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;

        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default bookSlice.reducer;