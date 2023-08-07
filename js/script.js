gsap.timeline({
  scrollTrigger: {
    trigger: '.scroll',
    start: 'top top',
    end: '+=10000 bottom',
    scrub: .5,
    pin: true,
    snap: {
      snapTo: [.2, .4, .6, .8],
      delay: 0,
      duration: {
        min: .2,
        max: .5,
      }
    }
  }
}).to('.c4', {scale: .8, duration: .1, opacity: 1, filter: 'blur(4px)'}, 0)
.to('.c3', {scale: .7, duration: .1, opacity: 1, filter: 'blur(8px)'}, 0)
.to('.c2', {scale: .6, duration: .1,  filter: 'blur(12px)'}, 0)
.to('.c1', {scale: .5, duration: .1,  filter: 'blur(16px)'}, 0)

.to('.c4', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .1)
.to('.c3', {scale: .8, duration: .1, opacity: 1, filter: 'blur(4px)'}, .1)
.to('.c2', {scale: .7, duration: .1, opacity: 1, filter: 'blur(8px)'}, .1)
.to('.c1', {scale: .6, duration: .1,  filter: 'blur(12px)'}, .1)

.to('.c3', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .2)
.to('.c2', {scale: .8, duration: .1, opacity: 1, filter: 'blur(4px)'}, .2)
.to('.c1', {scale: .7, duration: .1, opacity: 1, filter: 'blur(8px)'}, .2)

.to('.c2', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .3)
.to('.c1', {scale: .8, duration: .1, opacity: 1, filter: 'blur(4px)'}, .3)

.to('.c1', {scale: 1, duration: .1, opacity: 1, filter: 'blur(0px)'}, .4)

.to('.c5', {scale: 3, left: '0', duration: .1, opacity: 0 }, .1)
.to('.c4', {scale: 3, left: '100%', duration: .1, opacity: 0 }, .2)
.to('.c3', {scale: 3, left: '0', duration: .1, opacity: 0 }, .3)
.to('.c2', {scale: 3, left: '100%', duration: .1,opacity: 0 }, .4)
.to('.c1', {scale: 3, left: '0', duration: .1, opacity: 0 }, .5)
