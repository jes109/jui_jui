import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActs } from "../api/firebase";

export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
    const actsData = await getActs();
    return actsData;
});

const activitiesSlice = createSlice({
    name: 'activities',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivities.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActivities.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchActivities.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const selectActivity = (state) => state.activities.data;
export default activitiesSlice.reducer;