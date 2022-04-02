(function($) {
    var app = $('.app-body')
    var header = $('.header')
    var banner = document.getElementById('article-banner') || false
    var about = document.getElementById('about-banner') || false
    var top = $('.scroll-top')
    var catalog = $('.catalog-container .toc-main')
    var isOpen = false

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    var tagClick = false;

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (!tagClick && (st > lastScrollTop && st > navbarHeight)) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    function detectmob() {
        if (window.innerWidth <= 800) {
            return true;
        } else {
            return false;
        }
    }

    if (detectmob()) {
        $('.nav-container').hide();
    }

    $(document).ready(function() {
        NProgress.start()
        $('#nprogress .bar').css({
            'background': '#42b983'
        })
        $('#nprogress .spinner').hide()

        var fade = {
            transform: 'translateY(0)',
            opacity: 1
        }
        if (banner) {
            app.css('transition-delay', '0.15s')
            $('#article-banner').children().css(fade)
        }
        if (about) {
            $('.author').children().css(fade)
        }
        app.css(fade)
    })

    window.onload = function() {
        setTimeout(function() {
            NProgress.done()
        }, 50)
    }

    $('.menu').on('click', function() {
        if (!header.hasClass('fixed-header') || isOpen) {
            header.toggleClass('fixed-header')
            isOpen = !isOpen
        }
        $('.menu-mask').toggleClass('open')
    })

    $('#tag-cloud a').on('click', function() {
        var list = $('.tag-list')
        var name = $(this).data('name')
        var maoH = list.find('#' + name).offset().top
        tagClick = true;
        $('html,body').animate({
            scrollTop: maoH - header.outerHeight()
        }, 500);
    })

    $('.reward-btn').on('click', function() {
        $('.money-code').fadeToggle()
    })

    $('.arrow-down').on('click', function() {
        $('html, body').animate({
            scrollTop: banner.offsetHeight - header.outerHeight()
        }, 500)
    })

    $('.toc-main a').on('click', function(e) {
        e.preventDefault()
        var catalogTarget = e.currentTarget
        var scrollTarget = $(decodeURIComponent(catalogTarget.getAttribute('href')))
        var top = scrollTarget.offset().top
        tagClick = true;
        if (top > 0) {
            $('html,body').animate({
                scrollTop: top - header.outerHeight()
            }, 500)
        }
    })

    top.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600)
    })

    document.addEventListener('scroll', function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var headerH = header.outerHeight()
        if (banner) {
            if (scrollTop > headerH) {
                header.addClass('fixed-header')
            } else if (scrollTop === 0) {
                header.removeClass('fixed-header')
            }
        }
        if (scrollTop > 100) {
            top.addClass('opacity')
        } else {
            top.removeClass('opacity')
        }
        if (scrollTop > 190) {
            catalog.addClass('fixed-toc')
        } else {
            catalog.removeClass('fixed-toc')
        }
    })
})(jQuery)