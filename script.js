

var tl= gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.3
})

tl.from("#nav h1,#nav h4,#nav h3",{
    y:300,
    opacity:0,
    duration:0.4,
    delay:0.4,
    stagger:0.3
})
tl.from(".left h1, .left p",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

tl.from(".right img",{
    scale:0.2,
    opacity:0,
    duration:0.5
})
gsap.from("#page2 h2",{
    scale:0,
    opacity:0,
    y:-200,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 80%"
    
    }
})
gsap.from(".about h2",{
    scale:0,
    opacity:0,
    y:-300,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".about h2",
        scroller:"body",
        start:"top 80%"
    
    }
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 80%"
    
    }
})

gsap.from(".about .intro",{
    scale:0,
    x:400,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".about .intro",
        scroller:"body",
        start:"top 70%"
    
    }
})


gsap.from(".intro-part-2",{
    x:-400,
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".about .intro",
        scroller:"body",
        start:"top 70%"
    
    }
})

