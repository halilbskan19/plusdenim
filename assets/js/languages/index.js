var multilang;

function onLoad() {
  // create object, load JSON file, default to 'nl', and callback to initList when ready loading
  multilang = new MultiLang(
    "/public/languages/languages.json",
    localStorage.getItem("selectedLanguages"),
    this.initList
  );

  setTimeout(() => {
    const selectOptions =
      document.getElementsByName("listlanguages")[0].options;

    if (selectOptions) {
      for (let i = 0; i < selectOptions.length; i++) {
        const e = selectOptions[i];
        if (localStorage.getItem("selectedLanguages") == e.value) {
          e.selected = true;
        }
      }
    }
  }, 100);

  // alternatively
  //multilang = new MultiLang('languages.json', null, this.initList); // default to browser language
  //multilang = new MultiLang('languages.json'); // only load JSON, no callback

  for (
    let i = 0;
    i < document.querySelectorAll(".navigation .menu a").length;
    i++
  ) {
    const e = document.querySelectorAll(".navigation .menu a")[i];
    e.addEventListener("click", () => {
      document.getElementById("side-menu").checked = false;
    });
  }

  var btn = $(".backtotop");
  var lastScrollTop = 0;

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }

    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      $(".header").removeClass("sticky");
    } else {
      // upscroll code
      if (lastScrollTop - $(window).scrollTop() < 300) {
        return;
      }
      $(".header").addClass("sticky");
    }
    lastScrollTop = st;
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
}

function langSelectChange(sel) {
  // switch to selected language code
  multilang.setLanguage(sel.value);
  localStorage.setItem("selectedLanguages", sel.value);

  // refresh labels
  refreshLabels();
  location.reload();
}

function initList() {

  setTimeout(() => {
    document.body.style.overflow = "";
    document
      .getElementsByClassName("plusdenim-heart")[0]
      .classList.add("visible");
  }, 1000);
  
  // get language list element
  var list = document.getElementsByName("listlanguages")[0];
  // clear all options
  list.options.length = 0;

  // add all available languages
  for (var key in multilang.phrases) {
    // create new language option
    var lang = document.createElement("option");
    lang.value = key;
    lang.innerHTML = multilang.phrases[key]["langdesc"];

    // append to select element
    list.appendChild(lang);
  }

  refreshLabels();
}

function refreshLabels() {
  // Basically do the following for all document elements:
  //document.getElementById("Options").textContent = multilang.get("Options");

  // loop through all document elements
  var allnodes = document.body.getElementsByTagName("*");

  for (var i = 0, max = allnodes.length; i < max; i++) {
    // get id current elements
    var idname = allnodes[i].id;
    // if id exists, set get id current elements
    if (
      idname != "" &&
      idname != "linkAboutUs" &&
      idname != "linkWhatWeDo" &&
      idname != "linkContact"
    ) {
      allnodes[i].textContent = multilang.get(idname);
    }
  }
}
