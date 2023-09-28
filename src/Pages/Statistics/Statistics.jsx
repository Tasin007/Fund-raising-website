import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const donations = [
    // ... your API data ...
];

// Calculate the total donations
const totalDonations = donations.reduce((acc, donation) => acc + parseFloat(donation.price.replace('$', '')), 0);

// Calculate the donations for the "Health" category
const healthDonations = donations.filter(donation => donation.category === "Health")
                                  .reduce((acc, donation) => acc + parseFloat(donation.price.replace('$', '')), 0);

// Prepare the data for the pie chart
const data = [
  { name: 'Health Donations', value: healthDonations },
  { name: 'Other Donations', value: totalDonations - healthDonations }
];

const COLORS = ['#0088FE', '#FF8042'];

const StatisticsPage = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatisticsPage;
