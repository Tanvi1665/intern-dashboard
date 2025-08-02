<template>
  <div style="padding: 2rem; font-family: sans-serif">
    <h1>🎓 Intern Dashboard</h1>

    <section v-if="dashboard" style="margin-bottom: 2rem;">
      <h2>👤 Name: {{ dashboard.name }}</h2>
      <p>Referral Code: <strong>{{ dashboard.referralCode }}</strong></p>
      <p>Donations Raised: ₹{{ dashboard.donationsRaised }}</p>

      <h3>🏆 Rewards:</h3>
      <ul>
        <li v-for="(reward, index) in dashboard.rewards" :key="index">{{ reward }}</li>
      </ul>
    </section>

    <section v-if="leaderboard.length">
      <h2>📊 Leaderboard</h2>
      <table border="1" cellpadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in leaderboard" :key="index">
            <td>{{ person.name }}</td>
            <td>₹{{ person.donations }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dashboard: null,
      leaderboard: [],
    };
  },
  mounted() {
    axios.get('http://localhost:5000/api/dashboard')
      .then(res => {
        this.dashboard = res.data;
        this.leaderboard = res.data.leaderboard;
      })
      .catch(err => {
        console.error('Error fetching dashboard:', err);
      });
  },
};
</script>
