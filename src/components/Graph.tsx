import { Line } from 'react-chartjs-2';

const Graph = () => {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '室温',
                data: [12, 19, 3, 5, 2, 3],
                lineTension: 0,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.7)',
                yAxisID: 'y-axis-1',
            },
            {
                label: '湿度',
                data: [1, 2, 1, 1, 2, 5],
                lineTension: 0,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.7)',
                yAxisID: 'y-axis-2',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
            ],
        },
    };

    return (
        <Line data={data} options={options} />
    );
};

export default Graph;
