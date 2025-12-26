export const circles = {
    fpsLimit: 60,
    background: {
      color: ""
    },
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 100
      },
      opacity: {
        animation: {
          enable: true,
          speed: 0.03,
          sync: true,
          startValue: "max",
          count: 1,
          destroy: "min"
        },
        value: {
          min: 0,
          max: 0.8
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 5 }
      }
    }
  }