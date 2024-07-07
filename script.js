let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        // Change 'sroller' to 'scroller'
        scroller: "body",
        scrub: true,
        start: "0% 95%",
        end: "50% 50%",
    }
});

tl.to(".main-div .pepsi",{
    top:"100%",
    left:"-27%",
    scale:0.8,
})
gsap.to(".water",{
    top:"130%",
    left:"-10%",
    scale:0.6,
    scrollTrigger: {
        trigger: ".page2",
        // Change 'sroller' to 'scroller'
        scroller: "body",
        //markers: true,
        scrub: true,
        start: "0% 95%",
        end: "50% 50%",
    }
})
gsap.to(".water2",{
    top:"140%",
    left:"-5%",
    scale:0.6,
    //rotate:-180,
    scrollTrigger: {
        trigger: ".page2",
        // Change 'sroller' to 'scroller'
        scroller: "body",
       // markers: true,
        scrub: true,
        start: "0% 95%",
        end: "50% 50%",
    }
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        // Change 'sroller' to 'scroller'
        scroller: "body",
        markers: true,
        scrub: true,
        start: "0% 90%",
        end: "50% 50%",
    }
});

tl2.from(".card1 img",{
    y:200,
    x:-300,
},"cardt")
tl2.from(".card3 img",{
    y:200,
    x:300,
},"cardt")


tl2.to(".main-div .pepsi",{
    top:"188%",
    left:"0.5%",
    scale:0.55,
},"cardt")
tl2.to(".water",{
    opacity:0
},"cardt")
tl2.to(".water2",{
    opacity:0
},"cardt")