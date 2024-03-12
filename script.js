//navigation

$("nav .netflix-logo").on("click", () => {
    window.open("./index.html", "_self")
})

$(".nav-sidepart .signin-btn").on("click", () => {
    window.open("./login.html", "_self");
});


// Select the carousel buttons
const buttons = $(".carousel-btn");

buttons.each(function() {
    $(this).on("click", () => {
        const direction = $(this).hasClass("next") ? "next" : "prev";
        const slides = $(this).closest(".carousel").find("[data-slides]");

        const activeSlide = slides.find("[data-active]");
        let newIndex = slides.children().index(activeSlide);

        // Calculate the index of the next or previous slide
        if (direction === "next") {
            newIndex = (newIndex + 1) % slides.children().length;
        } else {
            newIndex = (newIndex - 1 + slides.children().length) % slides.children().length;
        }

        slides.children().removeAttr("data-active");
        slides.children().eq(newIndex).attr("data-active", true);

        if (newIndex === 0) {
            $(".opening-slide").show();
            $(".second-slide").hide();
            $(".third-slide").hide();
        } if (newIndex === 1) {
            $(".opening-slide").hide();
            $(".second-slide").show();
            $(".third-slide").hide();
        } if (newIndex === 2) {
            $(".opening-slide").hide();
            $(".second-slide").hide();
            $(".third-slide").show();
        }


        if (newIndex === 1) {
            $(".carousel-description").removeClass("c-descript-pos");
            $(".carousel-description").addClass("top-20");
        } else {
            $(".carousel-description").addClass("c-descript-pos");
            $(".carousel-description").removeClass("top-20");
        }
    });
});


// input animation

$("header .email-section button").on("click", () => {
    $("header .email-section .s-inputs").find("input").focus();
});

$("footer .email-section button").on("click", () => {
    $("footer .email-section .s-inputs").find("input").focus();
});


// FAQs animation

$(".ans").hide();

$(".qtn").on("click", function() {
    $(this).find("svg").addClass("rotate");

    var ans = $(this).next(".ans");

    if (ans.is(":visible")) {
        ans.slideUp();
        $(this).find("svg").removeClass("rotate");
    } else {
        ans.slideDown();
    }
});


// plans selection

$(".plans").on("click", function() {
    $(this).addClass("transition");

    setTimeout(() => {
        $(this).removeClass("transition");
        setTimeout(() => {
            window.open("./purchase-plan.html", "_self");
        }, 300);
    }, 100);
});


// plans selection


$("#prem").addClass("prem-bg")
$("#prem h2, #prem p").css("color", "#fff")
$("#prem svg").css("fill", "#fff")

var selectionSeq = ['prem'];
var bgSeq = ['prem-bg'];

$(".stand-attr, .bas-attr, .mob-attr").hide();

$(".alternative-plans .plan-name").on("click", function() {
    var planId = $(this).attr("id");
    removeBg();
    changeBackground(planId);
})

function changeBackground(pmtr) {
    selectionSeq.push(pmtr)
    bgSeq.push(pmtr + "-bg")
    
    $(".alternative-plans .plan-name").addClass("border black")
    $("#" + pmtr).removeClass("border black")
    
    $("#" + pmtr).addClass(pmtr + "-bg")

    $(".alternative-plans .plan-name h2, .alternative-plans .plan-name p").css("color", "#000")
    $(".alternative-plans svg").css("fill", "#000")

    $("#" + pmtr + " h2, #" + pmtr + " p").css("color", "#fff")
    $("#" + pmtr + " svg").css("fill", "#fff")

    $(".plan-attr-container").hide();
    $("." + pmtr + "-attr").show();
}

function removeBg() {
    var lastIndexSelection = selectionSeq.length - 1;
    var lastIndexBg = bgSeq.length - 1;

    $("#" + selectionSeq[lastIndexSelection]).removeClass(bgSeq[lastIndexBg])
}

$(".selection-container, .finish-container, .acc-creation-container").hide();

$(".center-content .next-btn").on("click", () => {
    $(".center-content").hide();
    $(".selection-container").fadeIn();
})

$(".selection-container .next-btn").on("click", () => {
    $(".selection-container").hide();
    $(".finish-container").fadeIn();
})

$(".finish-container .next-btn").on("click", () => {
    $(".finish-container").hide();
    $(".acc-creation-container").fadeIn();
})


$(".acc-creation-container .next-btn").on("click", () => {
    $(".acc-creation-container .email-section .s-inputs").find("input").focus();
});
