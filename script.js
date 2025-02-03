var t1 = gsap.timeline();
t1
.to("#fs", {
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to("#elem1", {
    height: "100%",
    duration: 2,
    delay: -1.8,
    ease: Expo.easeInOut
})
.to("#white", {
    height: "100%",
    duration: 2,
    delay: -1.8,
    ease: Expo.easeInOut
});
