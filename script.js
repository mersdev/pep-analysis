// Chart.js default configuration
Chart.defaults.font.family = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#2c3e50';

// Register the datalabels plugin
Chart.register(ChartDataLabels);

// Color palette
const colors = {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#2ecc71',
    warning: '#f39c12',
    danger: '#e74c3c',
    info: '#3498db',
    light: '#ecf0f1',
    dark: '#2c3e50'
};

// Digital Key Setup Ease Chart - Updated with correct data (7 responses)
const setupEaseCtx = document.getElementById('setupEaseChart').getContext('2d');
new Chart(setupEaseCtx, {
    type: 'doughnut',
    data: {
        labels: ['Very Easy (43%)', 'Easy (43%)', 'Neither Easy nor Difficult (14%)'],
        datasets: [{
            data: [3, 3, 1],
            backgroundColor: [colors.success, colors.info, colors.warning],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed / total) * 100);
                        return `${context.label}: ${context.parsed} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${percentage}%`;
                }
            }
        }
    }
});

// Reliability Performance Chart - Updated with correct data (7 responses)
const reliabilityCtx = document.getElementById('reliabilityChart').getContext('2d');
new Chart(reliabilityCtx, {
    type: 'bar',
    data: {
        labels: ['Always Works\n(First Attempt)\n57%', 'Usually Works\n(90-99%)\n29%', 'Sometimes Requires\nSecond Attempt\n14%'],
        datasets: [{
            label: 'Number of Users',
            data: [4, 2, 1],
            backgroundColor: [colors.success, colors.info, colors.warning],
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed.y / total) * 100);
                        return `${context.parsed.y} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: colors.dark,
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${value} (${percentage}%)`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: colors.light
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Convenience vs Physical Key Chart - Updated with correct data (7 responses)
const convenienceCtx = document.getElementById('convenienceChart').getContext('2d');
new Chart(convenienceCtx, {
    type: 'bar',
    data: {
        labels: ['Much More Convenient (71%)', 'Somewhat More Convenient (14%)', 'Same Level (14%)'],
        datasets: [{
            label: 'Responses',
            data: [5, 1, 1],
            backgroundColor: [colors.success, colors.info, colors.warning],
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed.x / total) * 100);
                        return `${context.parsed.x} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'right',
                color: colors.dark,
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${value} (${percentage}%)`;
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: colors.light
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Security Perception Chart - Updated with correct data (7 responses)
const securityCtx = document.getElementById('securityChart').getContext('2d');
new Chart(securityCtx, {
    type: 'polarArea',
    data: {
        labels: ['Much More Secure (14%)', 'Somewhat More Secure (43%)', 'About Equally Secure (29%)', 'Somewhat Less Secure (14%)'],
        datasets: [{
            data: [1, 3, 2, 1],
            backgroundColor: [
                colors.success + '80',
                colors.info + '80',
                colors.warning + '80',
                colors.danger + '80'
            ],
            borderColor: [
                colors.success,
                colors.info,
                colors.warning,
                colors.danger
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    usePointStyle: true
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed / total) * 100);
                        return `${context.label}: ${context.parsed} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${percentage}%`;
                }
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    }
});

// EV Charging Setup Chart - Updated with correct data (5 EV responses)
const chargingSetupCtx = document.getElementById('chargingSetupChart').getContext('2d');
new Chart(chargingSetupCtx, {
    type: 'bar',
    data: {
        labels: ['Very Easy\n40%', 'Easy\n40%', 'Neutral\n20%'],
        datasets: [{
            label: 'Responses',
            data: [2, 2, 1],
            backgroundColor: [colors.success, colors.info, colors.warning],
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed.y / total) * 100);
                        return `${context.parsed.y} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: colors.dark,
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${value} (${percentage}%)`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: colors.light
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Driving Comfort Chart - Updated with correct data (5 EV responses)
const drivingComfortCtx = document.getElementById('drivingComfortChart').getContext('2d');
new Chart(drivingComfortCtx, {
    type: 'pie',
    data: {
        labels: ['Very Comfortable (40%)', 'Comfortable (20%)', 'Neutral (40%)'],
        datasets: [{
            data: [2, 1, 2],
            backgroundColor: [colors.success, colors.info, colors.warning],
            borderWidth: 0,
            hoverOffset: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed / total) * 100);
                        return `${context.label}: ${context.parsed} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${percentage}%`;
                }
            }
        }
    }
});

// Range Anxiety Chart - Updated with correct data (5 EV responses)
const rangeAnxietyCtx = document.getElementById('rangeAnxietyChart').getContext('2d');
new Chart(rangeAnxietyCtx, {
    type: 'doughnut',
    data: {
        labels: ['Very Unconcerned (20%)', 'Unconcerned (60%)', 'Concerned (20%)'],
        datasets: [{
            data: [1, 3, 1],
            backgroundColor: [colors.success, colors.info, colors.danger],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed / total) * 100);
                        return `${context.label}: ${context.parsed} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${percentage}%`;
                }
            }
        }
    }
});

// EV Convenience Chart - Updated with correct data (5 EV responses)
const evConvenienceCtx = document.getElementById('evConvenienceChart').getContext('2d');
new Chart(evConvenienceCtx, {
    type: 'bar',
    data: {
        labels: ['Very Convenient\n20%', 'Convenient\n20%', 'Neutral\n40%', 'Inconvenient\n20%'],
        datasets: [{
            label: 'Responses',
            data: [1, 1, 2, 1],
            backgroundColor: [colors.success, colors.info, colors.warning, colors.danger],
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed.y / total) * 100);
                        return `${context.parsed.y} responses (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                color: colors.dark,
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = Math.round((value / total) * 100);
                    return `${value} (${percentage}%)`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                },
                grid: {
                    color: colors.light
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all chart containers
document.querySelectorAll('.chart-container, .card, .insight-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
