import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui-pro/dist/js/coreui-utilities'

const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
// }
var monthData = [
'41837.98',
'46693.15',
'46693.15',
'53033.18',
'53033.18',
'61929.83',
'61929.83',
'72781.04',
'72781.04',
'72781.04',
'79284.44',
'81957.14'
]
var monthLabels = [
  '2018-01',
  '2018-02',
  '2018-03',
  '2018-04',
  '2018-05',
  '2018-06',
  '2018-07',
  '2018-08',
  '2018-09',
  '2018-10',
  '2018-11',
  '2018-12',
]
var monthlyDeltas = [
  '4855',
  '4855',
  '6340',
  '6340',
  '8897',
  '8897',
  '10851',
  '10851',
  '6503',
  '6503',
  '2673',
  '2673',
]
data1 = [
  '41837.98',
  '41992.6',
  '42093.57',
  '42184.57',
  '42265.32',
  '42370.25',
  '42480.5',
  '42642.09',
  '42802.46',
  '42867.27',
  '42913.35',
  '42953.1',
  '43079.53',
  '43150.38',
  '43318.15',
  '43358.35',
  '43510.54',
  '43578.84',
  '43610.34',
  '43681.04',
  '43749.59',
  '43886.96',
  '43931.76',
  '44006.61',
  '44045.99',
  '44106.77',
  '44185.27',
  '44233.44',
  '44423.47',
  '44540.84',
  '44618.56',
  '46693.15',
  '46762.49',
  '46835.57',
  '46895.92',
  '47024.25',
  '47099.85',
  '47161.67',
  '47230.9',
  '47278.35',
  '47318.31',
  '47395.61',
  '47518.3',
  '47623.71',
  '47675.06',
  '47731.1',
  '47749.44',
  '47784.02',
  '47849.47',
  '47986.53',
  '48121.23',
  '48162.39',
  '48286.94',
  '48332.83',
  '48378.99',
  '48456.44',
  '48602.79',
  '48652.66',
  '48694.11',
  '48747.8',
  '48855.95',
  '48903.8',
  '53033.18',
  '53073.29',
  '53152.66',
  '53763.5',
  '53866.43',
  '53955.83',
  '54110.93',
  '54193.43',
  '54289.35',
  '54448.38',
  '55118.05',
  '55243.26',
  '55357.34',
  '55428.34',
  '55510.68',
  '55584.73',
  '55625.44',
  '56237.57',
  '56304.17',
  '56372.11',
  '56525.46',
  '56574.34',
  '56616.57',
  '56712.54',
  '57316.88',
  '57349.38',
  '57405.05',
  '57507.48',
  '57609.78',
  '57656.95',
  '57693.71',
  '61929.83',
  '62089.94',
  '62141.06',
  '62178.16',
  '62240.09',
  '62297.05',
  '62350.37',
  '62407.6',
  '62616.43',
  '62672.81',
  '62739.83',
  '62772.64',
  '63390.46',
  '63418.4',
  '63497.1',
  '63746.61',
  '63795.5',
  '63916.06',
  '63988.35',
  '64590.36',
  '64619.2',
  '64675.54',
  '64857.6',
  '65438.96',
  '65484.88',
  '65566.83',
  '66245.0',
  '66301.74',
  '66415.53',
  '66539.07',
  '66618.15',
  '72781.04',
  '72880.1',
  '72884.25',
  '72904.46',
  '72975.5',
  '73039.47',
  '73710.52',
  '73785.68',
  '73909.12',
  '74115.48',
  '74176.95',
  '74239.5',
  '74304.73',
  '74369.02',
  '74419.85',
  '74531.27',
  '74711.26',
  '74784.2',
  '74851.28',
  '74913.41',
  '75634.99',
  '75775.6',
  '75826.74',
  '75926.98',
  '76011.29',
  '76078.61',
  '76136.4',
  '76218.44',
  '76289.7',
  '76362.77',
  '79284.44',
  '79388.9',
  '79493.56',
  '79617.47',
  '79791.78',
  '79942.59',
  '80042.53',
  '80102.61',
  '80164.86',
  '80235.61',
  '80393.0',
  '80493.56',
  '80567.06',
  '80625.01',
  '80707.29',
  '80758.33',
  '80831.53',
  '80962.14',
  '81142.0',
  '81231.8',
  '81277.35',
  '81322.06',
  '81322.06',
  '81322.22',
  '81354.41',
  '81502.09',
  '81627.4',
  '81680.78',
  '81832.16',
  '81872.32',
]
var labels = [
  '2018-01-01',
'2018-01-02',
'2018-01-03',
'2018-01-04',
'2018-01-05',
'2018-01-06',
'2018-01-07',
'2018-01-08',
'2018-01-09',
'2018-01-10',
'2018-01-11',
'2018-01-12',
'2018-01-13',
'2018-01-14',
'2018-01-15',
'2018-01-16',
'2018-01-17',
'2018-01-18',
'2018-01-19',
'2018-01-20',
'2018-01-21',
'2018-01-22',
'2018-01-23',
'2018-01-24',
'2018-01-25',
'2018-01-26',
'2018-01-27',
'2018-01-28',
'2018-01-29',
'2018-01-30',
'2018-01-31',
'2018-03-01',
'2018-03-02',
'2018-03-03',
'2018-03-04',
'2018-03-05',
'2018-03-06',
'2018-03-07',
'2018-03-08',
'2018-03-09',
'2018-03-10',
'2018-03-11',
'2018-03-12',
'2018-03-13',
'2018-03-14',
'2018-03-15',
'2018-03-16',
'2018-03-17',
'2018-03-18',
'2018-03-19',
'2018-03-20',
'2018-03-21',
'2018-03-22',
'2018-03-23',
'2018-03-24',
'2018-03-25',
'2018-03-26',
'2018-03-27',
'2018-03-28',
'2018-03-29',
'2018-03-30',
'2018-03-31',
'2018-05-01',
'2018-05-02',
'2018-05-03',
'2018-05-04',
'2018-05-05',
'2018-05-06',
'2018-05-07',
'2018-05-08',
'2018-05-09',
'2018-05-10',
'2018-05-11',
'2018-05-12',
'2018-05-13',
'2018-05-14',
'2018-05-15',
'2018-05-16',
'2018-05-17',
'2018-05-18',
'2018-05-19',
'2018-05-20',
'2018-05-21',
'2018-05-22',
'2018-05-23',
'2018-05-24',
'2018-05-25',
'2018-05-26',
'2018-05-27',
'2018-05-28',
'2018-05-29',
'2018-05-30',
'2018-05-31',
'2018-07-01',
'2018-07-02',
'2018-07-03',
'2018-07-04',
'2018-07-05',
'2018-07-06',
'2018-07-07',
'2018-07-08',
'2018-07-09',
'2018-07-10',
'2018-07-11',
'2018-07-12',
'2018-07-13',
'2018-07-14',
'2018-07-15',
'2018-07-16',
'2018-07-17',
'2018-07-18',
'2018-07-19',
'2018-07-20',
'2018-07-21',
'2018-07-22',
'2018-07-23',
'2018-07-24',
'2018-07-25',
'2018-07-26',
'2018-07-27',
'2018-07-28',
'2018-07-29',
'2018-07-30',
'2018-07-31',
'2018-09-01',
'2018-09-02',
'2018-09-03',
'2018-09-04',
'2018-09-05',
'2018-09-06',
'2018-09-07',
'2018-09-08',
'2018-09-09',
'2018-09-10',
'2018-09-11',
'2018-09-12',
'2018-09-13',
'2018-09-14',
'2018-09-15',
'2018-09-16',
'2018-09-17',
'2018-09-18',
'2018-09-19',
'2018-09-20',
'2018-09-21',
'2018-09-22',
'2018-09-23',
'2018-09-24',
'2018-09-25',
'2018-09-26',
'2018-09-27',
'2018-09-28',
'2018-09-29',
'2018-09-30',
'2018-11-01',
'2018-11-02',
'2018-11-03',
'2018-11-04',
'2018-11-05',
'2018-11-06',
'2018-11-07',
'2018-11-08',
'2018-11-09',
'2018-11-10',
'2018-11-11',
'2018-11-12',
'2018-11-13',
'2018-11-14',
'2018-11-15',
'2018-11-16',
'2018-11-17',
'2018-11-18',
'2018-11-19',
'2018-11-20',
'2018-11-21',
'2018-11-22',
'2018-11-23',
'2018-11-24',
'2018-11-25',
'2018-11-26',
'2018-11-27',
'2018-11-28',
'2018-11-29',
'2018-11-30',
]

const dayChart = {
  // labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  labels: labels,
  datasets: [
    {
      label: 'Daily',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    }
  ],
};

const dayChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          stepSize: 10000,
          max: 100000,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};
const monthChart = {
  // labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  labels: monthLabels,
  datasets: [
    {
      label: 'Monthly',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: monthData,
    }
  ],
};

const monthChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          stepSize: 10000,
          max: 100000,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};
const deltaChart = {
  // labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  labels: monthLabels,
  datasets: [
    {
      label: 'Monthly Deltas',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: monthlyDeltas,
    }
  ],
};
const deltaChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          stepSize: 1000,
          max: 12000,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};


// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 1,
      mainChart: dayChart,
      mainChartOpts: dayChartOpts,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    if (radioSelected === 1) {
      this.setState({
        radioSelected: radioSelected,
        mainChart: dayChart,
        mainChartOpts: dayChartOpts
      });
    }
    else if (radioSelected === 2) {
      this.setState({
        radioSelected: radioSelected,
        mainChart: monthChart,
        mainChartOpts: monthChartOpts
      });
    }
    else if (radioSelected === 3) {
      this.setState({
        radioSelected: radioSelected,
        mainChart: deltaChart,
        mainChartOpts: deltaChartOpts
      });
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">9.823</div>
                <div>Members online</div>
                <div className="chart-wrapper mt-3" style={{ height: '70px' }}>
                  <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Daily Usage</CardTitle>
                    <div className="small text-muted">2018</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Monthly Deltas</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={this.state.mainChart} options={this.state.mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Visits</div>
                    <strong>29.703 Users (40%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="40" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Unique</div>
                    <strong>24.093 Users (20%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="20" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Pageviews</div>
                    <strong>78.706 Views (60%)</strong>
                    <Progress className="progress-xs mt-2" color="warning" value="60" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">New Users</div>
                    <strong>22.123 Users (80%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="80" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Bounce Rate</div>
                    <strong>Average Rate (40.15%)</strong>
                    <Progress className="progress-xs mt-2" color="primary" value="40" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03 dataBox={() => ({ variant: 'facebook', friends: '89k', feeds: '459' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <Suspense fallback={this.loading()}>
              <Widget03 dataBox={() => ({ variant: 'twitter', followers: '973k', tweets: '1.792' })} >
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                </div>
              </Widget03>
            </Suspense>
          </Col>

        </Row>

      </div>
    );
  }
}

export default Dashboard;
