// Create a GSAP matchMedia instance
let mm = gsap.matchMedia();

mm.add("(min-width: 1260px)", () => {
  //console.log("Hi");
  
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      scroller: "body",
      scrub: true,
      start: "0% 95%",
      end: "50% 50%"
    }
  });

  tl.to(".main-div .pepsi", {
    top: "100%",
    left: "-27%",
    scale: 0.8
  }, "t")
  .to(".water", {
    top: "130%",
    left: "-10%",
    scale: 0.6
  }, "t")
  .to(".water2", {
    top: "140%",
    left: "-5%",
    scale: 0.6
  }, "t");

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      scroller: "body",
      markers: true,
      scrub: true,
      start: "0% 90%",
      end: "50% 50%"
    }
  });

  tl2.from(".card1 img", {
    y: 200,
    x: -300
  }, "cardt")
  .from(".card3 img", {
    y: 200,
    x: 300
  }, "cardt")
  .to(".main-div .pepsi", {
    top: "188%",
    left: "0.5%",
    scale: 0.55
  }, "cardt")
  .to(".water", {
    opacity: 0
  }, "cardt")
  .to(".water2", {
    opacity: 0
  }, "cardt");
});

mm.add("(max-width: 400px)", () => {
    //console.log("Hi");
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: true,
        start: "0% 95%",
        end: "50% 50%"
      }
    });
  
    tl.to(".main-div .pepsi", {
      top: "104%",
      left: "-2%",
      scale: 0.8
    }, "t")
    .to(".water", {
      top: "155%",
      left: "-3%",
      scale: 0.9
    }, "t")
    .to(".water2", {
      top: "157%",
      left: "-5%",
      scale: 0.9
    }, "t");
  
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: true,
        scrub: true,
        start: "-10% 90%",
        end: "80% 50%"
      }
    });
  
    tl2.from(".card1 img", {
      y: 900,
      x: -300
    }, "cardt")
    tl2.from(".card3 img", {
      y: 200,
      x: 300
    })
    tl2.to(".main-div .pepsi", {
      top: "315%",
      left: "0.5%",
      scale: 0.8
    }, "cardt")
    tl2.to(".water", {
      opacity: 0
    }, "cardt")
    tl2.to(".water2", {
      opacity: 0
    }, "cardt");
  });

  mm.add("(max-width: 368px)", () => {
    //console.log("Hi");
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        scrub: true,
        start: "0% 95%",
        end: "50% 50%"
      }
    });
  
    tl.to(".main-div .pepsi", {
      top: "104%",
      left: "-2%",
      scale: 0.8
    }, "t")
    .to(".water", {
      top: "155%",
      left: "-3%",
      scale: 0.9
    }, "t")
    .to(".water2", {
      top: "157%",
      left: "-5%",
      scale: 0.9
    }, "t");
  
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        markers: true,
        scrub: true,
       start: "-10% 90%",
        end: "80% 50%"
      }
    });
  
    tl2.to(".main-div .pepsi", {
      top: "329%",
      left: "0.5%",
      scale: 0.9
    }, "cardt")
    tl2.to(".water", {
      opacity: 0
    }, "cardt")
    tl2.to(".water2", {
      opacity: 0
    }, "cardt");
  });

 

  