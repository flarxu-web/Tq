const monthNames = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const sentimentColors = {
  Positive: '#16a34a',
  Neutral: '#f59e0b',
  Negative: '#dc2626',
};

const categoryPalette = {
  Punctuality: '#2563eb',
  Cleanliness: '#0891b2',
  'Driver Courtesy': '#a855f7',
  Accessibility: '#10b981',
  Safety: '#ef4444',
  Comfort: '#f97316',
  Information: '#0ea5e9',
};

const feedbackData = [
  {
    id: 101,
    submittedAt: '2024-03-14T08:24:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'Mirdif',
    originCoords: [25.2139, 55.4179],
    communityDestination: 'Downtown Dubai',
    destCoords: [25.2048, 55.2708],
    route: 'R25',
    stop: 'Dubai Mall Metro Bus Stop',
    category: 'Punctuality',
    sentiment: 'Negative',
    comment: 'Bus 25 was 20 minutes late causing me to miss a meeting.',
    language: 'English',
    deviceId: 'DEV-1001',
    personOfDetermination: false,
  },
  {
    id: 102,
    submittedAt: '2024-03-15T17:45:00Z',
    channel: 'Mobile App',
    purpose: 'Leisure',
    communityOrigin: 'Dubai Marina',
    originCoords: [25.078, 55.139],
    communityDestination: 'Jumeirah',
    destCoords: [25.2101, 55.2461],
    route: 'X28',
    stop: 'Jumeirah Beach Front',
    category: 'Comfort',
    sentiment: 'Positive',
    comment: 'Loved the new double-deckers on X28, very comfortable ride.',
    language: 'English',
    deviceId: 'DEV-1040',
    personOfDetermination: false,
  },
  {
    id: 103,
    submittedAt: '2024-04-02T06:15:00Z',
    channel: 'WhatsApp',
    purpose: 'Work',
    communityOrigin: 'Deira',
    originCoords: [25.2712, 55.3075],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: 'C14',
    stop: 'Business Bay Metro',
    category: 'Punctuality',
    sentiment: 'Negative',
    comment: 'C14 skipped the Business Bay stop twice this week.',
    language: 'Arabic',
    deviceId: 'DEV-1123',
    personOfDetermination: false,
  },
  {
    id: 104,
    submittedAt: '2024-04-09T11:08:00Z',
    channel: 'Web Portal',
    purpose: 'Education',
    communityOrigin: 'Academic City',
    originCoords: [25.118, 55.395],
    communityDestination: 'Downtown Dubai',
    destCoords: [25.2048, 55.2708],
    route: '365',
    stop: 'Dubai Mall Metro Bus Stop',
    category: 'Information',
    sentiment: 'Neutral',
    comment: 'Please add live occupancy data for the 365 morning trips.',
    language: 'English',
    deviceId: 'DEV-1400',
    personOfDetermination: false,
  },
  {
    id: 105,
    submittedAt: '2024-02-22T19:32:00Z',
    channel: 'Service Kiosk',
    purpose: 'Leisure',
    communityOrigin: 'Bur Dubai',
    originCoords: [25.252, 55.296],
    communityDestination: 'Dubai Marina',
    destCoords: [25.078, 55.139],
    route: 'F55',
    stop: 'Marina Promenade',
    category: 'Safety',
    sentiment: 'Neutral',
    comment: 'Crowded evening services make it hard to move with stroller.',
    language: 'Hindi',
    deviceId: 'DEV-1220',
    personOfDetermination: false,
  },
  {
    id: 106,
    submittedAt: '2024-01-18T07:55:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'International City',
    originCoords: [25.162, 55.417],
    communityDestination: 'Deira',
    destCoords: [25.2712, 55.3075],
    route: '55',
    stop: 'Deira City Centre',
    category: 'Cleanliness',
    sentiment: 'Negative',
    comment: 'Bus 55 needs more frequent cleaning in the mornings.',
    language: 'Urdu',
    deviceId: 'DEV-1099',
    personOfDetermination: false,
  },
  {
    id: 107,
    submittedAt: '2023-12-11T09:20:00Z',
    channel: 'Mobile App',
    purpose: 'Healthcare',
    communityOrigin: 'Mirdif',
    originCoords: [25.2139, 55.4179],
    communityDestination: 'Deira',
    destCoords: [25.2712, 55.3075],
    route: 'E16',
    stop: 'Al Etihad Health Center',
    category: 'Accessibility',
    sentiment: 'Positive',
    comment: 'Driver helped my mother board with the wheelchair ramp.',
    language: 'Arabic',
    deviceId: 'DEV-1005',
    personOfDetermination: true,
  },
  {
    id: 108,
    submittedAt: '2023-11-28T16:42:00Z',
    channel: 'WhatsApp',
    purpose: 'Work',
    communityOrigin: 'Al Qusais',
    originCoords: [25.2711, 55.372],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: 'X92',
    stop: 'Business Bay Metro',
    category: 'Comfort',
    sentiment: 'Negative',
    comment: 'Air conditioning on X92 is weak during the afternoon peak.',
    language: 'English',
    deviceId: 'DEV-1172',
    personOfDetermination: false,
  },
  {
    id: 109,
    submittedAt: '2023-10-05T12:05:00Z',
    channel: 'Web Portal',
    purpose: 'Tourism',
    communityOrigin: 'Downtown Dubai',
    originCoords: [25.2048, 55.2708],
    communityDestination: 'Jumeirah',
    destCoords: [25.2101, 55.2461],
    route: '81',
    stop: 'Jumeirah Archaeological Site',
    category: 'Information',
    sentiment: 'Neutral',
    comment: 'Could not find route 81 timings in Spanish.',
    language: 'Spanish',
    deviceId: 'DEV-1510',
    personOfDetermination: false,
  },
  {
    id: 110,
    submittedAt: '2024-05-03T18:55:00Z',
    channel: 'Mobile App',
    purpose: 'Leisure',
    communityOrigin: 'JLT',
    originCoords: [25.072, 55.139],
    communityDestination: 'Dubai Marina',
    destCoords: [25.078, 55.139],
    route: '8',
    stop: 'Dubai Marina Mall',
    category: 'Driver Courtesy',
    sentiment: 'Positive',
    comment: 'Driver waited for a family running toward the stop—thank you!',
    language: 'English',
    deviceId: 'DEV-1711',
    personOfDetermination: false,
  },
  {
    id: 111,
    submittedAt: '2024-05-09T07:22:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'Al Barsha',
    originCoords: [25.098, 55.204],
    communityDestination: 'Downtown Dubai',
    destCoords: [25.2048, 55.2708],
    route: 'F13',
    stop: 'Burj Khalifa/Dubai Mall',
    category: 'Punctuality',
    sentiment: 'Positive',
    comment: 'Early morning F13 services are consistently on time.',
    language: 'English',
    deviceId: 'DEV-1990',
    personOfDetermination: false,
  },
  {
    id: 112,
    submittedAt: '2024-01-07T14:40:00Z',
    channel: 'Web Portal',
    purpose: 'Work',
    communityOrigin: 'Bur Dubai',
    originCoords: [25.252, 55.296],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: '15',
    stop: 'Business Bay Seaside',
    category: 'Comfort',
    sentiment: 'Negative',
    comment: 'Need more seats on afternoon route 15 buses.',
    language: 'Filipino',
    deviceId: 'DEV-1288',
    personOfDetermination: false,
  },
  {
    id: 113,
    submittedAt: '2023-09-21T06:28:00Z',
    channel: 'Service Kiosk',
    purpose: 'Education',
    communityOrigin: 'Academic City',
    originCoords: [25.118, 55.395],
    communityDestination: 'International City',
    destCoords: [25.162, 55.417],
    route: '365',
    stop: 'International City France Cluster',
    category: 'Punctuality',
    sentiment: 'Positive',
    comment: '365 morning service improved a lot this semester.',
    language: 'English',
    deviceId: 'DEV-1400',
    personOfDetermination: false,
  },
  {
    id: 114,
    submittedAt: '2024-04-17T20:18:00Z',
    channel: 'Mobile App',
    purpose: 'Leisure',
    communityOrigin: 'Dubai Marina',
    originCoords: [25.078, 55.139],
    communityDestination: 'Downtown Dubai',
    destCoords: [25.2048, 55.2708],
    route: 'E101',
    stop: 'Dubai Mall Metro Bus Stop',
    category: 'Safety',
    sentiment: 'Negative',
    comment: 'Standing passengers without support handles on E101 late trips.',
    language: 'English',
    deviceId: 'DEV-1040',
    personOfDetermination: false,
  },
  {
    id: 115,
    submittedAt: '2024-02-12T05:38:00Z',
    channel: 'WhatsApp',
    purpose: 'Work',
    communityOrigin: 'Mirdif',
    originCoords: [25.2139, 55.4179],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: 'F10',
    stop: 'Business Bay Metro',
    category: 'Punctuality',
    sentiment: 'Negative',
    comment: 'Requesting additional F10 buses between 7-8am.',
    language: 'Hindi',
    deviceId: 'DEV-1333',
    personOfDetermination: false,
  },
  {
    id: 116,
    submittedAt: '2024-02-18T09:12:00Z',
    channel: 'Mobile App',
    purpose: 'Shopping',
    communityOrigin: 'Deira',
    originCoords: [25.2712, 55.3075],
    communityDestination: 'Mirdif',
    destCoords: [25.2139, 55.4179],
    route: 'E201',
    stop: 'Mirdif City Center',
    category: 'Driver Courtesy',
    sentiment: 'Positive',
    comment: 'Driver assisted with bags at Mirdif City Center stop.',
    language: 'English',
    deviceId: 'DEV-1150',
    personOfDetermination: false,
  },
  {
    id: 117,
    submittedAt: '2024-03-05T21:10:00Z',
    channel: 'WhatsApp',
    purpose: 'Leisure',
    communityOrigin: 'Jumeirah',
    originCoords: [25.2101, 55.2461],
    communityDestination: 'Dubai Marina',
    destCoords: [25.078, 55.139],
    route: 'F55A',
    stop: 'Dubai Marina Mall',
    category: 'Cleanliness',
    sentiment: 'Negative',
    comment: 'Bus floors were sticky on the late F55A run.',
    language: 'English',
    deviceId: 'DEV-1415',
    personOfDetermination: false,
  },
  {
    id: 118,
    submittedAt: '2024-01-26T08:05:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'Al Qusais',
    originCoords: [25.2711, 55.372],
    communityDestination: 'Academic City',
    destCoords: [25.118, 55.395],
    route: '367',
    stop: 'Academic City Terminus',
    category: 'Punctuality',
    sentiment: 'Neutral',
    comment: '367 is usually on time but gets crowded during exams.',
    language: 'Urdu',
    deviceId: 'DEV-1509',
    personOfDetermination: false,
  },
  {
    id: 119,
    submittedAt: '2023-12-30T13:55:00Z',
    channel: 'Web Portal',
    purpose: 'Shopping',
    communityOrigin: 'Downtown Dubai',
    originCoords: [25.2048, 55.2708],
    communityDestination: 'Mirdif',
    destCoords: [25.2139, 55.4179],
    route: 'F60',
    stop: 'Mirdif City Center',
    category: 'Information',
    sentiment: 'Positive',
    comment: 'Route info screens were accurate during holiday rush.',
    language: 'English',
    deviceId: 'DEV-1510',
    personOfDetermination: false,
  },
  {
    id: 120,
    submittedAt: '2023-11-10T10:44:00Z',
    channel: 'Service Kiosk',
    purpose: 'Healthcare',
    communityOrigin: 'Deira',
    originCoords: [25.2712, 55.3075],
    communityDestination: 'Al Qusais',
    destCoords: [25.2711, 55.372],
    route: '33',
    stop: 'Al Qusais Bus Station',
    category: 'Accessibility',
    sentiment: 'Positive',
    comment: 'Lowered-floor bus on route 33 really helps with mobility.',
    language: 'Arabic',
    deviceId: 'DEV-1123',
    personOfDetermination: true,
  },
  {
    id: 121,
    submittedAt: '2024-05-12T07:05:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'Mirdif',
    originCoords: [25.2139, 55.4179],
    communityDestination: 'Downtown Dubai',
    destCoords: [25.2048, 55.2708],
    route: 'F10',
    stop: 'Dubai Mall Metro Bus Stop',
    category: 'Punctuality',
    sentiment: 'Neutral',
    comment: '',
    language: 'English',
    deviceId: 'DEV-1333',
    personOfDetermination: false,
  },
  {
    id: 122,
    submittedAt: '2024-04-28T15:40:00Z',
    channel: 'WhatsApp',
    purpose: 'Shopping',
    communityOrigin: 'Deira',
    originCoords: [25.2712, 55.3075],
    communityDestination: 'Al Barsha',
    destCoords: [25.098, 55.204],
    route: '32C',
    stop: 'Mall of the Emirates',
    category: 'Cleanliness',
    sentiment: 'Positive',
    comment: 'Mall of the Emirates stop area was spotless yesterday.',
    language: 'Filipino',
    deviceId: 'DEV-1725',
    personOfDetermination: false,
  },
  {
    id: 123,
    submittedAt: '2023-10-18T18:28:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'JLT',
    originCoords: [25.072, 55.139],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: 'F31',
    stop: 'Business Bay Metro',
    category: 'Comfort',
    sentiment: 'Negative',
    comment: 'Need more evening buses on F31 to Business Bay.',
    language: 'English',
    deviceId: 'DEV-1711',
    personOfDetermination: false,
  },
  {
    id: 124,
    submittedAt: '2024-03-27T06:48:00Z',
    channel: 'Web Portal',
    purpose: 'Work',
    communityOrigin: 'International City',
    originCoords: [25.162, 55.417],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: 'X23',
    stop: 'Business Bay Metro',
    category: 'Punctuality',
    sentiment: 'Positive',
    comment: 'X23 express option is saving me 15 minutes daily.',
    language: 'English',
    deviceId: 'DEV-1890',
    personOfDetermination: false,
  },
  {
    id: 125,
    submittedAt: '2024-04-05T13:30:00Z',
    channel: 'Mobile App',
    purpose: 'Education',
    communityOrigin: 'Academic City',
    originCoords: [25.118, 55.395],
    communityDestination: 'Al Barsha',
    destCoords: [25.098, 55.204],
    route: 'F29',
    stop: 'Mall of the Emirates',
    category: 'Information',
    sentiment: 'Positive',
    comment: 'In-app notifications for F29 delays are very helpful.',
    language: 'English',
    deviceId: 'DEV-1400',
    personOfDetermination: false,
  },
  {
    id: 126,
    submittedAt: '2024-02-04T08:18:00Z',
    channel: 'WhatsApp',
    purpose: 'Work',
    communityOrigin: 'Downtown Dubai',
    originCoords: [25.2048, 55.2708],
    communityDestination: 'Business Bay',
    destCoords: [25.185, 55.2602],
    route: 'F13',
    stop: 'Business Bay Metro',
    category: 'Punctuality',
    sentiment: 'Negative',
    comment: 'F13 skipped our stop twice this month already.',
    language: 'Hindi',
    deviceId: 'DEV-1990',
    personOfDetermination: false,
  },
  {
    id: 127,
    submittedAt: '2024-05-16T09:54:00Z',
    channel: 'Mobile App',
    purpose: 'Healthcare',
    communityOrigin: 'Al Barsha',
    originCoords: [25.098, 55.204],
    communityDestination: 'Bur Dubai',
    destCoords: [25.252, 55.296],
    route: '10',
    stop: 'BurJuman Hub',
    category: 'Accessibility',
    sentiment: 'Positive',
    comment: 'Priority seats clearly marked and respected on route 10.',
    language: 'English',
    deviceId: 'DEV-1901',
    personOfDetermination: true,
  },
  {
    id: 128,
    submittedAt: '2024-03-19T07:44:00Z',
    channel: 'Mobile App',
    purpose: 'Work',
    communityOrigin: 'Deira',
    originCoords: [25.2712, 55.3075],
    communityDestination: 'Downtown Dubai',
    destCoords: [25.2048, 55.2708],
    route: '27',
    stop: 'Dubai Mall Metro Bus Stop',
    category: 'Punctuality',
    sentiment: 'Negative',
    comment: 'Route 27 often reaches Dubai Mall after 9:05am.',
    language: 'English',
    deviceId: 'DEV-1150',
    personOfDetermination: false,
  },
];

feedbackData.forEach((item) => {
  const dt = new Date(item.submittedAt);
  item.year = dt.getFullYear();
  item.month = dt.getMonth() + 1;
  item.monthLabel = `${monthNames[item.month]} ${item.year}`;
  item.monthKey = `${item.year}-${String(item.month).padStart(2, '0')}`;
  item.hasComment = Boolean(item.comment && item.comment.trim().length > 0);
});

const allCategories = Array.from(new Set(feedbackData.map((d) => d.category))).sort();
const allSentiments = ['Positive', 'Neutral', 'Negative'];

const state = {
  channel: 'All',
  purpose: 'All',
  year: 'All',
  month: 'All',
  community: 'All',
  route: '',
  stop: '',
  category: 'All',
  sentiment: 'All',
  device: '',
  communityView: 'origin',
  spatialBounds: null,
};

const charts = {};
let communityMap;
let communityLayer;
let scatterMap;
let scatterLayer;
let defaultScatterBounds;
let defaultCommunityBounds;

function init() {
  initTabs();
  initFilters();
  initCharts();
  initMaps();
  applyFilters();
}

function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      const panels = document.querySelectorAll('.tab-panel');
      panels.forEach((panel) => {
        panel.classList.toggle('active', panel.id === tab.dataset.tab);
      });
    });
  });
}

function initFilters() {
  populateSelect('channel-filter', uniqueValues(feedbackData, (d) => d.channel));
  populateSelect('purpose-filter', uniqueValues(feedbackData, (d) => d.purpose));
  populateSelect('year-filter', uniqueValues(feedbackData, (d) => d.year).sort((a, b) => b - a));
  populateSelect('month-filter', uniqueValues(feedbackData, (d) => d.month).sort((a, b) => a - b), (value) => monthNames[value]);
  const communities = uniqueValues(feedbackData, (d) => d.communityOrigin)
    .concat(uniqueValues(feedbackData, (d) => d.communityDestination))
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();
  populateSelect('community-filter', communities);
  populateSelect('category-filter', allCategories);
  populateSelect('sentiment-filter', allSentiments);

  const channelSelect = document.getElementById('channel-filter');
  const purposeSelect = document.getElementById('purpose-filter');
  const yearSelect = document.getElementById('year-filter');
  const monthSelect = document.getElementById('month-filter');
  const communitySelect = document.getElementById('community-filter');
  const categorySelect = document.getElementById('category-filter');
  const sentimentSelect = document.getElementById('sentiment-filter');
  const routeInput = document.getElementById('route-filter');
  const stopInput = document.getElementById('stop-filter');
  const deviceInput = document.getElementById('device-filter');

  channelSelect.addEventListener('change', (event) => {
    state.channel = event.target.value;
    applyFilters();
  });
  purposeSelect.addEventListener('change', (event) => {
    state.purpose = event.target.value;
    applyFilters();
  });
  yearSelect.addEventListener('change', (event) => {
    state.year = event.target.value;
    applyFilters();
  });
  monthSelect.addEventListener('change', (event) => {
    state.month = event.target.value;
    applyFilters();
  });
  communitySelect.addEventListener('change', (event) => {
    state.community = event.target.value;
    applyFilters();
  });
  categorySelect.addEventListener('change', (event) => {
    state.category = event.target.value;
    applyFilters();
  });
  sentimentSelect.addEventListener('change', (event) => {
    state.sentiment = event.target.value;
    applyFilters();
  });
  routeInput.addEventListener('input', (event) => {
    state.route = event.target.value.trim();
    applyFilters();
  });
  stopInput.addEventListener('input', (event) => {
    state.stop = event.target.value.trim();
    applyFilters();
  });
  deviceInput.addEventListener('input', (event) => {
    state.device = event.target.value.trim();
    applyFilters();
  });

  const clearButton = document.getElementById('clear-filters');
  clearButton.addEventListener('click', () => {
    state.channel = 'All';
    state.purpose = 'All';
    state.year = 'All';
    state.month = 'All';
    state.community = 'All';
    state.route = '';
    state.stop = '';
    state.category = 'All';
    state.sentiment = 'All';
    state.device = '';
    state.spatialBounds = null;
    channelSelect.value = 'All';
    purposeSelect.value = 'All';
    yearSelect.value = 'All';
    monthSelect.value = 'All';
    communitySelect.value = 'All';
    categorySelect.value = 'All';
    sentimentSelect.value = 'All';
    routeInput.value = '';
    stopInput.value = '';
    deviceInput.value = '';
    applyFilters();
    resetScatterView();
  });

  const communityViewRadios = document.querySelectorAll('input[name="community-view"]');
  communityViewRadios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      state.communityView = event.target.value;
      updateCommunityMap(getFilteredData());
    });
  });
}

function populateSelect(id, values, labelFormatter) {
  const select = document.getElementById(id);
  if (!select) return;
  select.innerHTML = '';
  const allOption = document.createElement('option');
  allOption.value = 'All';
  allOption.textContent = 'All';
  select.appendChild(allOption);
  values.forEach((value) => {
    if (value === undefined || value === null || value === '') return;
    const option = document.createElement('option');
    option.value = value;
    option.textContent = labelFormatter ? labelFormatter(value) : value;
    select.appendChild(option);
  });
  select.value = 'All';
}

function uniqueValues(list, accessor) {
  return Array.from(new Set(list.map(accessor))).filter(Boolean);
}

function initCharts() {
  const gaugePlugin = {
    id: 'gaugeLabel',
    afterDraw(chart, args, options) {
      const { ctx, chartArea, data } = chart;
      if (!data.datasets.length) return;
      const value = options.value ?? 0;
      ctx.save();
      ctx.font = '700 28px "Inter"';
      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = (chartArea.left + chartArea.right) / 2;
      const arc = chart.getDatasetMeta(0)?.data?.[0];
      const centerY = arc ? arc.y : (chartArea.top + chartArea.bottom) / 2;
      ctx.fillText(`${Math.round(value)}%`, centerX, centerY);
      ctx.font = '500 14px "Inter"';
      ctx.fillStyle = '#64748b';
      ctx.fillText('positivity', centerX, centerY + 26);
      ctx.restore();
    },
  };

  charts.happiness = new Chart(document.getElementById('happiness-meter'), {
    type: 'doughnut',
    data: {
      labels: ['Satisfied', 'Remaining'],
      datasets: [
        {
          data: [0, 100],
          backgroundColor: ['#38bdf8', '#e2e8f0'],
          borderWidth: 0,
          cutout: '75%',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        gaugeLabel: { value: 0 },
      },
      circumference: 180,
      rotation: -90,
    },
    plugins: [gaugePlugin],
  });

  charts.sentiment = new Chart(document.getElementById('sentiment-chart'), {
    type: 'doughnut',
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          borderWidth: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: { position: 'bottom' },
      },
    },
  });

  charts.categories = new Chart(document.getElementById('categorisation-chart'), {
    type: 'bar',
    data: {
      labels: [],
      datasets: allCategories.map((category) => ({
        label: category,
        data: [],
        backgroundColor: categoryPalette[category] || '#94a3b8',
        stack: 'categories',
        borderRadius: 6,
      })),
    },
    options: {
      responsive: true,
      scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true },
      },
      plugins: {
        legend: { position: 'bottom' },
      },
    },
  });

  charts.pod = new Chart(document.getElementById('pod-chart'), {
    type: 'doughnut',
    data: {
      labels: ['People of Determination', 'Other riders'],
      datasets: [
        {
          data: [0, 0],
          backgroundColor: ['#6366f1', '#e2e8f0'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: { position: 'bottom' },
      },
    },
  });

  charts.routeSentiment = createStackedChart('route-sentiment-chart');
  charts.routeCategory = createCategoryStackChart('route-category-chart');
  charts.locationSentiment = createStackedChart('location-sentiment-chart');
  charts.locationCategory = createCategoryStackChart('location-category-chart');
  charts.stopSentiment = createStackedChart('stop-sentiment-chart');
  charts.stopCategory = createCategoryStackChart('stop-category-chart');

  attachChartClicks();
}

function createStackedChart(id) {
  return new Chart(document.getElementById(id), {
    type: 'bar',
    data: {
      labels: [],
      datasets: ['Positive', 'Neutral', 'Negative'].map((sentiment) => ({
        label: sentiment,
        data: [],
        backgroundColor: sentimentColors[sentiment],
        stack: 'stack',
        borderRadius: 8,
      })),
    },
    options: {
      responsive: true,
      scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true },
      },
      plugins: {
        legend: { position: 'bottom' },
      },
    },
  });
}

function createCategoryStackChart(id) {
  return new Chart(document.getElementById(id), {
    type: 'bar',
    data: {
      labels: [],
      datasets: allCategories.map((category) => ({
        label: category,
        data: [],
        backgroundColor: categoryPalette[category] || '#94a3b8',
        stack: 'categories',
        borderRadius: 6,
      })),
    },
    options: {
      responsive: true,
      scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true },
      },
      plugins: {
        legend: { position: 'bottom' },
      },
    },
  });
}

function attachChartClicks() {
  const routeSentimentCanvas = document.getElementById('route-sentiment-chart');
  routeSentimentCanvas.addEventListener('click', (event) => {
    const points = charts.routeSentiment.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (points.length) {
      const index = points[0].index;
      const label = charts.routeSentiment.data.labels[index];
      if (label) {
        state.route = label;
        document.getElementById('route-filter').value = label;
        applyFilters();
      }
    }
  });

  const routeCategoryCanvas = document.getElementById('route-category-chart');
  routeCategoryCanvas.addEventListener('click', (event) => {
    const points = charts.routeCategory.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (points.length) {
      const index = points[0].index;
      const label = charts.routeCategory.data.labels[index];
      if (label) {
        state.route = label;
        document.getElementById('route-filter').value = label;
        applyFilters();
      }
    }
  });

  const locationCharts = [charts.locationSentiment, charts.locationCategory];
  locationCharts.forEach((chartInstance) => {
    const canvas = chartInstance.canvas;
    canvas.addEventListener('click', (event) => {
      const points = chartInstance.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (points.length) {
        const index = points[0].index;
        const label = chartInstance.data.labels[index];
        if (label) {
          state.community = label;
          document.getElementById('community-filter').value = label;
          applyFilters();
        }
      }
    });
  });

  const stopCharts = [charts.stopSentiment, charts.stopCategory];
  stopCharts.forEach((chartInstance) => {
    const canvas = chartInstance.canvas;
    canvas.addEventListener('click', (event) => {
      const points = chartInstance.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
      if (points.length) {
        const index = points[0].index;
        const label = chartInstance.data.labels[index];
        if (label) {
          state.stop = label;
          document.getElementById('stop-filter').value = label;
          applyFilters();
        }
      }
    });
  });
}

function initMaps() {
  const allCoords = feedbackData.flatMap((item) => [item.originCoords, item.destCoords]);
  defaultCommunityBounds = L.latLngBounds(allCoords);
  defaultScatterBounds = L.latLngBounds(allCoords);

  communityMap = L.map('community-map', { zoomControl: false, scrollWheelZoom: false });
  communityMap.fitBounds(defaultCommunityBounds.pad(0.3));
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(communityMap);
  communityLayer = L.layerGroup().addTo(communityMap);

  scatterMap = L.map('scatter-map', { boxZoom: true });
  scatterMap.fitBounds(defaultScatterBounds.pad(0.3));
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(scatterMap);
  scatterLayer = L.layerGroup().addTo(scatterMap);

  scatterMap.on('boxzoomend', (event) => {
    state.spatialBounds = event.boxZoomBounds;
    applyFilters();
  });

  document.getElementById('clear-area').addEventListener('click', () => {
    state.spatialBounds = null;
    resetScatterView();
    applyFilters();
  });
}

function resetScatterView() {
  if (scatterMap && defaultScatterBounds) {
    scatterMap.fitBounds(defaultScatterBounds.pad(0.3));
  }
}

function applyFilters() {
  const filtered = getFilteredData();
  updateKPIs(filtered);
  updateOverviewCharts(filtered);
  updateAnalysisCharts(filtered);
  updateCommunityMap(filtered);
  updateScatterMap(filtered);
  updateTable(filtered);
}

function getFilteredData() {
  return feedbackData.filter((item) => {
    if (state.channel !== 'All' && item.channel !== state.channel) return false;
    if (state.purpose !== 'All' && item.purpose !== state.purpose) return false;
    if (state.year !== 'All' && String(item.year) !== state.year) return false;
    if (state.month !== 'All' && String(item.month) !== state.month) return false;
    if (state.community !== 'All' && item.communityOrigin !== state.community && item.communityDestination !== state.community) return false;
    if (state.category !== 'All' && item.category !== state.category) return false;
    if (state.sentiment !== 'All' && item.sentiment !== state.sentiment) return false;
    if (state.route && !item.route.toLowerCase().includes(state.route.toLowerCase())) return false;
    if (state.stop && !item.stop.toLowerCase().includes(state.stop.toLowerCase())) return false;
    if (state.device && !item.deviceId.toLowerCase().includes(state.device.toLowerCase())) return false;
    if (state.spatialBounds) {
      const bounds = state.spatialBounds;
      const originInBounds = bounds.contains(L.latLng(item.originCoords[0], item.originCoords[1]));
      const destInBounds = bounds.contains(L.latLng(item.destCoords[0], item.destCoords[1]));
      if (!originInBounds && !destInBounds) {
        return false;
      }
    }
    return true;
  });
}

function updateKPIs(data) {
  const total = data.length;
  document.getElementById('total-feedback').textContent = total.toLocaleString();
  document.getElementById('total-feedback-sub').textContent = total === 1 ? '1 feedback selected' : `${total.toLocaleString()} feedback entries selected`;
  const withComments = data.filter((item) => item.hasComment).length;
  document.getElementById('comment-feedback').textContent = withComments.toLocaleString();
  const languageCount = new Set(data.map((item) => item.language).filter(Boolean)).size;
  document.getElementById('language-count').textContent = languageCount.toLocaleString();

  const sentimentBreakdown = { Positive: 0, Neutral: 0, Negative: 0 };
  data.forEach((item) => {
    sentimentBreakdown[item.sentiment] = (sentimentBreakdown[item.sentiment] || 0) + 1;
  });
  const sentimentRow = document.getElementById('sentiment-mix');
  sentimentRow.innerHTML = '';
  Object.entries(sentimentBreakdown).forEach(([sentiment, count]) => {
    const span = document.createElement('span');
    span.className = sentiment.toLowerCase();
    span.textContent = `${sentiment} ${count}`;
    sentimentRow.appendChild(span);
  });
}

function updateOverviewCharts(data) {
  const total = data.length;
  const score = total
    ? ((data.filter((item) => item.sentiment === 'Positive').length + 0.5 * data.filter((item) => item.sentiment === 'Neutral').length) / total) * 100
    : 0;
  charts.happiness.data.datasets[0].data = [score, Math.max(0, 100 - score)];
  charts.happiness.options.plugins.gaugeLabel.value = score;
  charts.happiness.update();

  const sentimentCountsRaw = aggregateBy(data, (item) => item.sentiment);
  const sentimentLabels = ['Positive', 'Neutral', 'Negative'].filter((label) => sentimentCountsRaw[label]);
  charts.sentiment.data.labels = sentimentLabels;
  charts.sentiment.data.datasets[0].data = sentimentLabels.map((label) => sentimentCountsRaw[label]);
  charts.sentiment.data.datasets[0].backgroundColor = sentimentLabels.map((label) => sentimentColors[label] || '#94a3b8');
  charts.sentiment.update();

  const monthKeys = Array.from(new Set(data.map((item) => item.monthKey))).sort();
  const monthLabels = monthKeys.map((key) => {
    const sample = data.find((item) => item.monthKey === key);
    return sample ? sample.monthLabel : key;
  });
  charts.categories.data.labels = monthLabels;
  charts.categories.data.datasets.forEach((dataset) => {
    dataset.data = monthKeys.map((key) => data.filter((item) => item.monthKey === key && item.category === dataset.label).length);
  });
  charts.categories.update();

  const podCount = data.filter((item) => item.personOfDetermination).length;
  charts.pod.data.datasets[0].data = [podCount, Math.max(0, total - podCount)];
  charts.pod.update();
}

function aggregateBy(data, keyFn, extra) {
  return data.reduce((acc, item) => {
    const key = keyFn(item);
    if (!key) return acc;
    if (!acc[key]) {
      acc[key] = { count: 0 };
      if (extra) {
        const extraValue = extra(item);
        Object.assign(acc[key], extraValue);
      }
    }
    acc[key].count += 1;
    return acc;
  }, {});
}

function updateAnalysisCharts(data) {
  const routeSummary = buildBreakdown(data, (item) => item.route);
  updateStackedChart(charts.routeSentiment, routeSummary.labels, routeSummary.sentiments);
  updateCategoryChart(charts.routeCategory, routeSummary.labels, routeSummary.categories);

  const locationSummary = buildBreakdown(data, (item) => item.communityDestination);
  updateStackedChart(charts.locationSentiment, locationSummary.labels, locationSummary.sentiments);
  updateCategoryChart(charts.locationCategory, locationSummary.labels, locationSummary.categories);

  const stopSummary = buildBreakdown(data, (item) => item.stop);
  updateStackedChart(charts.stopSentiment, stopSummary.labels, stopSummary.sentiments);
  updateCategoryChart(charts.stopCategory, stopSummary.labels, stopSummary.categories);
}

function buildBreakdown(data, accessor) {
  const map = new Map();
  data.forEach((item) => {
    const key = accessor(item);
    if (!key) return;
    if (!map.has(key)) {
      map.set(key, {
        total: 0,
        sentiments: { Positive: 0, Neutral: 0, Negative: 0 },
        categories: Object.fromEntries(allCategories.map((category) => [category, 0])),
      });
    }
    const entry = map.get(key);
    entry.total += 1;
    entry.sentiments[item.sentiment] += 1;
    entry.categories[item.category] += 1;
  });
  const topEntries = Array.from(map.entries())
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 8);
  return {
    labels: topEntries.map((entry) => entry[0]),
    sentiments: topEntries.map((entry) => entry[1].sentiments),
    categories: topEntries.map((entry) => entry[1].categories),
  };
}

function updateStackedChart(chartInstance, labels, sentimentsData) {
  chartInstance.data.labels = labels;
  const datasetMap = { Positive: 0, Neutral: 1, Negative: 2 };
  ['Positive', 'Neutral', 'Negative'].forEach((sentiment, datasetIndex) => {
    chartInstance.data.datasets[datasetIndex].data = sentimentsData.map((entry) => entry[sentiment] || 0);
  });
  chartInstance.update();
}

function updateCategoryChart(chartInstance, labels, categoriesData) {
  chartInstance.data.labels = labels;
  chartInstance.data.datasets.forEach((dataset, index) => {
    const category = dataset.label;
    dataset.data = categoriesData.map((entry) => entry[category] || 0);
  });
  chartInstance.update();
}

function updateCommunityMap(data) {
  if (!communityLayer) return;
  communityLayer.clearLayers();
  const aggregated = aggregateCommunities(data, state.communityView);
  if (!aggregated.length) {
    communityMap.fitBounds(defaultCommunityBounds.pad(0.5));
    return;
  }
  const bounds = [];
  aggregated.forEach((community) => {
    const dominant = dominantSentiment(community.sentiments);
    const color = sentimentColors[dominant] || '#2563eb';
    const marker = L.circleMarker([community.lat, community.lng], {
      radius: 8 + Math.min(community.total, 6),
      color,
      fillColor: color,
      fillOpacity: 0.8,
      weight: 2,
    });
    marker.bindPopup(
      `<strong>${community.name}</strong><br/>${community.total} feedback<br/>Positive: ${community.sentiments.Positive}<br/>Neutral: ${community.sentiments.Neutral}<br/>Negative: ${community.sentiments.Negative}`
    );
    marker.on('click', () => {
      state.community = community.name;
      document.getElementById('community-filter').value = community.name;
      applyFilters();
    });
    marker.addTo(communityLayer);
    bounds.push([community.lat, community.lng]);
  });
  const latLngBounds = L.latLngBounds(bounds);
  communityMap.fitBounds(latLngBounds.pad(0.5));
}

function aggregateCommunities(data, view) {
  const map = new Map();
  data.forEach((item) => {
    const name = view === 'origin' ? item.communityOrigin : item.communityDestination;
    const coords = view === 'origin' ? item.originCoords : item.destCoords;
    if (!name || !coords) return;
    if (!map.has(name)) {
      map.set(name, {
        name,
        lat: coords[0],
        lng: coords[1],
        total: 0,
        sentiments: { Positive: 0, Neutral: 0, Negative: 0 },
      });
    }
    const entry = map.get(name);
    entry.total += 1;
    entry.sentiments[item.sentiment] += 1;
  });
  return Array.from(map.values());
}

function dominantSentiment(sentiments) {
  const entries = Object.entries(sentiments);
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || 'Positive';
}

function updateScatterMap(data) {
  if (!scatterLayer) return;
  scatterLayer.clearLayers();
  const coords = [];
  data.forEach((item) => {
    const originMarker = L.circleMarker(item.originCoords, {
      radius: 5,
      color: '#2563eb',
      fillColor: '#60a5fa',
      fillOpacity: 0.7,
      weight: 1,
    }).addTo(scatterLayer);
    originMarker.bindTooltip(`${item.communityOrigin} → ${item.communityDestination} (${item.sentiment})`);

    const destMarker = L.circleMarker(item.destCoords, {
      radius: 5,
      color: '#f97316',
      fillColor: '#fdba74',
      fillOpacity: 0.7,
      weight: 1,
    }).addTo(scatterLayer);
    destMarker.bindTooltip(`${item.communityOrigin} → ${item.communityDestination} (${item.sentiment})`);

    L.polyline([item.originCoords, item.destCoords], {
      color: '#94a3b8',
      weight: 1,
      opacity: 0.4,
    }).addTo(scatterLayer);

    coords.push(item.originCoords, item.destCoords);
  });
  if (!coords.length) {
    scatterMap.fitBounds(defaultScatterBounds.pad(0.5));
    return;
  }
  if (!state.spatialBounds) {
    const bounds = L.latLngBounds(coords);
    scatterMap.fitBounds(bounds.pad(0.3));
  }
}

function updateTable(data) {
  const tbody = document.querySelector('#feedback-table tbody');
  tbody.innerHTML = '';
  if (!data.length) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 9;
    cell.textContent = 'No feedback matches the current filters.';
    row.appendChild(cell);
    tbody.appendChild(row);
  } else {
    data
      .slice()
      .sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt))
      .forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${formatDate(item.submittedAt)}</td>
          <td>${item.channel}</td>
          <td>${item.purpose}</td>
          <td>${item.route}</td>
          <td>${item.stop}</td>
          <td>${item.communityOrigin} → ${item.communityDestination}</td>
          <td>${item.sentiment}</td>
          <td>${item.category}</td>
          <td>${item.hasComment ? item.comment : '—'}</td>
        `;
        tbody.appendChild(row);
      });
  }
  const caption = document.getElementById('table-caption');
  caption.textContent = `Showing ${data.length} feedback entr${data.length === 1 ? 'y' : 'ies'}.`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

document.addEventListener('DOMContentLoaded', init);
