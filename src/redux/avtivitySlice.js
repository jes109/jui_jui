import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActs } from "../api/firebase";
import { collection,onSnapshot } from "firebase/firestore";


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
    reducers: {
        changeMark: (state, action) => {
            const event = state.data.find(event => event.id === action.payload);
            if (event) {
                event.mark = !event.mark;
            }
        },
        setActivities: (state, action) => {
            state.data = action.payload;
        }
    },
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

export const { changeMark, setActivities } = activitiesSlice.actions;
export const selectActivity = (state) => state.activities.data;
export default activitiesSlice.reducer;

export const listenToActivities = () => (dispatch) => {
    const actsRef = collection(db, "activities");
    onSnapshot(actsRef, (snapshot) => {
        const actsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch(setActivities(actsData));
    });
};