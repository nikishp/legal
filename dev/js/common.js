//$(document).ready(function() {

  $(function () {

    svg4everybody();
    objectFitImages();

    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  //dynamicHeight($('.you_class'));

  var str = $('.article__title span').text();
    $('.article__title span').html(str.replace(' ', '<br>'));

      $("[data-fancybox]").fancybox({
        touch: false
      });

      $(".form__item input, .form__item textarea").focus(function () {
        $(this).parent().addClass("form__item--focus");
      }).blur(function () {
        if ($(this).val() === '') {
          $(this).parent().removeClass("form__item--focus");
        }
      });



      $('.person-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        accessibility: false,
        draggable: false,
        asNavFor: '.person-control'
      });
      $('.person-control').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    // infinite: false,
    asNavFor: '.person-content',
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<div class="sl-btn sl-btn--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><defs><linearGradient id="gr_prev"><stop offset="0%" stop-color="#13547a"/><stop offset="100%" stop-color="#80d0c7"/></linearGradient></defs><path fill="url(#gr_prev)"  d="M 57.633,129.007 165.93,237.268 c 4.752,4.74 12.451,4.74 17.215,0 4.752,-4.74 4.752,-12.439 0,-17.179 L 83.438,120.418 183.133,20.747 c 4.752,-4.74 4.752,-12.439 0,-17.191 -4.752,-4.74 -12.463,-4.74 -17.215,0 L 57.621,111.816 c -4.679,4.691 -4.679,12.511 0.012,17.191 z" transform="translate(-54.113 -.001)"/></svg></div>',
    nextArrow: '<div class="sl-btn sl-btn--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><defs><linearGradient id="gr_next"><stop offset="0%" stop-color="#80d0c7"/><stop offset="100%" stop-color="#13547a"/></linearGradient></defs><path fill="url(#gr_next)"  d="M 183.189,111.816 74.892,3.555 c -4.752,-4.74 -12.451,-4.74 -17.215,0 -4.752,4.74 -4.752,12.439 0,17.179 l 99.707,99.671 -99.695,99.671 c -4.752,4.74 -4.752,12.439 0,17.191 4.752,4.74 12.463,4.74 17.215,0 L 183.201,129.006 c 4.68,-4.691 4.68,-12.511 -0.012,-17.19 z" transform="translate(-54.113)"/></svg></div>',
    responsive: [{
      breakpoint: 992,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
    });











  //menu fixed on scroll
  var navPos, winPos, navHeight;

  function refreshVar() {
    // navPos = $('nav').offset().top;
    navPos = 300;
    // console.log("navPos", navPos);
    navHeight = $('.header').outerHeight(true);
    // console.log("navHeight", navHeight);
  };
  refreshVar();

  $('<div class="header--clone"></div>').insertBefore('.header').css('height', navHeight).hide();

    $(window).scroll(function () {

      winPos = $(window).scrollTop();
    // console.log("winPos", winPos);

    if (winPos >= navHeight) {
      $('.header').addClass('header--hidden');
    } else {
      $('.header').removeClass('header--hidden');
    };

    if (winPos >= navPos) {
      $('.header').addClass('header--fixed');
      $('.header--clone').show();
    } else {
      $('.header').removeClass('header--fixed');
      $('.header--clone').hide();
    };

  });
  //menu fixed on scroll end



  $(".breadcrumbs__item:last-child a").on('click', function (e) {
    e.preventDefault();
  });


  $('.tabs__list').on('click', '.tabs__list-item:not(.active-tab)', function () {
    // var itemEq = $(this).data('index');
    var curName = $(this).find('.title').text();
    console.log(curName);
    $('.tabs__list-item').removeClass('active-tab');
    $(this).addClass('active-tab');
    // $(this).closest('.tabs').find('.tabs__content').removeClass('active-tab').eq(itemEq).addClass('active-tab');
    $(this).closest('.tabs').find('.tabs__content').removeClass('active-tab');

    $('.tabs__content h2').each(function () {
      var anName = $(this).text();
      console.log(anName);
      if (anName == curName) {
        $(this).parents('.tabs__content').addClass('active-tab');
      }
    })


    // $(this).closest('.tabs').find('.tabs__content h2').text(curName).addClass('a11111111111111111111111');
  });


  $('.hamburger--js').on('click', function () {
    $(this).addClass('is-active');
    $('.nav').addClass('nav--active').stop(true, true).slideDown(250);
  });

  $('.nav__item').on('click', function () {
    if (windowWidth < 992) {
      $('.hamburger--js').removeClass('is-active');
      $('.nav').removeClass('nav--active').slideUp(250);
    }
  });

  $(document).mouseup(function (e) {
    if ($('.nav').is(":visible") && $(e.target).closest('.nav__list').length == 0 && windowWidth < 992) {
      $('.hamburger--js').removeClass('is-active');
      $('.nav').removeClass('nav--active').slideUp(250);
    }
  });





  $('.sl').slick({
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    prevArrow: '<div class="sl-btn sl-btn--prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><defs><linearGradient id="gr_prev"><stop offset="0%" stop-color="#13547a"/><stop offset="100%" stop-color="#80d0c7"/></linearGradient></defs><path fill="url(#gr_prev)"  d="M 57.633,129.007 165.93,237.268 c 4.752,4.74 12.451,4.74 17.215,0 4.752,-4.74 4.752,-12.439 0,-17.179 L 83.438,120.418 183.133,20.747 c 4.752,-4.74 4.752,-12.439 0,-17.191 -4.752,-4.74 -12.463,-4.74 -17.215,0 L 57.621,111.816 c -4.679,4.691 -4.679,12.511 0.012,17.191 z" transform="translate(-54.113 -.001)"/></svg></div>',
    nextArrow: '<div class="sl-btn sl-btn--next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><defs><linearGradient id="gr_next"><stop offset="0%" stop-color="#80d0c7"/><stop offset="100%" stop-color="#13547a"/></linearGradient></defs><path fill="url(#gr_next)"  d="M 183.189,111.816 74.892,3.555 c -4.752,-4.74 -12.451,-4.74 -17.215,0 -4.752,4.74 -4.752,12.439 0,17.179 l 99.707,99.671 -99.695,99.671 c -4.752,4.74 -4.752,12.439 0,17.191 4.752,4.74 12.463,4.74 17.215,0 L 183.201,129.006 c 4.68,-4.691 4.68,-12.511 -0.012,-17.19 z" transform="translate(-54.113)"/></svg></div>',
  });


  // switch
  var $swToggle = $('.switch__toggle'),
    $swToggleActive = 'switch__toggle--active',
    $swToggleItem = $('.switch__toggle li'),
      $swList = $('.switch__list'),
        $swListItem = $('.switch__list li'),
          $swData,
          $swActiveContent;

          $swToggleItem.each(function () {
            $(this).html($(this).parent().siblings($swList).children('li:first-child').html());
          });

          $swToggle.on('click', function () {
            $(this).stop(true, true).toggleClass($swToggleActive).siblings($swList).stop(true, true).slideToggle(100);
          });

          $swListItem.on('click', function () {
            $swActiveContent = $(this).html();
            $swData = $(this).data('switch');
            $(this).parent().siblings($swToggle).stop(true, true).toggleClass($swToggleActive).siblings($swList).stop(true, true).slideToggle(100);
            $(this).parent().siblings($swToggle).find('li').html($swActiveContent);
          });



  // var $form = $('.form');

  // $form.on('click', function (event) {
  //   var formId = $(this).attr("id");
  //   // console.log('formId ' + formId);
  //   localStorage.setItem('form', formId);
  //   var pageName = window.location.pathname;
  //   // console.log('pageName ' + pageName);
  //   localStorage.setItem('currentPage', pageName);
  // });

  // //	E-mail Ajax Send
  // $form.each(function () {
  //   //    var $this = $(this);
  //   $(this).validate({

  //     // rules: {
  //     // 	phone: {
  //     // 		required: true,
  //     // 		minlength: 6,
  //     // 		number: true
  //     // 	}
  //     // },

  //     submitHandler: function (form) {
  //       var formData = new FormData(form);
  //       $.ajax({
  //         type: "POST",
  //         url: "mail.php",
  //         data: formData,
  //         contentType: false,
  //         dataType: "json",
  //         processData: false,
  //         beforeSend: function () {
  //           $(form).find('.btn').attr("disabled", true);
  //           $(form).find('.form-load').css({
  //             'width': '20px',
  //             'margin-left': '10px'
  //           });
  //           console.log('before send')
  //         }
  //       }).done(function () {
  //         $(form).find('.btn').attr("disabled", false);
  //         $(form).find('.form-load').css({
  //           'width': '0',
  //           'margin-left': '0'
  //         });
  //         $(form).trigger("reset");
  //         // $.magnificPopup.close();
  //         $.fancybox.close();
  //         //window.location.href = "thanks.html";
  //         console.log('done')
  //       }).fail(function () {
  //         alert("Error, email not sent !");
  //         console.log('error')
  //       });
  //     }
  //   });
  // });

  //popup form
  // $('.popup-js').magnificPopup({
  //     type: 'inline',
  //     preloader: false,
  //     focus: '#name',
  //     callbacks: {
  //         beforeOpen: function() {
  //             if ($(window).width() < 700) {
  //                 this.st.focus = false;
  //             } else {
  //                 this.st.focus = '#name';
  //             }
  //         }
  //     }
  // });

  //phone mask
  // $(".phone").mask("+9(999)999-99-99");

  //animate pege element
  // функция выбирает селектор, вешает ему анимационный класс, задает начальную задержку, задает добавочное время на каждую итерацию
  // function animateItem(selector, animateClass, animateStartPoint, animateIncrement) {
  //   var animCount = animateStartPoint;
  //   $(selector).each(function(index, el) {
  //     $(el).css('animation-delay', animCount + 's').animated(animateClass);
  //     animCount = animCount + animateIncrement;
  //   });
  // };

  // if (screen.width > 768) {
  //     // $(".you_class").animated("bounceIn");
  //     // $(".you_class").css('animation-delay', '0.5s').animated("bounceInLeft");
  //     animateItem(".you_class", "bounceInLeft", 0, 0);
  //     animateItem(".you_class", "fadeInLeft", 0, 0.2);
  // };

  //form styler
  // $('input, select').styler();


  //menu on click
  // var startWidth = 1100;
  // var menu = $('.header__list');
  // var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // $(window).resize(function(){
  // windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //   if(windowWidth > startWidth && menu.is(':hidden')) {
  //     menu.attr("style", "");
  //   };
  // });

  // $('#openup').on('click', function(e) {
  //   e.preventDefault();
  //   menu.stop(true,true).slideToggle();
  //   $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
  //   $('.header__list-sublist-wrap').css('display', 'none');
  // });


  // $('.header__list-item').on('click', '.header__list-link', function(e) {
  //   $this = $(e.delegateTarget);

  //   if($this.find('.header__list-sublist-wrap').length>0){
  //     e.preventDefault();
  //     $this.children('.header__list-sublist-wrap').stop(true,true).slideToggle(10).parent('.header__list-item').siblings().children('.header__list-sublist-wrap').css('display', 'none');

  //   }else{
  //     $('.header__list-sublist-wrap').css('display', 'none');
  //     if(windowWidth < startWidth){
  //       menu.stop(true,true).slideToggle();
  //       $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
  //     };
  //   };
  // });

  // $('.header-sublist__link').on('click',  function(event) {
  //   $('.header__list-sublist-wrap').css('display', 'none');
  //   if(windowWidth < startWidth){
  //     menu.stop(true,true).slideToggle();
  //     $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
  //   };
  // });
  // // close menu if click on "body"
  // $(document).mouseup(function (e) {
  //   if(menu.is(":visible") && $(e.target).closest('.header__nav-wrap').length == 0 && windowWidth < startWidth){
  //     $('.header__list-sublist-wrap').css('display', 'none');
  //     menu.stop(true,true).slideToggle();
  //     $('.hamburger--collapse').stop(true,true).toggleClass('is-active');
  //     console.log('close menu if click on "body"')
  //   }
  // });

  // menu on click end


  //menu on hover
  // var startWidth = 1100;
  // var menu = $('.header__list');
  // var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // function removeInline() {
  //   if (windowWidth > startWidth) {
  //     menu.attr("style", "");

  //     $('.header__list-sublist-wrap').attr("style", "");
  //     $('.hamburger--collapse').removeClass('is-active');
  //   };
  // };
  // removeInline();

  // function menuOn() {
  //   //activate the menu only if the width of the window is less than the specified
  //   if (windowWidth <= startWidth) {

  //     //open menu
  //     $('#openup').on('click', function (e) {
  //       e.preventDefault();
  //       $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
  //       $('.hamburger--collapse').stop(true, true).toggleClass('is-active');
  //       $('.header__list-sublist-wrap').attr("style", "");
  //       menu.stop(true, true).slideToggle();
  //     });

  //     //hide the menu when clicking on the first and second level link
  //     $('.header__list-link,.header-sublist__link').on('click', function (event) {
  //       $('.header__list-sublist-wrap').css('display', 'none');
  //       $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
  //       menu.stop(true, true).slideToggle();
  //       $('.hamburger--collapse').stop(true, true).toggleClass('is-active');
  //     });

  //     //open submenu
  //     $('.header__list-open-submenu').on('click', function (event) {
  //       if ($(this).hasClass("header__list-open-submenu--open")) {
  //         $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
  //         $('.header__list-sublist-wrap').attr("style", "");
  //         $(this).removeClass('header__list-open-submenu--open').parents('.header__list-item').find('.header__list-sublist-wrap').attr("style", "");
  //         // console.log('true')
  //       } else {
  //         $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
  //         $('.header__list-sublist-wrap').attr("style", "");
  //         $(this).addClass('header__list-open-submenu--open').parents('.header__list-item').find('.header__list-sublist-wrap').css('display', 'block');
  //         // console.log('false')
  //       }
  //     });

  //     // close menu if click on "body"
  //     $(document).mouseup(function (e) {
  //       if (menu.is(":visible") && $(e.target).closest('.header__nav-wrap').length == 0) {
  //         $('.header__list-sublist-wrap').css('display', 'none');
  //         $('.header__list-open-submenu').removeClass('header__list-open-submenu--open');
  //         menu.stop(true, true).slideToggle();
  //         $('.hamburger--collapse').stop(true, true).toggleClass('is-active');
  //         // console.log('close menu if click on "body"')
  //       }
  //     });

  //   };
  //   /*if < window width*/

  // };
  /*menuON*/
  // menuOn();

  // $(window).resize(function () {
  //   windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //   // console.log("windowWidth", windowWidth);
  //   removeInline();
  //   refreshVar(); //part of the function of fixing the menu
  // });
  //menu on hover end

  //menu scroll
  //  $(".easyscroll").on("click", function (event) {
  //    event.preventDefault();
  //    var id  = $(this).attr('href'),
  //    top = $(id).offset().top;
  //    $('body,html').animate({scrollTop: top}, 600);
  //  });


  //menu scroll and add class on scroll

  //scroll
  // var navHeight = $(".header__top-line").outerHeight(true);

  // function showSection(section, isAnimate) {
  //   var direction = section.replace(/#/, '');
  //   // console.log(direction)
  //   var reqSection = $('.section').filter('[data-section="' + direction + '"]');

  //   var reqSectionPos = reqSection.offset().top - navHeight + 1;
  //   // console.log("reqSectionPos", reqSectionPos);

  //   if (isAnimate) {
  //     $('body, html').animate({
  //       scrollTop: reqSectionPos
  //     }, 500);
  //   } else {
  //     $('body, html').scrollTop(reqSectionPos);
  //   }
  // };

  // //вызывать по клику  showSection($(this).attr('href'), true);
  // // $('.header__list-link').on('click', function (event) {
  // //   event.preventDefault();
  // //   showSection($(this).attr('href'), true);
  // // });
  // //scroll end

  // //add class
  // function checkSection() {

  //   $('.section').each(function () {
  //     var $this = $(this),
  //       topEdge = $this.offset().top - $('.header__top-line').outerHeight(true),
  //       bottomEdge = topEdge + $this.outerHeight(true),
  //       wScroll = $(window).scrollTop();

  //     if (topEdge < wScroll && bottomEdge > wScroll) {

  //       var currentId = $this.data('section'),
  //         reqLink = $('.header__list-link').filter('[href="#' + currentId + '"]');

  //       reqLink.closest('.header__list-item').addClass('header__list-item--active').siblings().removeClass('header__list-item--active');

  //       //простовляния хешей в адрессную строку
  //       if (history.pushState) {
  //         history.pushState(null, null, "#" + currentId);
  //         // console.log("modern work");
  //       } else {
  //         // window.location.hash = currentId;
  //         location.hash = currentId;
  //         // console.log("old work");
  //       }

  //     }
  //   });

  // };

  // уменьшаю количество вызова функций при скролле
  /*
  var scrollTimeout;  // global for any pending scrollTimeout
  $(window).scroll(function () {
    if (scrollTimeout) {
      // clear the timeout, if one is pending
      clearTimeout(scrollTimeout);
      scrollTimeout = null;
    }
    scrollTimeout = setTimeout(checkSection, 500);
  });
  */

  // var didScroll = false;

  // window.onscroll = doThisStuffOnScroll;

  // function doThisStuffOnScroll() {
  //   didScroll = true;
  // }

  // setInterval(function () {
  //   if (didScroll) {
  //     didScroll = false;
  //     checkSection();
  //   }
  // }, 500);

  //add class end

  //menu scroll and add class on scroll end

  // timer
  // in html: .counter#clock
  // var finishData = moment.tz("2018-09-12 13:00", "Europe/Moscow"),
  //     countTextDay = 'Day',
  //     countTextHour = 'Hour',
  //     countTextMinute = 'Minute',
  //     countTextSecond = 'Second';

  // $('#clock').countdown(finishData.toDate(), function(event) {
  //     // $(this).html(event.strftime('<span>%D</span>  <span>%H</span> <span>%M</span> <span> %S</span>'));
  //     $(this).html(event.strftime('<div class="counter__item counter__item--day"><div class="counter__item-info"><div class="counter__item-numb">%D</div><div class="counter__item-title">' + countTextDay + '</div></div><div class="counter__item-dots"><svg xmlns="http://www.w3.org/2000/svg" width="202.857" height="570" viewBox="0 0 53.673 150.813"><g transform="translate(-27.403 -29.582)"><circle cx="54.618" cy="56.04" r="26.458"/><circle cx="53.862" cy="153.936" r="26.458"/></g></svg></div></div><div class="counter__item counter__item--hour"><div class="counter__item-info"><div class="counter__item-numb">%H</div><div class="counter__item-title">' + countTextHour + '</div></div><div class="counter__item-dots"><svg xmlns="http://www.w3.org/2000/svg" width="202.857" height="570" viewBox="0 0 53.673 150.813"><g transform="translate(-27.403 -29.582)"><circle cx="54.618" cy="56.04" r="26.458"/><circle cx="53.862" cy="153.936" r="26.458"/></g></svg></div></div><div class="counter__item counter__item--minute"><div class="counter__item-info"><div class="counter__item-numb">%M</div><div class="counter__item-title">' + countTextMinute + '</div></div><div class="counter__item-dots"><svg xmlns="http://www.w3.org/2000/svg" width="202.857" height="570" viewBox="0 0 53.673 150.813"><g transform="translate(-27.403 -29.582)"><circle cx="54.618" cy="56.04" r="26.458"/><circle cx="53.862" cy="153.936" r="26.458"/></g></svg></div></div><div class="counter__item counter__item--second"><div class="counter__item-info"><div class="counter__item-numb">%S</div><div class="counter__item-title">' + countTextSecond + '</div></div></div>'));
  // });



}); //jQuery


//removeIf(production)
function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul  class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");

  var allPage = $('<ul class="allPage-list"></ul');
  // allPage.prependTo("body"); //выводит все старницы в начало страницы

  var widgetPageList = '';

  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    //виводит линку на кажду страницу в лишке
    // $('<li class="allPage-list__item"><a class="allPage-list__link" href="./' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.allPage-list');
  }

  var widgetStilization = $('<style>body{position:relative}.widget_wrap{position:fixed;top:0;left:-10px;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;transition:all .3s ease;transform:translate(-100%,0)}.widget_wrap ul{max-width:220px;width:100%;display:flex;flex-wrap:wrap}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) 50% 50% no-repeat #222;cursor:pointer}.widget_wrap:hover{left:0;transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{display:block;color:#fff;text-decoration:none;font-size:15px;width:100px}.widget_link:hover{color:#fff;text-decoration:underline}</style>');
  widgetStilization.prependTo(".widget_wrap")
};
pageWidget(['index', 'main', 'practices', 'article', 'person', 'contacts', 'blog', 'blog-article', 'thanks'])
//endRemoveIf(production)
