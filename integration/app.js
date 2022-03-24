console.log('Hello World');

// API KEY = 4de61017cdc8aa74adecb93f704a7ca6ad926868f7078f8ee961b0960a3a9cc9

const btcData = async() => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=100&api_key=4de61017cdc8aa74adecb93f704a7ca6ad926868f7078f8ee961b0960a3a9cc9');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(key => key.time)
    const prices = data.map(key => key.high)
    return {
        times,
        prices
    }
}


const ethData = async() => {
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histominute?fsym=ETH&tsym=USD&limit=100&api_key=4de61017cdc8aa74adecb93f704a7ca6ad926868f7078f8ee961b0960a3a9cc9');
    const json = await response.json();
    const data = json.Data.Data
    const times = data.map(key => key.time)
    const prices = data.map(key => key.high)
    return {
        times,
        prices
    }
}
let BTCChart;

async function createBTCChart() {
    let { times, prices } = await btcData();
    let btcChart = document.getElementById('btcChart').getContext('2d');
    let gradient = btcChart.createLinearGradient(0, 0, 0, 400)

    gradient.addColorStop(0, 'rgba(247, 147, 26, .5)')
    BTCChart = new Chart(btcChart, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: '$',
                data: prices,
                backgroundColor: gradient,
                borderColor: '#f7931e',
                borderWidth: 3,
                borderJoinStyle: 'round',
                pointHitRadius: 10,
                borderCapStyle: 'round',
                pointRadius: 0,
                lineTension: .2,
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'Bitcoin Price'

            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    display: false,
                    gridLines: {}
                }],
                xAxes: [{
                    display: false,
                    gridLines: {}
                }]
            },
        }
    });
}

createBTCChart();
// const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
// ];


// const data = {
//     labels: labels,
//     datasets: [{
//         label: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [0, 10, 5, 2, 20, 30, 45],
//     }]
// };

// const config = {
//     type: 'line',
//     data: data,
//     options: {}
// };

// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
// );