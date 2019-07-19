new WOW().init();

$(function () {
    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height - 20 + 5,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                if ($(this).attr('id') != "home") {
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                } else {
                    $('a.nav-link.home').addClass('active');
                }
            }

            if ($(this).offset().top == 0) {
                nav.find('a').removeClass('active');
                $('a.nav-link[href="home"]').addClass('active');
            }
        });
    });

    nav.find('a.scroll').on('click', function (e) {
        var el = $(this)
            , id = el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 1e3, 'easeInOutExpo');

        if (id == "#home") {
            nav.find('a').removeClass('active');
            $('.home').addClass('active');
        } else {
            $(id).removeClass('active')
            return false;
        }
        e.preventDefault();
    });
    $(window).on("scroll", function () {
        $(window).width() > 767 && $(this).scrollTop() > 1 ? $(".header").addClass("navbar-sticky") : $(".header").removeClass("navbar-sticky")
    })
})

!function (e) {
    $("#particles-js").length > 0 && particlesJS("particles-js", {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: !0,
                    value_area: 1000
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                opacity: .1,
                stroke: {
                    width: 0,
                    color: "#fff"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: .3,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .12,
                    sync: !1
                }
            },
            size: {
                value: 6,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .08,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#fff",
                opacity: .3,
                width: 1.3
            },
            move: {
                enable: !0,
                speed: 5,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 500,
                    rotateY: 1000
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "repulse"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: false
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    });
}(jQuery);