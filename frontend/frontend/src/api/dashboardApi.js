// frontend/api/dashboardApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getDashboardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
};

export const getLeaderboardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/leaderboard`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return null;
  }
};
