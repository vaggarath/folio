export const RadarData = {
    labels: [
      "HTML5",
      "CSS/SCSS",
      "Javascript / ReactJS",
      "PHP / Laravel",
      "SQL (MySQL, PGSQL)",
      "Wordpress"
    ],
    datasets: [
      {
        label: "Technologies",
        backgroundColor: "rgba(34, 202, 236, 0)",
        color:"#fff",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 0)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 0)",
        data: [20, 20, 20, 18, 18, 17]
      }
    ]
  };
  export const RadarOptions = {
    scale: {
      ticks: {
        min: 0,
        max: 20,
        stepSize: 2,
        showLabelBackdrop: false,
        backdropColor: "rgba(203, 197, 11, 0)"
      },
      angleLines: {
        color: "rgba(255, 255, 255, 0)",
        lineWidth: 1
      },
      gridLines: {
        color: "#fff",
        circular: true
      }
    }
  };
  