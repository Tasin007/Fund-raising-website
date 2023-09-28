import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const Statistics = () => {
  const [cards, setCards] = useState([]);
  const donated = JSON.parse(localStorage.getItem('donation'));

  useEffect(() => {
    fetch('/Datas.json') // Assuming this is the correct path to your data
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const totalDonations = cards.length;
  const yourDonations = donated ? donated.length : 0;

  const yourDonationPercentage = (yourDonations / totalDonations) * 100;
  const totalDonationPercentage = ((totalDonations - yourDonations) / totalDonations) * 100;

  const data = [
    ['Donation Type', 'Percentage'],
    ['Your Donation', yourDonationPercentage],
    ['Total Donation', totalDonationPercentage],
  ];

  return (
    <div>
      <Chart chartType="PieChart" data={data} width={'100%'} height={'400px'} />
    </div>
  );
};

export default Statistics;
