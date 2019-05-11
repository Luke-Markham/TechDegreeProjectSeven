// close alert ----

const closeAlert = document.querySelector('.close-alert');
const alertBox = closeAlert.parentNode;

closeAlert.addEventListener('click', () => {
  alertBox.style.display = 'none';
});

// charts ----------------------

// main traffic chart----------
const trafficCanvas = document.querySelector('#traffic-chart');
const trafficUl = document.querySelector('.timeline');
const hourlyLi = document.querySelector('.hourly');
const dailyLi = document.querySelector('.daily');
const weeklyLi = document.querySelector('.weekly');
const monthlyLi = document.querySelector('.monthly');

// hourly chart----------
const hourlyDisplayChart = () => {
  const hourlyData = {
    labels: ['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00',
      '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
      '20:00', '21:00', '22:00', '23:00'],
    datasets: [{
      data: [332, 324, 190, 42, 80, 500, 965, 1310, 1621, 2521, 2231, 2000, 3410, 3213, 1500, 1312, 1000, 940, 1300, 2421, 3000, 2313, 900, 821],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }],
  };
  const trafficOptions = {
    aspectRatio: 2.5,
    animation: {

      duration: 750,

    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    legend: {
      display: false,
    },
  };
  const hourlyChart = new Chart(trafficCanvas, {
    type: 'line',
    data: hourlyData,
    options: trafficOptions,
  });
};

// daily chart----------
const dailyDisplayChart = () => {
  const dailyData = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [{
      data: [17231, 15230, 9231, 11231, 9000, 11123, 21802],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }],
  };
  const trafficOptions = {
    aspectRatio: 2.5,
    animation: {

      duration: 750,

    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    legend: {
      display: false,
    },
  };
  const dailyChart = new Chart(trafficCanvas, {
    type: 'line',
    data: dailyData,
    options: trafficOptions,
  });
};

// weekly chart----------
const weeklyDisplayChart = () => {
  const weeklyData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3',
      '4-10'],
    datasets: [{
      data: [123000, 121421, 105232, 163000, 123200, 117343, 94200, 123412],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }],
  };
  const trafficOptions = {
    aspectRatio: 2.5,
    animation: {

      duration: 750,

    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    legend: {
      display: false,
    },
  };
  const weeklyChart = new Chart(trafficCanvas, {
    type: 'line',
    data: weeklyData,
    options: trafficOptions,
  });
};

// monthly chart----------
const monthlyDisplayChart = () => {
  const monthlyData = {
    labels: ['jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      data: ['512313', '453412', '654371', '654891', '543764', '578674', '786987',
        '754321', '654352', '546243', '497453', '567543'],
      backgroundColor: 'rgba(116, 119, 191, .3)',
      borderWidth: 1,
    }],
  };
  const trafficOptions = {
    aspectRatio: 2.5,
    animation: {

      duration: 750,

    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
    legend: {
      display: false,
    },
  };
  const monthlyChart = new Chart(trafficCanvas, {
    type: 'line',
    data: monthlyData,
    options: trafficOptions,
  });
};


// function called below to display a chart (daily by default) upon page load.

dailyDisplayChart();

// display choosen charts upon click ----------

// This function resets li styling after clicking another li

const liReset = () => {
  hourlyLi.style.backgroundColor = '';
  hourlyLi.style.color = '#8f8f8f';
  dailyLi.style.backgroundColor = '';
  dailyLi.style.color = '#8f8f8f';
  weeklyLi.style.backgroundColor = '';
  weeklyLi.style.color = '#8f8f8f';
  monthlyLi.style.backgroundColor = '';
  monthlyLi.style.color = '#8f8f8f';
};


trafficUl.addEventListener('click', (e) => {
  const clickTargetStyle = e.target;
  const clickTarget = e.target.innerText.toLowerCase();
  liReset();
  clickTargetStyle.style.backgroundColor = '#81c98f';
  clickTargetStyle.style.color = 'white';

  if (clickTarget === 'hourly') {
    hourlyDisplayChart();
  } else if (clickTarget === 'daily') {
    dailyDisplayChart();
  } else if (clickTarget === 'weekly') {
    weeklyDisplayChart();
  } else if (clickTarget === 'monthly') {
    monthlyDisplayChart();
  }
});


// settings slider on/off --

const slider1 = document.querySelector('.slider-notifications');
const slider2 = document.querySelector('.slider-privacy');
const slider = document.querySelectorAll('.slider');
const on1 = slider[0].firstElementChild;
const off1 = on1.nextElementSibling;
const on2 = slider[1].firstElementChild;
const off2 = on2.nextElementSibling;

function notificationsChecked() {
  slider1.setAttribute('checked', 'checked');

  if (slider1.checked === true) {
    on1.style.display = 'inline-block';
    off1.style.display = 'none';
  } else {
    on1.style.display = 'none';
    off1.style.display = 'inline-block';
  }
}

function privacyChecked() {
  slider2.setAttribute('checked', 'checked');

  if (slider2.checked === true) {
    on2.style.display = 'inline-block';
    off2.style.display = 'none';
  } else {
    on2.style.display = 'none';
    off2.style.display = 'inline-block';
  }
}
