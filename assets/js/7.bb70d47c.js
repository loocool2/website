(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{327:function(t,a,o){"use strict";o.d(a,"a",(function(){return n})),o.d(a,"c",(function(){return e})),o.d(a,"b",(function(){return s})),o.d(a,"d",(function(){return i}));var n="https://raw.githubusercontent.com/inorichi/tachiyomi-extensions/repo/index.json",e="https://github.com/inorichi/tachiyomi/releases/latest",s="https://api.github.com/repos/inorichi/tachiyomi/releases/latest",i="https://tachiyomi.kanade.eu/latest"},328:function(t,a,o){},329:function(t,a,o){},332:function(t,a,o){},333:function(t,a,o){"use strict";o(109),o(12),o(47),o(29),o(72),o(38),o(347);var n=o(370),e=o(81),s={name:"AlgoliaSearchBox",props:{options:{type:Object,default:function(){}}},data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,a){var s=this;Promise.all([Promise.all([o.e(0),o.e(5)]).then(o.t.bind(null,453,7)),Promise.all([o.e(0),o.e(5)]).then(o.t.bind(null,454,7))]).then((function(o){var i=Object(e.a)(o,1)[0];i=i.default;var l=t.algoliaOptions,r=void 0===l?{}:l;i(Object(n.a)(Object(n.a)({},t),{},{inputSelector:"#algolia-search-input",algoliaOptions:Object(n.a)({facetFilters:["lang:".concat(a)].concat(r.facetFilters||[])},r),handleSelected:function(t,a,o){var n=new URL(o.url),e=n.pathname,i=n.hash,l=e.replace(s.$site.base,"/");s.$router.push("".concat(l).concat(i))}}))}))},update:function(t,a){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,a)}}},i=(o(334),o(21)),l=Object(i.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[a("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);a.a=l.exports},334:function(t,a,o){"use strict";var n=o(328);o.n(n).a},335:function(t,a,o){"use strict";var n=o(329);o.n(n).a},337:function(t,a,o){"use strict";o(339);var n=o(368),e=o(369),s=o(336),i=o(333);function l(t,a){return t.ownerDocument.defaultView.getComputedStyle(t,null)[a]}var r={name:"Navbar",components:{SidebarButton:e.a,NavLinks:s.a,SearchBox:n.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,a=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),o=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-a-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};o(),window.addEventListener("resize",o,!1)}},c=(o(335),o(21)),u=Object(c.a)(r,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("header",{staticClass:"navbar"},[o("SidebarButton",{on:{"toggle-sidebar":function(a){return t.$emit("toggle-sidebar")}}}),t._v(" "),o("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?o("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?o("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),o("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.$page.frontmatter.hideSearch?o("div"):t.isAlgoliaSearch?o("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?o("SearchBox"):t._e(),t._v(" "),o("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);a.a=u.exports},338:function(t,a,o){"use strict";var n=o(332);o.n(n).a},385:function(t,a,o){"use strict";o(182),o(179),o(110),o(180),o(73);var n=o(30),e=o(331),s=o.n(e),i=o(387),l=o(388),r=o(327),c={name:"Home",components:{CloudDownloadIcon:i.a,BookOpenVariantIcon:l.a},data:function(){return{tagName:"",browserDownloadUrl:""}},computed:{data:function(){return this.$page.frontmatter},buttonDownload:function(){return{text:this.data.buttonDownload}},buttonGuidesLink:function(){return{link:this.data.buttonGuidesLink,text:this.data.buttonGuides}}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var o,n,e;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.get(r.b);case 2:o=a.sent,n=o.data,e=n.assets.find((function(t){return t.name.includes(".apk")})),t.$data.tagName=n.tag_name,t.$data.browserDownloadUrl=e.browser_download_url;case 7:case"end":return a.stop()}}),a)})))()},methods:{showDownloads:function(){var t=this;this.$swal({title:"Get Tachiyomi for Android",text:"Requires Android 5.0 or newer.",confirmButtonText:"Download",confirmButtonAriaLabel:"Download Tachiyomi",cancelButtonText:"Living on the edge? Get the <strong>Preview</strong>",cancelButtonAriaLabel:"Download Preview",showCloseButton:!0,showCancelButton:!0,focusConfirm:!0,customClass:{container:"showDownloads",popup:"showDownloads__popup",actions:"showDownloads__actions",title:"showDownloads__title",content:"showDownloads__content",confirmButton:"showDownloads__confirmButton",cancelButton:"showDownloads__cancelButton",closeButton:"showDownloads__closeButton",footer:"showDownloads__footer"},showClass:{popup:"animate__animated animate__faster animate__fadeIn"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}).then((function(a){a.value?(t.$swal({icon:"success",title:"Downloading",text:"Tachiyomi",confirmButtonText:"Dismiss",showCloseButton:!1,showCancelButton:!1,timer:5e4,timerProgressBar:!0,customClass:{container:"showDownloads",popup:"showDownloads__popup",actions:"showDownloads__actions",title:"showDownloads__title",content:"showDownloads__content",confirmButton:"showDownloads__confirmButton",cancelButton:"showDownloads__cancelButton",closeButton:"showDownloads__closeButton",footer:"showDownloads__footer"},showClass:{popup:"animate__animated animate__faster animate__pulse"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}),window.location.assign(t.$data.browserDownloadUrl||r.c),window.ga("send","event","Action","Download","Tachiyomi")):"cancel"===a.dismiss&&t.$swal({icon:"warning",title:"Are you sure?",html:"<strong>Preview</strong> is not recommended if you're not willing to test for – and endure – issues.",confirmButtonText:"I am sure.",showCloseButton:!0,showCancelButton:!1,customClass:{container:"showDownloads",popup:"showDownloads__popup",actions:"showDownloads__actions",title:"showDownloads__title",content:"showDownloads__content",confirmButton:"showDownloads__confirmButton",cancelButton:"showDownloads__cancelButton",closeButton:"showDownloads__closeButton",footer:"showDownloads__footer"},showClass:{popup:"animate__animated animate__headShake"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}).then((function(a){a.value&&(t.$swal({icon:"success",title:"Downloading",text:"Tachiyomi Preview",confirmButtonText:"Dismiss",showCloseButton:!1,showCancelButton:!1,timer:5e3,timerProgressBar:!0,customClass:{container:"showDownloads",popup:"showDownloads__popup",actions:"showDownloads__actions",title:"showDownloads__title",content:"showDownloads__content",confirmButton:"showDownloads__confirmButton",cancelButton:"showDownloads__cancelButton",closeButton:"showDownloads__closeButton",footer:"showDownloads__footer"},showClass:{popup:"animate__animated animate__faster animate__pulse"},hideClass:{popup:"animate__animated animate__faster animate__zoomOut"}}),window.location.assign(r.d),window.ga("send","event","Action","Download","Tachiyomi Preview"))}))}))}}},u=(o(338),o(21)),d=Object(u.a)(c,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[o("header",{staticClass:"hero"},[t.data.heroImage?o("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"Logo"}}):t._e(),t._v(" "),null!==t.data.heroText?o("h1",{attrs:{id:"main-title"}},[t._v("\n\t\t\t"+t._s(t.data.heroText||"Tachiyomi")+"\n\t\t")]):t._e(),t._v(" "),null!==t.data.tagline?o("p",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.data.tagline||"Free and open source manga reader for Android")+"\n\t\t")]):t._e(),t._v(" "),t.data.buttonDownload||t.data.buttonGuides?o("p",{staticClass:"action"},[t.data.buttonDownload?o("a",{staticClass:"action-button action-button__Download",attrs:{tabindex:"0"},on:{click:t.showDownloads,keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.showDownloads(a)}}},[o("CloudDownloadIcon"),t._v("\n\t\t\t\t"+t._s(t.data.buttonDownload)+"\n\t\t\t")],1):t._e(),t._v(" "),t.data.buttonGuides?o("a",{staticClass:"action-button action-button__Guides",attrs:{tabindex:"0",href:t.data.buttonGuidesLink}},[o("BookOpenVariantIcon"),t._v("\n\t\t\t\t"+t._s(t.data.buttonGuides)+"\n\t\t\t")],1):t._e()]):t._e()]),t._v(" "),t.data.features&&t.data.features.length?o("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return o("div",{key:n,staticClass:"feature"},[o("div",{staticClass:"feature__Details"},[o("h2",[t._v(t._s(a.title))]),t._v(" "),o("p",[t._v(t._s(a.details))])]),t._v(" "),o("section",{staticClass:"feature__Animation"},[o("img",{staticClass:"feature__Animation--dark",attrs:{src:t.$withBase("/assets/"+a.image+"-Dark.png")}}),t._v(" "),o("img",{staticClass:"feature__Animation--light",attrs:{src:t.$withBase("/assets/"+a.image+"-Light.png")}})])])})),0):t._e(),t._v(" "),o("Content",{staticClass:"theme-default-content custom"}),t._v(" "),o("footer",[t.data.footer?o("div",{staticClass:"footer"},[t._v("\n\t\t\t"+t._s(t.data.footer)+"\n\t\t")]):t._e()])],1)}),[],!1,null,null,null);a.a=d.exports}}]);