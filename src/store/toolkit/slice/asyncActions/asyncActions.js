import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async function () {
  const response = await fetch('http://94.131.246.109:5555/v1/2/Schoolboy');
  const data = await response.json();

  return data.Items;
});
export const fetchColumn = createAsyncThunk(
  'data/fetchColumn',
  async function () {
    const response = await fetch('http://94.131.246.109:5555/v1/2/Column');
    const data = await response.json();

    return data.Items;
  }
);

export const fetchRate = createAsyncThunk('data/fetchRate', async function () {
  const response = await fetch('http://94.131.246.109:5555/v1/2/Rate');
  const data = await response.json();
  return data.Items;
});
