<template>
  <div>
    <div id="particles-js" v-resize @resize="onResize" />
    <!-- stats - count particles -->
    <!-- <div class="count-particles">
      <span class="js-count-particles">--</span> particles
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      block: false
    };
  },
  created() {
    this.$eventBus.$on("updatePs", this.update);
  },
  destroyed() {
    this.$eventBus.$off("updatePs");
  },

  mounted() {
    this.render();
  },
  methods: {
    onResize(e) {

      // prevent spam event

      if(this.block === true){
        console.log("block")
        return;
      }

      this.block = true;

      setTimeout(() => {
        this.block = false;
      }, 100);

      console.log("resize event", e.detail.width, e.detail.height);
      this.$eventBus.$emit("updatePs");
    },
    update() {




      // window.pJSDom[0].pJS.particles.number.value = 200;
      // window.pJSDom[0].pJS.particles.color.value = "#dccaff";
      // window.pJSDom[0].pJS.tmp.obj.size_value = 80;

      // window.pJSDom[0].pJS.fn.particlesUpdate();

      window.pJSDom.forEach((element) => {
        element.pJS.fn.particlesRefresh();
      });
    },

    render() {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 3,
              },
            },
            bubble: {
              distance: 100,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 2,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });

      /* ---- stats.js config ---- */
      /*
    var count_particles, stats, update;
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
      stats.begin();
      stats.end();
      if (
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);*/
    },
  },
};
</script>

<style scoped>
/* ---- reset ---- */

body {
  margin: 0;
  font: normal 75% Arial, Helvetica, sans-serif;
}

canvas {
  display: block;
  vertical-align: bottom;
}

/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: #464141;
  background-image: url("");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 50% 50%;
}

/* ---- stats.js ---- */

.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13e8e9;
  font-size: 0.8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles {
  font-size: 1.1em;
}

#stats,
.count-particles {
  -webkit-user-select: none;
}

#stats {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}

.count-particles {
  border-radius: 0 0 3px 3px;
}
</style>