var tl = gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    Delay:0.4,
    duration:0.8,
    stagger:0.3
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    // Delay:0.4,
    duration:0.6,
    stagger:0.3
}) 
tl.from("img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:0.5,
    stagger:0.4
}) 
tl.from("footer h3",{
    y:-50,
    opacity:0,
    Delay:0.3,
    duration:0.8,
    stagger:0.3
})
