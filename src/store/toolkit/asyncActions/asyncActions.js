import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('data/fetchData', async function () {
  try {
    const response = await axios
      .get('http://94.131.246.109:5555/v1/2/Schoolboy')
      .then((response) => response.data.Items);
    return response;
  } catch (error) {
    console.error(error);
  }
});
export const fetchColumn = createAsyncThunk(
  'data/fetchColumn',
  async function () {
    try {
      const response = await axios
        .get('http://94.131.246.109:5555/v1/2/Column')
        .then((response) => response.data.Items);

      return response;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchRate = createAsyncThunk('data/fetchRate', async function () {
  try {
    const response = await axios
      .get('http://94.131.246.109:5555/v1/2/Rate')
      .then((response) => response.data.Items);
    return response;
  } catch (error) {
    console.error(error);
  }
});

export const deletePassLesson = createAsyncThunk(
  'data/deletePassLesson',
  async function (data) {
    const options = {
      method: 'POST',
      headers: {
        crossdomain: 'true',
        'Access-Control-Allow-Origin': '*',
      },
      data: data,
      url: 'http://94.131.246.109:5555/v1/2/UnRate',
    };
    axios(options).then((res) => {});
    return 'norm';
  }
);
export const putPass = createAsyncThunk('data/putPass', async function (data) {
  const options = {
    method: 'POST',
    headers: {
      crossdomain: 'true',
      'Access-Control-Allow-Origin': '*',
    },
    data: data,
    url: 'http://94.131.246.109:5555/v1/2/Rate',
  };
  axios(options).then((res) => {});
  return 'norm';
});
