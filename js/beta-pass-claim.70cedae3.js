let e;
const t = {
    kal: {
        name: "Kal Stonestrike",
        properties: {
            Age: 18,
            Nationality: "Scottish",
            Birthday: "November 27",
            Likes: "Geography, his sister, Charpup, drawing.",
            Dislikes: "Sitting still, waiting in line, travelling by portal.",
            "Blood Type": "B-positive"
        },
        description: `Kal never had much use for "planning".
While that's all well and good for a kid, he's on the cusp of manhood now and things are starting to get complicated. Would he attend university? learn a trade? get slicked into a portal and transported to a magical land? turns out it was the third one. Ah well, maybe an epic adventure is just what Kal needs to figure out his life.`
    },
    daniel: {
        name: "Daniel Castrillo",
        properties: {
            Age: 12,
            Nationality: "Spanish",
            Birthday: "October 24",
            Likes: "Fantasy novels, cooking, quietly observing others.",
            Dislikes: "Loud noises, danger, being observed by others.",
            "Blood Type": "O-negative"
        },
        description: "Daniel, a sweet and caring boy, has spent his entire life under the thumb of an uncaring and violent father. Does Pyli represent a new beginning for him? A chance to finally live out his dreams of heroism? Or maybe this new world and its strange perils will be too much. Going from shy child to legendary warrior is a tough transition. Is Daniel ready? Only time will tell."
    },
    tanja: {
        name: "Tanja Silver",
        properties: {
            Age: 22,
            Nationality: "American",
            Birthday: "June 1",
            Likes: "Beer, wine, vodka and tequila con fridays.",
            Dislikes: "Taking anything seriously.",
            "Blood Type": "A-negative"
        },
        description: "Tanja loves to party. there's nothing better than a weekend of pounding music, dancing, and alcohol to distract you from a disappointing world. On the weekdays, Tanja drifts through life, deploying a sarcastic, fatalistic attitude to hide her fear that... maybe this is as good as it gets? Perhaps her time in Pyli will give her the chance to connect with herself (if she's willing to)."
    },
    angelica: {
        name: "Angelica Caraxas",
        properties: {
            Age: 35,
            Nationality: "British",
            Birthday: "September 5",
            Likes: "Expensive foods, the law, being in control.",
            Dislikes: "Being kidnapped from her life to fight monsters for a bunch of weirdo magicians!",
            "Blood Type": "A-negative"
        },
        description: "Angelica actually has a lot going on in her life...or she did before that portal opened up and brought her to Pyli, now her entire legal career is on hold while she figures out the fastest way to get home cand no, she doesn't plan on staying even a second longer than she absolutely has to). Although, maybe, just maybe, this tie in pyli is just what she needs to understand that there's more to life than work."
    }
};
let i = {
    left: 0,
    top: 0
};

function o() {
    let e = new Date(Date.UTC(2023, 4, 30, 23, 59, 59)).getTime(),
        t = e - new Date().getTime(),
        i = Math.floor(t / 864e5),
        o = Math.floor(t % 864e5 / 36e5),
        n = Math.floor(t % 36e5 / 6e4),
        a = "";
    i && (a += `${i}D `), o && (a += `${o}H `), n && (a += `${n}M `), a += `${Math.floor(t % 6e4 / 1e3)}S`, t < 0 && (a = "Mint Finished"), $("#mint-countdown-text").text(a)
}

function n(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}
$(document).ready(function() {
    function i(e) {
        let i = t[e];
        $(".hero-img-color").hide(), $(".hero-img-bw").show(), $(".hero-fullbody-img").hide(), $(`.heroes-imgs[data-hero="${e}"]`).find(".hero-img-bw").hide(), $(`.heroes-imgs[data-hero="${e}"]`).find(".hero-img-color").show(), $(`.hero-fullbody-img[data-hero="${e}"]`).fadeIn(), $("#hero-name").text(i.name), $("#hero-age").text(i.properties.Age), $("#hero-nationality").text(i.properties.Nationality), $("#hero-birthday").text(i.properties.Birthday), $("#hero-description").text(i.description), $("#hero-likes").text(i.properties.Likes), $("#hero-dislikes").text(i.properties.Dislikes)
    }
    $("#backers-carousel").owlCarousel({
        items: 8,
        loop: !0,
        margin: 100,
        autoplay: !0,
        slideTransition: "linear",
        autoplaySpeed: 6e3,
        smartSpeed: 6e3,
        dots: !1,
        responsive: {
            0: {
                items: 2,
                margin: 50
            },
            480: {
                items: 3,
                margin: 50
            },
            768: {
                items: 4
            },
            1024: {
                items: 8,
                margin: 100
            }
        }
    }), $("#backers-carousel").trigger("play.owl.autoplay", [1e3]), setTimeout(function() {
        $("#backers-carousel").trigger("play.owl.autoplay", [6e3])
    }, 1e3), e = $("#features-carousel").owlCarousel({
        items: 2,
        loop: !0,
        margin: 50,
        dots: !1,
        stagePadding: 100,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            }
        }
    }), $("#features-left-btn").on("click", () => {
        e.trigger("prev.owl.carousel", [300])
    }), $("#features-right-btn").on("click", () => {
        e.trigger("next.owl.carousel", [300])
    }), $(".heroes-imgs").on("click", e => {
        let t = $(e.target).attr("data-hero");
        i(t)
    }), i("kal")
}), $(window).on("load", function() {
    setTimeout(() => {
            $("#loading-spinner").remove(), $("#content").fadeIn(1e3)
        }, 1e3), o(), setInterval(o, 1e3),
        function e() {
            let t = function() {
                if (i.left || (i = $("#chicken-running").position()), !i.left) return {
                    top: 0,
                    left: 0
                };
                let e = $("#chicken-running").width(),
                    t = n(e, $(window).height() - e),
                    o = n(e, $(window).width() - e);
                return {
                    top: t - i.top,
                    left: o - i.left,
                    nl: o
                }
            }();
            if (!t.left) {
                setTimeout(e, 50);
                return
            }
            t.nl < $("#chicken-running").position().left ? $("#chicken-running").addClass("flipped") : $("#chicken-running").removeClass("flipped"), $("#chicken-running").animate({
                left: t.left
            }, 1e4, function() {
                setTimeout(e, 1e3)
            })
        }()
});
//# sourceMappingURL=beta-pass-claim.70cedae3.js.map