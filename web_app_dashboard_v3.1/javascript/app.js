// notification box
const bellNotification = document.querySelector('.notification-hover');
const notifications = document.querySelector('.notifications');
const closeNotifications = document.querySelector('.close-notifications');
const notificationMarker = document.querySelector('.notification-marker');

bellNotification.addEventListener('click', () => {
  notifications.style.display = 'flex';
});

closeNotifications.addEventListener('click', () => {
  notifications.style.display = 'none';
  notificationMarker.style.display = 'none';
});

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
      data: [332, 324, 190, 42, 80, 500, 965, 1310, 1621, 2521, 2231, 2000, 3410, 3213, 1500,
        1312, 1000, 940, 1300, 2421, 3000, 2313, 900, 821],
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
  hourlyLi.style.backgroundColor = 'transparent';
  hourlyLi.style.color = '#8f8f8f';
  dailyLi.style.backgroundColor = 'transparent';
  dailyLi.style.color = '#8f8f8f';
  weeklyLi.style.backgroundColor = 'transparent';
  weeklyLi.style.color = '#8f8f8f';
  monthlyLi.style.backgroundColor = 'transparent';
  monthlyLi.style.color = '#8f8f8f';
};


trafficUl.addEventListener('click', (e) => {
  const clickTargetStyle = e.target;
  const clickTarget = e.target.innerText.toLowerCase();
  liReset();
  clickTargetStyle.style.color = 'white';
  clickTargetStyle.style.backgroundColor = '#81c98f';


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


// daily traffic bar chart ----

const dailyTrafficCanvas = document.querySelector('#daily-chart');
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
const dailyTrafficChart = new Chart(dailyTrafficCanvas, {
  type: 'bar',
  data: dailyData,
  options: trafficOptions,
});

// mobile donut chart ----
const mobileTrafficCanvas = document.querySelector('#mobile-chart');
const mobileData = {
  labels: ['IOS', 'Android', 'Other'],
  datasets: [{
    label: '# of Users',
    data: [9045, 4757, 1001],
    borderWidth: 1,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8',
    ],
  }],
};
const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold',
    },
  },
};
const mobileChart = new Chart(mobileTrafficCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions,
});

// messages --

const sendMessageBtn = document.querySelector('.send-message');
const messageArea = document.querySelector('.message-area');
const userSearch = document.querySelector('.user-search');
const membersList = document.querySelector('.members-list');


sendMessageBtn.addEventListener('click', () => {
  const messageAreaValue = document.querySelector('.message-area').value;
  const userSearchValue = document.querySelector('.user-search').value;

  if (messageAreaValue === '' && userSearchValue === '') {
    document.querySelector('.message-area').value = 'Please enter a valid message before sending.';
    document.querySelector('.user-search').value = 'Please enter a recipient before sending.';
    messageArea.style.color = 'red';
    userSearch.style.color = 'red';
  } else if (messageAreaValue === '') {
    document.querySelector('.message-area').value = 'Please enter a valid message before sending.';
    messageArea.style.color = 'red';
  } else if (userSearchValue === '') {
    document.querySelector('.user-search').value = 'Please enter a recipient before sending.';
    userSearch.style.color = 'red';
  } else if (userSearchValue === 'Please enter a recipient before sending.'
  && messageAreaValue === 'Please enter a valid message before sending.') {
    null;
  } else if (userSearchValue === 'Please enter a recipient before sending.'
  || messageAreaValue === 'Please enter a valid message before sending.') {
    null;
  } else {
    document.querySelector('.message-area').value = `Message successfully sent to ${userSearchValue}`;
    messageArea.style.color = '#81c98f';
  }

  // for (let i = 0; i < membersList.options.length; i++) {
  //   const memberText = membersList.options[i].innerText;

  //   if (userSearchValue.toLowerCase() !== memberText.toLowerCase()) {
  //     document.querySelector('.user-search').value = 'Please enter a recipient before sending.';
  //     userSearch.style.color = 'red';
  //     console.log('a');
  //   } else if (userSearchValue.toLowerCase() === memberText.toLowerCase()) {
  //     document.querySelector('.user-search').value = userSearchValue;
  //     console.log('b');
  //   }
  // }
});


// Failure/success message will be cleared.
// if field was not empty and user clicked away and comes back value wil remain for editing.
userSearch.addEventListener('click', () => {
  if (userSearch.value === 'Please enter a recipient before sending.') {
    document.querySelector('.user-search').value = '';
    userSearch.style.color = 'black';
  } else {
  // leaves the field untouched for editing
  }
});

messageArea.addEventListener('click', () => {
  const userSearchValue = document.querySelector('.user-search').value;
  if (messageArea.value === 'Please enter a valid message before sending.' || messageArea.value === `Message successfully sent to ${userSearchValue}`) {
    document.querySelector('.message-area').value = '';
    messageArea.style.color = 'black';
  } else {
  // leaves the field untouched for editing
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

// local storage --------------------


// Email notification storage --

const sliderSettings1 = document.querySelector('.slider-storage-1');
sliderSettings1.addEventListener('mouseout', () => {
  if (sliderSettings1.innerText === 'OFF') {
    localStorage.setItem('notifications', 'off');
  } else if (sliderSettings1.innerText === 'ON') {
    localStorage.setItem('notifications', 'on');
  }
});
if (localStorage.notifications === 'off') {

} else if (localStorage.notifications === 'on') {
  notificationsChecked();
}

// Privacy storage --
const sliderSettings2 = document.querySelector('.slider-storage-2');
sliderSettings2.addEventListener('mouseout', () => {
  if (sliderSettings2.innerText === 'OFF') {
    localStorage.setItem('privacy', 'off');
  } else if (sliderSettings2.innerText === 'ON') {
    localStorage.setItem('privacy', 'on');
  }
});

if (localStorage.privacy === 'off') {

} else if (localStorage.privacy === 'on') {
  privacyChecked();
}

//  timezone storage --
const timezoneInput = document.querySelector('#timezone');

timezoneInput.addEventListener('change', () => {
  const timezoneValue = document.querySelector('#timezone').value;
  localStorage.setItem('selectedTimezone', timezoneValue);
});

const previouslySelected = localStorage.getItem('selectedTimezone');

if (previouslySelected === null) {

} else {
  timezoneInput.value = previouslySelected;
}

// cancel settings ----------------------------
const cancelBtn = document.querySelector('#cancel');


cancelBtn.addEventListener('click', () => {
  localStorage.clear();
  on1.style.display = 'none';
  off1.style.display = 'inline-block';
  slider1.removeAttribute('checked', 'checked');
  on2.style.display = 'none';
  off2.style.display = 'inline-block';
  slider2.removeAttribute('checked', 'checked');
});


// THE BELOW CODE CREATES GIVES THE SAVE BUTTON FUNCTIONALITY
// REPLACE ABOVE CODE WITH BELOW IF WANTING THIS FUNCTION


// const saveBtn = document.querySelector('#save');
// const sliderSettings1 = document.querySelector('.slider-storage-1');
// const sliderSettings2 = document.querySelector('.slider-storage-2');
// const timezoneInput = document.querySelector('#timezone');
// const previouslySelected = localStorage.getItem('selectedTimezone');

// saveBtn.addEventListener('click', () => {
//   // slider1
//   if (sliderSettings1.innerText === 'OFF') {
//     localStorage.setItem('notifications', 'off');
//   } else if (sliderSettings1.innerText === 'ON') {
//     localStorage.setItem('notifications', 'on');
//   }
//   // slider2
//   if (sliderSettings2.innerText === 'OFF') {
//     localStorage.setItem('privacy', 'off');
//   } else if (sliderSettings2.innerText === 'ON') {
//     localStorage.setItem('privacy', 'on');
//   }
//   //  timezone
//   const timezoneValue = document.querySelector('#timezone').value;
//   localStorage.setItem('selectedTimezone', timezoneValue);
// });


// if (localStorage.notifications === 'off') {

// } else if (localStorage.notifications === 'on') {
//   notificationsChecked();
// }

// if (localStorage.privacy === 'off') {

// } else if (localStorage.privacy === 'on') {
//   privacyChecked();
// }

// if (previouslySelected === null) {

// } else {
//   timezoneInput.value = previouslySelected;
// }


// // cancel/reset settings
// const cancelBtn = document.querySelector('#cancel');

// cancelBtn.addEventListener('click', () => {
//   localStorage.clear();
//   on1.style.display = 'none';
//   off1.style.display = 'inline-block';
//   slider1.removeAttribute('checked', 'checked');
//   on2.style.display = 'none';
//   off2.style.display = 'inline-block';
//   slider2.removeAttribute('checked', 'checked');
// });
