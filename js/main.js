(function ($) {
    "use strict";
  
    const issues = [
      {
        title: "مشاكل في متصفح الإنترنت",
        description: "",
        link: "course-details54.html"
    },
      {
        title: "ظهور الشاشة الزرقاء (BSOD)",
        description: "",
        link: "course-details53.html"
    },
      {
        title: "رسالة خطأ “Out of Memory”",
        description: "",
        link: "course-details52.html"
    },
      {
        title: "البلوتوث لا يعمل",
        description: "",
        link: "course-details51.html"
    },
      {
        title: "بطء عمل القرص الصلب",
        description: "",
        link: "course-details50.html"
    },
      {
        title: "كارت الشاشة لا يعمل",
        description: "",
        link: "course-details49.html"
    },
      {
        title: "الشاشة تظهر خطوطاً أو بقعاً",
        description: "",
        link: "course-details48.html"
    },
      {
        title: "	المروحة تصدر صوتاً مزعجاً",
        description: "",
        link: "course-details46.html"
    },
      {
        title: "بطء قراءة CD/DVD",
        description: "",
        link: "course-details45.html"
    },
      {
        title: "الجهاز لا يتعرف على USB",
        description: "",
        link: "course-details44.html"
    },
      {
        title: "الصوت لا يعمل",
        description: "",
        link: "course-details43.html"
    },
      {
        title: "الكاميرا لا تعمل",
        description: "",
        link: "course-details42.html"
    },
      {
        title: "الجهاز لا يتعرف على الأقراص الصلبة",
        description: "",
        link: "course-details41.html"
    },
      {
        title: "مشاكل في البطارية (لابتوب)",
        description: "",
        link: "course-details40.html"
    },
      {
        title: "	الماوس أو الكيبورد لا يعملان",
        description: "",
        link: "course-details39.html"
    },
      {
        title: "القرص الصلب يصدر صوتاً غريباً",
        description: "",
        link: "course-details38.html"
    },
      {
        title: "الجهاز يسخن بسرعة",
        description: "",
        link: "course-details37.html"
    },
      {
        title: "الشاشة لا تعرض صورة",
        description: "",
        link: "course-details36.html"
    },
      {
        title: "الكمبيوتر يصدر أصوات صفير عند التشغيل",
        description: "",
        link: "course-details35.html"
    },
      {
        title: "الجهاز لا يعمل مطلقاً",
        description: "",
        link: "course-details34.html"
    },
      {
        title: "استخدام إعدادات طاقة منخفضة (Power Settings)",
        description: "",
        link: "course-details33.html"
    },
      {
        title: "تعارض مع البرامج الأخرى  VirtualBox",
        description: "",
        link: "course-details32.html"
    },
      {
        title: "وجود برامج مكافحة الفيروسات أو جدار ناري نشط",
        description: "",
        link: "course-details31.html"
    },
      {
        title: "ضعف أداء الجهاز المضيف",
        description: "",
        link: "course-details30.html"
    },
      {
        title: "عدم تحديث البرنامج أو إضافات الضيف (Guest Additions)",
        description: "",
        link: "course-details29.html"
    },
      {
        title: " استخدام التخزين الديناميكي (Dynamically Allocated Storage)",
        description: "",
        link: "course-details28.html"
    },
      {
        title: "تخصيص موارد غير كافية للجهاز الافتراضي في VirtualBox",
        description: "",
        link: "course-details27.html"
    },
      {
        title: "عدم تطابق إعدادات البروتوكولات",
        description: "",
        link: "course-details26.html"
    },
      {
        title: "الأجهزة لا ترسل البيانات بسبب عدم تشغيل المنافذ",
        description: "",
        link: "course-details25.html"
    },
      {
        title: "عدم تعرف الأجهزة على أسماء النطاقات",
        description: "",
        link: "course-details24.html"
    },
      {
        title: "عدم عمل الاتصال اللاسلكي (Wi-Fi)",
        description: "",
        link: "course-details23.html"
    },
      {
        title: "مشاكل في DHCP",
        description: "",
        link: "course-details22.html"
    },
      {
        title: "خطأ في إعداد البوابة الافتراضية",
        description: "",
        link: "course-details21.html"
    },
      {
        title: "خطأ في إعداد عناوين IP باكيت تريسر",
        description: "",
        link: "course-details20.html"
    },
      {
        title: "عدم اتصال الأجهزة ببعضها في باكيت تريسر",
        description: "",
        link: "course-details19.html"
    },
      {
        title: "صعوبة تسجيل الدخول في سيسكو",
        description: "",
        link: "course-details18.html"
    },
      {
        title: "بطء تحميل الصفحات موقع سيسكو",
        description: "",
        link: "course-details17.html"
    },
      {
        title: "عدم تفعيل الحسابات الجديدة بسرعة رايات",
        description: "",
        link: "course-details16.html"
    },
      {
        title: "عدم توافق موقع رايات مع الأجهزة المختلفة",
        description: "",
        link: "course-details15.html"
    },
      {
        title: "مشاكل في تسجيل المقررات في رايات",
        description: "",
        link: "course-details14.html"
    },
      {
        title: "صعوبة تسجيل الدخول رايات",
        description: "",
        link: "course-details13.html"
    },
      {
        title: " بطء تحميل موقع رايات",
        description: "",
        link: "course-details12.html"
    },
      {
        title: "تعليق المتصفح Google Chrome",
        description: "",
        link: "course-details11.html"
    },
      {
        title: "عدم وجود على بعض الاجهزة(Packet Tracer)",
        description: "",
        link: "course-details10.html"
    },
      {
        title: "بطء برامج تخصصية (AutoCAD، VirtualBox، MATLAB)",
        description: "",
        link: "course-details9.html"
    },
      {
        title: "  مشاكل الأقفال الذكية بسبب المحول",
        description: "",
        link: "course-details8.html"
    },
      {
        title: " بطء الأجهزة بسبب نوع الهارد ديسك (HDD)",
        description: "",
        link: "course-details7.html"
    },
      {
        title: " تعطل أجهزة البروجكتر بسبب حذف الدرايفر",
        description: "",
        link: "course-details6.html"
    },
      {
        title: " مشاكل السعة التخزينية",
        description: "",
        link: "course-details5.html"
    },
      {
        title: " تعليق تسجيل الدخول إلى ويندوز",
        description: "",
        link: "course-details4.html"
    },
      {
        title: " خروج أجهزة الحاسب من دومين الكلية",
        description: "",
        link: "course-details3.html"
    },
        {
            title: "صعوبة الدخول على حساب المتدرب",
            description: "",
            link: "course-details0.html"
        },
        {
            title: " تعليق الشبكة",
            description:" ",
            link: "course-details1.html"
        },
      {
          title: "حسابات المتدربين لا تعمل على أجهزة معينة",
          description: "",
          link: "course-details2.html"
      },
   
    ];
  
    /*------------------------------------
      Sticky Menu 
  --------------------------------------*/
    var windows = $(window);
    var stick = $(".header-sticky");
    windows.on("scroll", function () {
      var scroll = windows.scrollTop();
      if (scroll < 5) {
        stick.removeClass("sticky");
      } else {
        stick.addClass("sticky");
      }
    });
    /*------------------------------------
      jQuery MeanMenu 
  --------------------------------------*/
    $(".main-menu nav").meanmenu({
      meanScreenWidth: "767",
      meanMenuContainer: ".mobile-menu",
    });
  
    /* last  2 li child add class */
    $("ul.menu>li").slice(-2).addClass("last-elements");
    /*------------------------------------
      Owl Carousel
  --------------------------------------*/
    $(".slider-owl").owlCarousel({
      loop: true,
      nav: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 2500,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  
    $(".partner-owl").owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  
    $(".testimonial-owl").owlCarousel({
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
    /*------------------------------------
      Video Player
  --------------------------------------*/
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      zoom: {
        enabled: true,
      },
    });
  
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    /*----------------------------
      Wow js active
  ------------------------------ */
    new WOW().init();
    /*------------------------------------
      Scrollup
  --------------------------------------*/
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade",
    });
    /*------------------------------------
      Nicescroll
  --------------------------------------*/
    $(".notice-left").niceScroll({
      cursorcolor: "#EC1C23",
      cursorborder: "0px solid #fff",
      autohidemode: false,
    });
  
    /*-----------------------
          Search Toggle
      ------------------------- */
    let searchSelector = document.querySelector(".search-toggle");
    let searchBox = document.querySelector(".search");
    if (searchSelector) {
      searchSelector.addEventListener("click", function () {
        searchBox.classList.toggle("open");
      });
    }
  
    $("#search").on("submit", function (e) {
      e.preventDefault();
      
      const formdata = new FormData(e.target); 
      const searchQuery = formdata.get("search");
      document.getElementById("issues-container").innerHTML = "";
      
      issues.forEach(function (issue) {
        if (issue.title.toLowerCase().includes(searchQuery.toLowerCase())) {
          let itemElemnt = `
          <div class="col-lg-4 col-md-6">
                      <div class="single-course mb-70">
                          <div class="course-img">
                           
                                  <div class="course-hover">
                                      <i class="fa fa-link"></i>
                                  </div>
                              </a>
                          </div>
                          <div class="course-content">
                              <h3><a href="${issue.link}">${issue.title}</a></h3>
                              <h3>${issue.description}</a></h3>
                              
                          
                             
                          </div>   
                      </div>
                  </div>
        `;
          document.getElementById("issues-container").innerHTML += itemElemnt;
        }
      });
    });
  
    issues.forEach(function (issue) {
      let itemElemnt = `
          <div class="col-lg-4 col-md-6">
                      <div class="single-course mb-70">
                          <div class="course-img">
                           
                                  <div class="course-hover">
                                      <i class="fa fa-link"></i>
                                  </div>
                              </a>
                          </div>
                          <div class="course-content">
                               <h3><a href="${issue.link}">${issue.title}</a></h3>
                              <h3>${issue.description}</a></h3>
                          
                             
                          </div>   
                      </div>
                  </div>
          `;
      document.getElementById("issues-container").innerHTML += itemElemnt;
    });
  })(jQuery);
