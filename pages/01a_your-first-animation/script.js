gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 3,
  onComplete: () => {
    gsap.to(".card", {
      y: -30,
      repeat: 0,
      yoyo: true,
      duration: .6,
      onComplete: () => {
        gsap.to(".card", {
          x: 50,
          repeat: 0,
          yoyo: true,
          duration: .6,
          onComplete: () => {
            gsap.to(".card", {
              y: 80,
              repeat: 0,
              yoyo: true,
              duration: .6,
              onComplete: () => {
                gsap.to(".card", {
                  x: -100,
                  repeat: 0,
                  yoyo: true,
                  duration: .6,
                  onComplete: () => {
                    gsap.to(".card", {
                      y: -30,
                      repeat: 0,
                      yoyo: true,
                      duration: .6,
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})