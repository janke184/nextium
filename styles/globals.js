import css from "styled-jsx/css"

export const globalStyles = css.global`
  hr,
  img {
      border: 0;
  }
  body,
  figure {
      margin: 0;
  }
  .btn,
  .waves-effect {
      -webkit-user-select: none;
  }
  .navbar-fixed-bottom .navbar-collapse,
  .navbar-fixed-top .navbar-collapse,
  .pre-scrollable {
      max-height: 340px;
  }
  .waves-effect,
  html {
      -webkit-tap-highlight-color: transparent;
  }
  html {
      font-family: sans-serif;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
      display: block;
  }
  audio,
  canvas,
  progress,
  video {
      display: inline-block;
      vertical-align: baseline;
  }
  audio:not([controls]) {
      display: none;
      height: 0;
  }
  [hidden],
  template {
      display: none;
  }
  a {
      background-color: transparent;
  }
  a:active,
  a:hover {
      outline: 0;
  }
  b,
  optgroup,
  strong {
      font-weight: 700;
  }
  dfn {
      font-style: italic;
  }
  h1 {
      margin: 0.67em 0;
  }
  mark {
      background: #ff0;
      color: #000;
  }
  sub,
  sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
  }
  sup {
      top: -0.5em;
  }
  sub {
      bottom: -0.25em;
  }
  img {
      vertical-align: middle;
  }
  svg:not(:root) {
      overflow: hidden;
  }
  hr {
      box-sizing: content-box;
      height: 0;
  }
  pre,
  textarea {
      overflow: auto;
  }
  code,
  kbd,
  pre,
  samp {
      font-size: 1em;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
      color: inherit;
      font: inherit;
      margin: 0;
  }
  .glyphicon,
  .popover,
  .tooltip,
  address {
      font-style: normal;
  }
  button {
      overflow: visible;
  }
  button,
  select {
      text-transform: none;
  }
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
      -webkit-appearance: button;
      cursor: pointer;
  }
  button[disabled],
  html input[disabled] {
      cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
      border: 0;
      padding: 0;
  }
  input[type="checkbox"],
  input[type="radio"] {
      box-sizing: border-box;
      padding: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
      height: auto;
  }
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  td,
  th {
      padding: 0;
  }
  @media print {
      blockquote,
      img,
      pre,
      tr {
          page-break-inside: avoid;
      }
      *,
      :after,
      :before {
          background: 0 0 !important;
          color: #000 !important;
          box-shadow: none !important;
          text-shadow: none !important;
      }
      a,
      a:visited {
          text-decoration: underline;
      }
      a[href]:after {
          content: " (" attr(href) ")";
      }
      abbr[title]:after {
          content: " (" attr(title) ")";
      }
      a[href^="javascript:"]:after,
      a[href^="#"]:after {
          content: "";
      }
      blockquote,
      pre {
          border: 1px solid #999;
      }
      thead {
          display: table-header-group;
      }
      img {
          max-width: 100% !important;
      }
      h2,
      h3,
      p {
          orphans: 3;
          widows: 3;
      }
      h2,
      h3 {
          page-break-after: avoid;
      }
      .navbar {
          display: none;
      }
      .btn > .caret,
      .dropup > .btn > .caret {
          border-top-color: #000 !important;
      }
      .label {
          border: 1px solid #000;
      }
      .table {
          border-collapse: collapse !important;
      }
      .table td,
      .table th {
          background-color: #fff !important;
      }
      .table-bordered td,
      .table-bordered th {
          border: 1px solid #ddd !important;
      }
  }
  .btn,
  .btn-danger.active,
  .btn-danger:active,
  .btn-default.active,
  .btn-default:active,
  .btn-info.active,
  .btn-info:active,
  .btn-primary.active,
  .btn-primary:active,
  .btn-warning.active,
  .btn-warning:active,
  .btn.active,
  .btn:active,
  .dropdown-menu > .disabled > a:focus,
  .dropdown-menu > .disabled > a:hover,
  .form-control,
  .navbar-toggle,
  .open > .dropdown-toggle.btn-danger,
  .open > .dropdown-toggle.btn-default,
  .open > .dropdown-toggle.btn-info,
  .open > .dropdown-toggle.btn-primary,
  .open > .dropdown-toggle.btn-warning {
      background-image: none;
  }
  @font-face {
      font-family: "Glyphicons Halflings";
      src: url(/fonts/glyphicons-halflings-regular.eot);
      src: url(/fonts/glyphicons-halflings-regular.eot?#iefix) format("embedded-opentype"), url(/fonts/glyphicons-halflings-regular.woff2) format("woff2"), url(/fonts/glyphicons-halflings-regular.woff) format("woff"),
          url(/fonts/glyphicons-halflings-regular.ttf) format("truetype"), url(/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format("svg");
  }
  .glyphicon {
      position: relative;
      top: 1px;
      display: inline-block;
      font-family: "Glyphicons Halflings";
      font-weight: 400;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .glyphicon-asterisk:before {
      content: "\002a";
  }
  .glyphicon-plus:before {
      content: "\002b";
  }
  .glyphicon-eur:before,
  .glyphicon-euro:before {
      content: "\20ac";
  }
  .glyphicon-minus:before {
      content: "\2212";
  }
  .glyphicon-cloud:before {
      content: "\2601";
  }
  .glyphicon-envelope:before {
      content: "\2709";
  }
  .glyphicon-pencil:before {
      content: "\270f";
  }
  .glyphicon-glass:before {
      content: "\e001";
  }
  .glyphicon-music:before {
      content: "\e002";
  }
  .glyphicon-search:before {
      content: "\e003";
  }
  .glyphicon-heart:before {
      content: "\e005";
  }
  .glyphicon-star:before {
      content: "\e006";
  }
  .glyphicon-star-empty:before {
      content: "\e007";
  }
  .glyphicon-user:before {
      content: "\e008";
  }
  .glyphicon-film:before {
      content: "\e009";
  }
  .glyphicon-th-large:before {
      content: "\e010";
  }
  .glyphicon-th:before {
      content: "\e011";
  }
  .glyphicon-th-list:before {
      content: "\e012";
  }
  .glyphicon-ok:before {
      content: "\e013";
  }
  .glyphicon-remove:before {
      content: "\e014";
  }
  .glyphicon-zoom-in:before {
      content: "\e015";
  }
  .glyphicon-zoom-out:before {
      content: "\e016";
  }
  .glyphicon-off:before {
      content: "\e017";
  }
  .glyphicon-signal:before {
      content: "\e018";
  }
  .glyphicon-cog:before {
      content: "\e019";
  }
  .glyphicon-trash:before {
      content: "\e020";
  }
  .glyphicon-home:before {
      content: "\e021";
  }
  .glyphicon-file:before {
      content: "\e022";
  }
  .glyphicon-time:before {
      content: "\e023";
  }
  .glyphicon-road:before {
      content: "\e024";
  }
  .glyphicon-download-alt:before {
      content: "\e025";
  }
  .glyphicon-download:before {
      content: "\e026";
  }
  .glyphicon-upload:before {
      content: "\e027";
  }
  .glyphicon-inbox:before {
      content: "\e028";
  }
  .glyphicon-play-circle:before {
      content: "\e029";
  }
  .glyphicon-repeat:before {
      content: "\e030";
  }
  .glyphicon-refresh:before {
      content: "\e031";
  }
  .glyphicon-list-alt:before {
      content: "\e032";
  }
  .glyphicon-lock:before {
      content: "\e033";
  }
  .glyphicon-flag:before {
      content: "\e034";
  }
  .glyphicon-headphones:before {
      content: "\e035";
  }
  .glyphicon-volume-off:before {
      content: "\e036";
  }
  .glyphicon-volume-down:before {
      content: "\e037";
  }
  .glyphicon-volume-up:before {
      content: "\e038";
  }
  .glyphicon-qrcode:before {
      content: "\e039";
  }
  .glyphicon-barcode:before {
      content: "\e040";
  }
  .glyphicon-tag:before {
      content: "\e041";
  }
  .glyphicon-tags:before {
      content: "\e042";
  }
  .glyphicon-book:before {
      content: "\e043";
  }
  .glyphicon-bookmark:before {
      content: "\e044";
  }
  .glyphicon-print:before {
      content: "\e045";
  }
  .glyphicon-camera:before {
      content: "\e046";
  }
  .glyphicon-font:before {
      content: "\e047";
  }
  .glyphicon-bold:before {
      content: "\e048";
  }
  .glyphicon-italic:before {
      content: "\e049";
  }
  .glyphicon-text-height:before {
      content: "\e050";
  }
  .glyphicon-text-width:before {
      content: "\e051";
  }
  .glyphicon-align-left:before {
      content: "\e052";
  }
  .glyphicon-align-center:before {
      content: "\e053";
  }
  .glyphicon-align-right:before {
      content: "\e054";
  }
  .glyphicon-align-justify:before {
      content: "\e055";
  }
  .glyphicon-list:before {
      content: "\e056";
  }
  .glyphicon-indent-left:before {
      content: "\e057";
  }
  .glyphicon-indent-right:before {
      content: "\e058";
  }
  .glyphicon-facetime-video:before {
      content: "\e059";
  }
  .glyphicon-picture:before {
      content: "\e060";
  }
  .glyphicon-map-marker:before {
      content: "\e062";
  }
  .glyphicon-adjust:before {
      content: "\e063";
  }
  .glyphicon-tint:before {
      content: "\e064";
  }
  .glyphicon-edit:before {
      content: "\e065";
  }
  .glyphicon-share:before {
      content: "\e066";
  }
  .glyphicon-check:before {
      content: "\e067";
  }
  .glyphicon-move:before {
      content: "\e068";
  }
  .glyphicon-step-backward:before {
      content: "\e069";
  }
  .glyphicon-fast-backward:before {
      content: "\e070";
  }
  .glyphicon-backward:before {
      content: "\e071";
  }
  .glyphicon-play:before {
      content: "\e072";
  }
  .glyphicon-pause:before {
      content: "\e073";
  }
  .glyphicon-stop:before {
      content: "\e074";
  }
  .glyphicon-forward:before {
      content: "\e075";
  }
  .glyphicon-fast-forward:before {
      content: "\e076";
  }
  .glyphicon-step-forward:before {
      content: "\e077";
  }
  .glyphicon-eject:before {
      content: "\e078";
  }
  .glyphicon-chevron-left:before {
      content: "\e079";
  }
  .glyphicon-chevron-right:before {
      content: "\e080";
  }
  .glyphicon-plus-sign:before {
      content: "\e081";
  }
  .glyphicon-minus-sign:before {
      content: "\e082";
  }
  .glyphicon-remove-sign:before {
      content: "\e083";
  }
  .glyphicon-ok-sign:before {
      content: "\e084";
  }
  .glyphicon-question-sign:before {
      content: "\e085";
  }
  .glyphicon-info-sign:before {
      content: "\e086";
  }
  .glyphicon-screenshot:before {
      content: "\e087";
  }
  .glyphicon-remove-circle:before {
      content: "\e088";
  }
  .glyphicon-ok-circle:before {
      content: "\e089";
  }
  .glyphicon-ban-circle:before {
      content: "\e090";
  }
  .glyphicon-arrow-left:before {
      content: "\e091";
  }
  .glyphicon-arrow-right:before {
      content: "\e092";
  }
  .glyphicon-arrow-up:before {
      content: "\e093";
  }
  .glyphicon-arrow-down:before {
      content: "\e094";
  }
  .glyphicon-share-alt:before {
      content: "\e095";
  }
  .glyphicon-resize-full:before {
      content: "\e096";
  }
  .glyphicon-resize-small:before {
      content: "\e097";
  }
  .glyphicon-exclamation-sign:before {
      content: "\e101";
  }
  .glyphicon-gift:before {
      content: "\e102";
  }
  .glyphicon-leaf:before {
      content: "\e103";
  }
  .glyphicon-fire:before {
      content: "\e104";
  }
  .glyphicon-eye-open:before {
      content: "\e105";
  }
  .glyphicon-eye-close:before {
      content: "\e106";
  }
  .glyphicon-warning-sign:before {
      content: "\e107";
  }
  .glyphicon-plane:before {
      content: "\e108";
  }
  .glyphicon-calendar:before {
      content: "\e109";
  }
  .glyphicon-random:before {
      content: "\e110";
  }
  .glyphicon-comment:before {
      content: "\e111";
  }
  .glyphicon-magnet:before {
      content: "\e112";
  }
  .glyphicon-chevron-up:before {
      content: "\e113";
  }
  .glyphicon-chevron-down:before {
      content: "\e114";
  }
  .glyphicon-retweet:before {
      content: "\e115";
  }
  .glyphicon-shopping-cart:before {
      content: "\e116";
  }
  .glyphicon-folder-close:before {
      content: "\e117";
  }
  .glyphicon-folder-open:before {
      content: "\e118";
  }
  .glyphicon-resize-vertical:before {
      content: "\e119";
  }
  .glyphicon-resize-horizontal:before {
      content: "\e120";
  }
  .glyphicon-hdd:before {
      content: "\e121";
  }
  .glyphicon-bullhorn:before {
      content: "\e122";
  }
  .glyphicon-bell:before {
      content: "\e123";
  }
  .glyphicon-certificate:before {
      content: "\e124";
  }
  .glyphicon-thumbs-up:before {
      content: "\e125";
  }
  .glyphicon-thumbs-down:before {
      content: "\e126";
  }
  .glyphicon-hand-right:before {
      content: "\e127";
  }
  .glyphicon-hand-left:before {
      content: "\e128";
  }
  .glyphicon-hand-up:before {
      content: "\e129";
  }
  .glyphicon-hand-down:before {
      content: "\e130";
  }
  .glyphicon-circle-arrow-right:before {
      content: "\e131";
  }
  .glyphicon-circle-arrow-left:before {
      content: "\e132";
  }
  .glyphicon-circle-arrow-up:before {
      content: "\e133";
  }
  .glyphicon-circle-arrow-down:before {
      content: "\e134";
  }
  .glyphicon-globe:before {
      content: "\e135";
  }
  .glyphicon-wrench:before {
      content: "\e136";
  }
  .glyphicon-tasks:before {
      content: "\e137";
  }
  .glyphicon-filter:before {
      content: "\e138";
  }
  .glyphicon-briefcase:before {
      content: "\e139";
  }
  .glyphicon-fullscreen:before {
      content: "\e140";
  }
  .glyphicon-dashboard:before {
      content: "\e141";
  }
  .glyphicon-paperclip:before {
      content: "\e142";
  }
  .glyphicon-heart-empty:before {
      content: "\e143";
  }
  .glyphicon-link:before {
      content: "\e144";
  }
  .glyphicon-phone:before {
      content: "\e145";
  }
  .glyphicon-pushpin:before {
      content: "\e146";
  }
  .glyphicon-usd:before {
      content: "\e148";
  }
  .glyphicon-gbp:before {
      content: "\e149";
  }
  .glyphicon-sort:before {
      content: "\e150";
  }
  .glyphicon-sort-by-alphabet:before {
      content: "\e151";
  }
  .glyphicon-sort-by-alphabet-alt:before {
      content: "\e152";
  }
  .glyphicon-sort-by-order:before {
      content: "\e153";
  }
  .glyphicon-sort-by-order-alt:before {
      content: "\e154";
  }
  .glyphicon-sort-by-attributes:before {
      content: "\e155";
  }
  .glyphicon-sort-by-attributes-alt:before {
      content: "\e156";
  }
  .glyphicon-unchecked:before {
      content: "\e157";
  }
  .glyphicon-expand:before {
      content: "\e158";
  }
  .glyphicon-collapse-down:before {
      content: "\e159";
  }
  .glyphicon-collapse-up:before {
      content: "\e160";
  }
  .glyphicon-log-in:before {
      content: "\e161";
  }
  .glyphicon-flash:before {
      content: "\e162";
  }
  .glyphicon-log-out:before {
      content: "\e163";
  }
  .glyphicon-new-window:before {
      content: "\e164";
  }
  .glyphicon-record:before {
      content: "\e165";
  }
  .glyphicon-save:before {
      content: "\e166";
  }
  .glyphicon-open:before {
      content: "\e167";
  }
  .glyphicon-saved:before {
      content: "\e168";
  }
  .glyphicon-import:before {
      content: "\e169";
  }
  .glyphicon-export:before {
      content: "\e170";
  }
  .glyphicon-send:before {
      content: "\e171";
  }
  .glyphicon-floppy-disk:before {
      content: "\e172";
  }
  .glyphicon-floppy-saved:before {
      content: "\e173";
  }
  .glyphicon-floppy-remove:before {
      content: "\e174";
  }
  .glyphicon-floppy-save:before {
      content: "\e175";
  }
  .glyphicon-floppy-open:before {
      content: "\e176";
  }
  .glyphicon-credit-card:before {
      content: "\e177";
  }
  .glyphicon-transfer:before {
      content: "\e178";
  }
  .glyphicon-cutlery:before {
      content: "\e179";
  }
  .glyphicon-header:before {
      content: "\e180";
  }
  .glyphicon-compressed:before {
      content: "\e181";
  }
  .glyphicon-earphone:before {
      content: "\e182";
  }
  .glyphicon-phone-alt:before {
      content: "\e183";
  }
  .glyphicon-tower:before {
      content: "\e184";
  }
  .glyphicon-stats:before {
      content: "\e185";
  }
  .glyphicon-sd-video:before {
      content: "\e186";
  }
  .glyphicon-hd-video:before {
      content: "\e187";
  }
  .glyphicon-subtitles:before {
      content: "\e188";
  }
  .glyphicon-sound-stereo:before {
      content: "\e189";
  }
  .glyphicon-sound-dolby:before {
      content: "\e190";
  }
  .glyphicon-sound-5-1:before {
      content: "\e191";
  }
  .glyphicon-sound-6-1:before {
      content: "\e192";
  }
  .glyphicon-sound-7-1:before {
      content: "\e193";
  }
  .glyphicon-copyright-mark:before {
      content: "\e194";
  }
  .glyphicon-registration-mark:before {
      content: "\e195";
  }
  .glyphicon-cloud-download:before {
      content: "\e197";
  }
  .glyphicon-cloud-upload:before {
      content: "\e198";
  }
  .glyphicon-tree-conifer:before {
      content: "\e199";
  }
  .glyphicon-tree-deciduous:before {
      content: "\e200";
  }
  .glyphicon-cd:before {
      content: "\e201";
  }
  .glyphicon-save-file:before {
      content: "\e202";
  }
  .glyphicon-open-file:before {
      content: "\e203";
  }
  .glyphicon-level-up:before {
      content: "\e204";
  }
  .glyphicon-copy:before {
      content: "\e205";
  }
  .glyphicon-paste:before {
      content: "\e206";
  }
  .glyphicon-alert:before {
      content: "\e209";
  }
  .glyphicon-equalizer:before {
      content: "\e210";
  }
  .glyphicon-king:before {
      content: "\e211";
  }
  .glyphicon-queen:before {
      content: "\e212";
  }
  .glyphicon-pawn:before {
      content: "\e213";
  }
  .glyphicon-bishop:before {
      content: "\e214";
  }
  .glyphicon-knight:before {
      content: "\e215";
  }
  .glyphicon-baby-formula:before {
      content: "\e216";
  }
  .glyphicon-tent:before {
      content: "\26fa";
  }
  .glyphicon-blackboard:before {
      content: "\e218";
  }
  .glyphicon-bed:before {
      content: "\e219";
  }
  .glyphicon-apple:before {
      content: "\f8ff";
  }
  .glyphicon-erase:before {
      content: "\e221";
  }
  .glyphicon-hourglass:before {
      content: "\231b";
  }
  .glyphicon-lamp:before {
      content: "\e223";
  }
  .glyphicon-duplicate:before {
      content: "\e224";
  }
  .glyphicon-piggy-bank:before {
      content: "\e225";
  }
  .glyphicon-scissors:before {
      content: "\e226";
  }
  .glyphicon-bitcoin:before,
  .glyphicon-btc:before,
  .glyphicon-xbt:before {
      content: "\e227";
  }
  .glyphicon-jpy:before,
  .glyphicon-yen:before {
      content: "\00a5";
  }
  .glyphicon-rub:before,
  .glyphicon-ruble:before {
      content: "\20bd";
  }
  .glyphicon-scale:before {
      content: "\e230";
  }
  .glyphicon-ice-lolly:before {
      content: "\e231";
  }
  .glyphicon-ice-lolly-tasted:before {
      content: "\e232";
  }
  .glyphicon-education:before {
      content: "\e233";
  }
  .glyphicon-option-horizontal:before {
      content: "\e234";
  }
  .glyphicon-option-vertical:before {
      content: "\e235";
  }
  .glyphicon-menu-hamburger:before {
      content: "\e236";
  }
  .glyphicon-modal-window:before {
      content: "\e237";
  }
  .glyphicon-oil:before {
      content: "\e238";
  }
  .glyphicon-grain:before {
      content: "\e239";
  }
  .glyphicon-sunglasses:before {
      content: "\e240";
  }
  .glyphicon-text-size:before {
      content: "\e241";
  }
  .glyphicon-text-color:before {
      content: "\e242";
  }
  .glyphicon-text-background:before {
      content: "\e243";
  }
  .glyphicon-object-align-top:before {
      content: "\e244";
  }
  .glyphicon-object-align-bottom:before {
      content: "\e245";
  }
  .glyphicon-object-align-horizontal:before {
      content: "\e246";
  }
  .glyphicon-object-align-left:before {
      content: "\e247";
  }
  .glyphicon-object-align-vertical:before {
      content: "\e248";
  }
  .glyphicon-object-align-right:before {
      content: "\e249";
  }
  .glyphicon-triangle-right:before {
      content: "\e250";
  }
  .glyphicon-triangle-left:before {
      content: "\e251";
  }
  .glyphicon-triangle-bottom:before {
      content: "\e252";
  }
  .glyphicon-triangle-top:before {
      content: "\e253";
  }
  .glyphicon-console:before {
      content: "\e254";
  }
  .glyphicon-superscript:before {
      content: "\e255";
  }
  .glyphicon-subscript:before {
      content: "\e256";
  }
  .glyphicon-menu-left:before {
      content: "\e257";
  }
  .glyphicon-menu-right:before {
      content: "\e258";
  }
  .glyphicon-menu-down:before {
      content: "\e259";
  }
  .glyphicon-menu-up:before {
      content: "\e260";
  }
  *,
  :after,
  :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  html {
      font-size: 10px;
  }
  body {
      font-family: roboto;
      font-size: 13px;
      line-height: 1.42857143;
      color: #5e5e5e;
      background-color: #edecec;
  }
  button,
  input,
  select,
  textarea {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
  }
  a {
      color: #61a3d2;
      text-decoration: none;
  }
  a:focus,
  a:hover {
      color: #0a6ebd;
      text-decoration: none;
  }
  a:focus {
      outline-offset: -2px;
      outline: 0 !important;
  }
  .carousel-inner > .item > a > img,
  .carousel-inner > .item > img,
  .img-responsive,
  .thumbnail a > img,
  .thumbnail > img {
      display: block;
      max-width: 100%;
      height: auto;
  }
  .img-rounded {
      border-radius: 2px;
  }
  .img-thumbnail {
      padding: 3px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ededed;
      border-radius: 2px;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      display: inline-block;
      max-width: 100%;
      height: auto;
  }
  .img-circle {
      border-radius: 50%;
  }
  hr {
      margin-top: 18px;
      margin-bottom: 18px;
      border-top: 1px solid #eee;
  }
  .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
  }
  .sr-only-focusable:active,
  .sr-only-focusable:focus {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      clip: auto;
  }
  [role="button"] {
      cursor: pointer;
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      color: #000;
  }
  .h1 .small,
  .h1 small,
  .h2 .small,
  .h2 small,
  .h3 .small,
  .h3 small,
  .h4 .small,
  .h4 small,
  .h5 .small,
  .h5 small,
  .h6 .small,
  .h6 small,
  h1 .small,
  h1 small,
  h2 .small,
  h2 small,
  h3 .small,
  h3 small,
  h4 .small,
  h4 small,
  h5 .small,
  h5 small,
  h6 .small,
  h6 small {
      font-weight: 400;
      line-height: 1;
      color: #aeaeae;
  }
  .h1,
  .h2,
  .h3,
  h1,
  h2,
  h3 {
      margin-top: 18px;
      margin-bottom: 9px;
  }
  .h1 .small,
  .h1 small,
  .h2 .small,
  .h2 small,
  .h3 .small,
  .h3 small,
  h1 .small,
  h1 small,
  h2 .small,
  h2 small,
  h3 .small,
  h3 small {
      font-size: 65%;
  }
  .h4,
  .h5,
  .h6,
  h4,
  h5,
  h6 {
      margin-top: 9px;
      margin-bottom: 9px;
  }
  .h4 .small,
  .h4 small,
  .h5 .small,
  .h5 small,
  .h6 .small,
  .h6 small,
  h4 .small,
  h4 small,
  h5 .small,
  h5 small,
  h6 .small,
  h6 small {
      font-size: 75%;
  }
  .h1,
  h1 {
      font-size: 33px;
  }
  .h2,
  h2 {
      font-size: 27px;
  }
  .h3,
  h3 {
      font-size: 23px;
  }
  .h4,
  h4 {
      font-size: 17px;
  }
  .h5,
  h5 {
      font-size: 13px;
  }
  .h6,
  h6 {
      font-size: 12px;
  }
  p {
      margin: 0 0 9px;
  }
  .lead {
      margin-bottom: 18px;
      font-size: 14px;
      font-weight: 300;
      line-height: 1.4;
  }
  dt,
  kbd kbd {
      font-weight: 700;
  }
  address,
  blockquote .small,
  blockquote footer,
  blockquote small,
  dd,
  dt,
  pre {
      line-height: 1.42857143;
  }
  @media (min-width: 768px) {
      .lead {
          font-size: 19.5px;
      }
  }
  .small,
  small {
      font-size: 92%;
  }
  .mark,
  mark {
      background-color: #ffa829;
      padding: 0.2em;
  }
  .list-inline,
  .list-unstyled {
      padding-left: 0;
      list-style: none;
  }
  .text-left {
      text-align: left;
  }
  .text-right {
      text-align: right;
  }
  .text-center {
      text-align: center;
  }
  .text-justify {
      text-align: justify;
  }
  .text-nowrap {
      white-space: nowrap;
  }
  .text-lowercase {
      text-transform: lowercase;
  }
  .text-uppercase {
      text-transform: uppercase;
  }
  .text-capitalize {
      text-transform: capitalize;
  }
  .text-muted {
      color: #777;
  }
  .text-primary {
      color: #61a3d2;
  }
  a.text-primary:focus,
  a.text-primary:hover {
      color: #0c7cd5;
  }
  .text-success {
      color: #67bd6a;
  }
  a.text-success:focus,
  a.text-success:hover {
      color: #49a84d;
  }
  .text-info {
      color: #31708f;
  }
  a.text-info:focus,
  a.text-info:hover {
      color: #245269;
  }
  .text-warning {
      color: #ffa829;
  }
  a.text-warning:focus,
  a.text-warning:hover {
      color: #f59200;
  }
  .text-danger {
      color: #f6675d;
  }
  a.text-danger:focus,
  a.text-danger:hover {
      color: #f33a2c;
  }
  .bg-primary {
      color: #fff;
      background-color: #61a3d2;
  }
  a.bg-primary:focus,
  a.bg-primary:hover {
      background-color: #0c7cd5;
  }
  .bg-success {
      background-color: #67bd6a;
  }
  a.bg-success:focus,
  a.bg-success:hover {
      background-color: #49a84d;
  }
  .bg-info {
      background-color: #d9edf7;
  }
  a.bg-info:focus,
  a.bg-info:hover {
      background-color: #afd9ee;
  }
  .bg-warning {
      background-color: #ffa829;
  }
  a.bg-warning:focus,
  a.bg-warning:hover {
      background-color: #f59200;
  }
  .bg-danger {
      background-color: #f6675d;
  }
  a.bg-danger:focus,
  a.bg-danger:hover {
      background-color: #f33a2c;
  }
  pre code,
  table {
      background-color: transparent;
  }
  .page-header {
      padding-bottom: 8px;
      margin: 36px 0 18px;
      border-bottom: 1px solid #eee;
  }
  dl,
  ol,
  ul {
      margin-top: 0;
  }
  blockquote ol:last-child,
  blockquote p:last-child,
  blockquote ul:last-child,
  ol ol,
  ol ul,
  ul ol,
  ul ul {
      margin-bottom: 0;
  }
  address,
  dl {
      margin-bottom: 18px;
  }
  ol,
  ul {
      margin-bottom: 9px;
  }
  .list-inline {
      margin-left: -5px;
  }
  .list-inline > li {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
  }
  dd {
      margin-left: 0;
  }
  @media (min-width: 768px) {
      .dl-horizontal dt {
          float: left;
          width: 160px;
          clear: left;
          text-align: right;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
      .dl-horizontal dd {
          margin-left: 180px;
      }
      .container {
          width: 100%;
      }
  }
  .btn-group-vertical > .btn-group:after,
  .btn-toolbar:after,
  .clearfix:after,
  .container-fluid:after,
  .container:after,
  .dl-horizontal dd:after,
  .form-horizontal .form-group:after,
  .lightbox [data-src]:after,
  .media:after,
  .modal-footer:after,
  .modal-header:after,
  .nav:after,
  .navbar-collapse:after,
  .navbar-header:after,
  .navbar:after,
  .pager:after,
  .panel-body:after,
  .picture-list .pl-body:after,
  .row:after {
      clear: both;
  }
  abbr[data-original-title],
  abbr[title] {
      cursor: help;
      border-bottom: 1px dotted #777;
  }
  .initialism {
      font-size: 90%;
      text-transform: uppercase;
  }
  blockquote {
      padding: 9px 18px;
      margin: 0 0 18px;
      font-size: 16.25px;
      border-left: 5px solid #eee;
  }
  blockquote .small,
  blockquote footer,
  blockquote small {
      display: block;
      font-size: 80%;
      color: #777;
  }
  legend,
  pre {
      display: block;
      color: #333;
  }
  blockquote .small:before,
  blockquote footer:before,
  blockquote small:before {
      content: "\2014 \00A0";
  }
  .blockquote-reverse,
  blockquote.pull-right {
      padding-right: 15px;
      padding-left: 0;
      border-right: 5px solid #eee;
      border-left: 0;
      text-align: right;
  }
  code,
  kbd {
      padding: 2px 4px;
      font-size: 90%;
      border-radius: 2px;
  }
  caption,
  th {
      text-align: left;
  }
  .blockquote-reverse .small:before,
  .blockquote-reverse footer:before,
  .blockquote-reverse small:before,
  blockquote.pull-right .small:before,
  blockquote.pull-right footer:before,
  blockquote.pull-right small:before {
      content: "";
  }
  .blockquote-reverse .small:after,
  .blockquote-reverse footer:after,
  .blockquote-reverse small:after,
  blockquote.pull-right .small:after,
  blockquote.pull-right footer:after,
  blockquote.pull-right small:after {
      content: "\00A0 \2014";
  }
  .hi-trigger:before,
  .him-notification:before,
  .popover > .arrow:after {
      content: "";
  }
  code,
  kbd,
  pre,
  samp {
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  code {
      color: #c7254e;
      background-color: #f9f2f4;
  }
  kbd {
      color: #fff;
      background-color: #333;
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  kbd kbd {
      padding: 0;
      font-size: 100%;
      box-shadow: none;
  }
  pre {
      padding: 8.5px;
      margin: 0 0 9px;
      font-size: 12px;
      word-break: break-all;
      word-wrap: break-word;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 2px;
  }
  .container,
  .container-fluid {
      margin-right: auto;
      margin-left: auto;
  }
  pre code {
      padding: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      border-radius: 0;
  }
  .container,
  .container-fluid {
      padding-left: 15px;
      padding-right: 15px;
  }
  .pre-scrollable {
      overflow-y: scroll;
  }
  @media (min-width: 992px) {
      .container {
          width: 100%;
      }
  }
  @media (min-width: 1200px) {
      .container {
          width: 100%;
      }
  }
  .row {
      margin-left: -15px;
      margin-right: -15px;
  }
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-xs-1,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9 {
      position: relative;
      min-height: 1px;
      padding-left: 15px;
      padding-right: 15px;
  }
  .col-xs-1,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9 {
      float: left;
  }
  .col-xs-12 {
      width: 100%;
  }
  .col-xs-11 {
      width: 91.66666667%;
  }
  .col-xs-10 {
      width: 83.33333333%;
  }
  .col-xs-9 {
      width: 75%;
  }
  .col-xs-8 {
      width: 66.66666667%;
  }
  .col-xs-7 {
      width: 58.33333333%;
  }
  .col-xs-6 {
      width: 50%;
  }
  .col-xs-5 {
      width: 41.66666667%;
  }
  .col-xs-4 {
      width: 33.33333333%;
  }
  .col-xs-3 {
      width: 25%;
  }
  .col-xs-2 {
      width: 16.66666667%;
  }
  .col-xs-1 {
      width: 8.33333333%;
  }
  .col-xs-pull-12 {
      right: 100%;
  }
  .col-xs-pull-11 {
      right: 91.66666667%;
  }
  .col-xs-pull-10 {
      right: 83.33333333%;
  }
  .col-xs-pull-9 {
      right: 75%;
  }
  .col-xs-pull-8 {
      right: 66.66666667%;
  }
  .col-xs-pull-7 {
      right: 58.33333333%;
  }
  .col-xs-pull-6 {
      right: 50%;
  }
  .col-xs-pull-5 {
      right: 41.66666667%;
  }
  .col-xs-pull-4 {
      right: 33.33333333%;
  }
  .col-xs-pull-3 {
      right: 25%;
  }
  .col-xs-pull-2 {
      right: 16.66666667%;
  }
  .col-xs-pull-1 {
      right: 8.33333333%;
  }
  .col-xs-pull-0 {
      right: auto;
  }
  .col-xs-push-12 {
      left: 100%;
  }
  .col-xs-push-11 {
      left: 91.66666667%;
  }
  .col-xs-push-10 {
      left: 83.33333333%;
  }
  .col-xs-push-9 {
      left: 75%;
  }
  .col-xs-push-8 {
      left: 66.66666667%;
  }
  .col-xs-push-7 {
      left: 58.33333333%;
  }
  .col-xs-push-6 {
      left: 50%;
  }
  .col-xs-push-5 {
      left: 41.66666667%;
  }
  .col-xs-push-4 {
      left: 33.33333333%;
  }
  .col-xs-push-3 {
      left: 25%;
  }
  .col-xs-push-2 {
      left: 16.66666667%;
  }
  .col-xs-push-1 {
      left: 8.33333333%;
  }
  .col-xs-push-0 {
      left: auto;
  }
  .col-xs-offset-12 {
      margin-left: 100%;
  }
  .col-xs-offset-11 {
      margin-left: 91.66666667%;
  }
  .col-xs-offset-10 {
      margin-left: 83.33333333%;
  }
  .col-xs-offset-9 {
      margin-left: 75%;
  }
  .col-xs-offset-8 {
      margin-left: 66.66666667%;
  }
  .col-xs-offset-7 {
      margin-left: 58.33333333%;
  }
  .col-xs-offset-6 {
      margin-left: 50%;
  }
  .col-xs-offset-5 {
      margin-left: 41.66666667%;
  }
  .col-xs-offset-4 {
      margin-left: 33.33333333%;
  }
  .col-xs-offset-3 {
      margin-left: 25%;
  }
  .col-xs-offset-2 {
      margin-left: 16.66666667%;
  }
  .col-xs-offset-1 {
      margin-left: 8.33333333%;
  }
  .col-xs-offset-0 {
      margin-left: 0;
  }
  @media (min-width: 768px) {
      .col-sm-1,
      .col-sm-10,
      .col-sm-11,
      .col-sm-12,
      .col-sm-2,
      .col-sm-3,
      .col-sm-4,
      .col-sm-5,
      .col-sm-6,
      .col-sm-7,
      .col-sm-8,
      .col-sm-9 {
          float: left;
      }
      .col-sm-12 {
          width: 100%;
      }
      .col-sm-11 {
          width: 91.66666667%;
      }
      .col-sm-10 {
          width: 83.33333333%;
      }
      .col-sm-9 {
          width: 75%;
      }
      .col-sm-8 {
          width: 66.66666667%;
      }
      .col-sm-7 {
          width: 58.33333333%;
      }
      .col-sm-6 {
          width: 50%;
      }
      .col-sm-5 {
          width: 41.66666667%;
      }
      .col-sm-4 {
          width: 33.33333333%;
      }
      .col-sm-3 {
          width: 25%;
      }
      .col-sm-2 {
          width: 16.66666667%;
      }
      .col-sm-1 {
          width: 8.33333333%;
      }
      .col-sm-pull-12 {
          right: 100%;
      }
      .col-sm-pull-11 {
          right: 91.66666667%;
      }
      .col-sm-pull-10 {
          right: 83.33333333%;
      }
      .col-sm-pull-9 {
          right: 75%;
      }
      .col-sm-pull-8 {
          right: 66.66666667%;
      }
      .col-sm-pull-7 {
          right: 58.33333333%;
      }
      .col-sm-pull-6 {
          right: 50%;
      }
      .col-sm-pull-5 {
          right: 41.66666667%;
      }
      .col-sm-pull-4 {
          right: 33.33333333%;
      }
      .col-sm-pull-3 {
          right: 25%;
      }
      .col-sm-pull-2 {
          right: 16.66666667%;
      }
      .col-sm-pull-1 {
          right: 8.33333333%;
      }
      .col-sm-pull-0 {
          right: auto;
      }
      .col-sm-push-12 {
          left: 100%;
      }
      .col-sm-push-11 {
          left: 91.66666667%;
      }
      .col-sm-push-10 {
          left: 83.33333333%;
      }
      .col-sm-push-9 {
          left: 75%;
      }
      .col-sm-push-8 {
          left: 66.66666667%;
      }
      .col-sm-push-7 {
          left: 58.33333333%;
      }
      .col-sm-push-6 {
          left: 50%;
      }
      .col-sm-push-5 {
          left: 41.66666667%;
      }
      .col-sm-push-4 {
          left: 33.33333333%;
      }
      .col-sm-push-3 {
          left: 25%;
      }
      .col-sm-push-2 {
          left: 16.66666667%;
      }
      .col-sm-push-1 {
          left: 8.33333333%;
      }
      .col-sm-push-0 {
          left: auto;
      }
      .col-sm-offset-12 {
          margin-left: 100%;
      }
      .col-sm-offset-11 {
          margin-left: 91.66666667%;
      }
      .col-sm-offset-10 {
          margin-left: 83.33333333%;
      }
      .col-sm-offset-9 {
          margin-left: 75%;
      }
      .col-sm-offset-8 {
          margin-left: 66.66666667%;
      }
      .col-sm-offset-7 {
          margin-left: 58.33333333%;
      }
      .col-sm-offset-6 {
          margin-left: 50%;
      }
      .col-sm-offset-5 {
          margin-left: 41.66666667%;
      }
      .col-sm-offset-4 {
          margin-left: 33.33333333%;
      }
      .col-sm-offset-3 {
          margin-left: 25%;
      }
      .col-sm-offset-2 {
          margin-left: 16.66666667%;
      }
      .col-sm-offset-1 {
          margin-left: 8.33333333%;
      }
      .col-sm-offset-0 {
          margin-left: 0;
      }
  }
  @media (min-width: 992px) {
      .col-md-1,
      .col-md-10,
      .col-md-11,
      .col-md-12,
      .col-md-2,
      .col-md-3,
      .col-md-4,
      .col-md-5,
      .col-md-6,
      .col-md-7,
      .col-md-8,
      .col-md-9 {
          float: left;
      }
      .col-md-12 {
          width: 100%;
      }
      .col-md-11 {
          width: 91.66666667%;
      }
      .col-md-10 {
          width: 83.33333333%;
      }
      .col-md-9 {
          width: 75%;
      }
      .col-md-8 {
          width: 66.66666667%;
      }
      .col-md-7 {
          width: 58.33333333%;
      }
      .col-md-6 {
          width: 50%;
      }
      .col-md-5 {
          width: 41.66666667%;
      }
      .col-md-4 {
          width: 33.33333333%;
      }
      .col-md-3 {
          width: 25%;
      }
      .col-md-2 {
          width: 16.66666667%;
      }
      .col-md-1 {
          width: 8.33333333%;
      }
      .col-md-pull-12 {
          right: 100%;
      }
      .col-md-pull-11 {
          right: 91.66666667%;
      }
      .col-md-pull-10 {
          right: 83.33333333%;
      }
      .col-md-pull-9 {
          right: 75%;
      }
      .col-md-pull-8 {
          right: 66.66666667%;
      }
      .col-md-pull-7 {
          right: 58.33333333%;
      }
      .col-md-pull-6 {
          right: 50%;
      }
      .col-md-pull-5 {
          right: 41.66666667%;
      }
      .col-md-pull-4 {
          right: 33.33333333%;
      }
      .col-md-pull-3 {
          right: 25%;
      }
      .col-md-pull-2 {
          right: 16.66666667%;
      }
      .col-md-pull-1 {
          right: 8.33333333%;
      }
      .col-md-pull-0 {
          right: auto;
      }
      .col-md-push-12 {
          left: 100%;
      }
      .col-md-push-11 {
          left: 91.66666667%;
      }
      .col-md-push-10 {
          left: 83.33333333%;
      }
      .col-md-push-9 {
          left: 75%;
      }
      .col-md-push-8 {
          left: 66.66666667%;
      }
      .col-md-push-7 {
          left: 58.33333333%;
      }
      .col-md-push-6 {
          left: 50%;
      }
      .col-md-push-5 {
          left: 41.66666667%;
      }
      .col-md-push-4 {
          left: 33.33333333%;
      }
      .col-md-push-3 {
          left: 25%;
      }
      .col-md-push-2 {
          left: 16.66666667%;
      }
      .col-md-push-1 {
          left: 8.33333333%;
      }
      .col-md-push-0 {
          left: auto;
      }
      .col-md-offset-12 {
          margin-left: 100%;
      }
      .col-md-offset-11 {
          margin-left: 91.66666667%;
      }
      .col-md-offset-10 {
          margin-left: 83.33333333%;
      }
      .col-md-offset-9 {
          margin-left: 75%;
      }
      .col-md-offset-8 {
          margin-left: 66.66666667%;
      }
      .col-md-offset-7 {
          margin-left: 58.33333333%;
      }
      .col-md-offset-6 {
          margin-left: 50%;
      }
      .col-md-offset-5 {
          margin-left: 41.66666667%;
      }
      .col-md-offset-4 {
          margin-left: 33.33333333%;
      }
      .col-md-offset-3 {
          margin-left: 25%;
      }
      .col-md-offset-2 {
          margin-left: 16.66666667%;
      }
      .col-md-offset-1 {
          margin-left: 8.33333333%;
      }
      .col-md-offset-0 {
          margin-left: 0;
      }
  }
  @media (min-width: 1200px) {
      .col-lg-1,
      .col-lg-10,
      .col-lg-11,
      .col-lg-12,
      .col-lg-2,
      .col-lg-3,
      .col-lg-4,
      .col-lg-5,
      .col-lg-6,
      .col-lg-7,
      .col-lg-8,
      .col-lg-9 {
          float: left;
      }
      .col-lg-12 {
          width: 100%;
      }
      .col-lg-11 {
          width: 91.66666667%;
      }
      .col-lg-10 {
          width: 83.33333333%;
      }
      .col-lg-9 {
          width: 75%;
      }
      .col-lg-8 {
          width: 66.66666667%;
      }
      .col-lg-7 {
          width: 58.33333333%;
      }
      .col-lg-6 {
          width: 50%;
      }
      .col-lg-5 {
          width: 41.66666667%;
      }
      .col-lg-4 {
          width: 33.33333333%;
      }
      .col-lg-3 {
          width: 25%;
      }
      .col-lg-2 {
          width: 16.66666667%;
      }
      .col-lg-1 {
          width: 8.33333333%;
      }
      .col-lg-pull-12 {
          right: 100%;
      }
      .col-lg-pull-11 {
          right: 91.66666667%;
      }
      .col-lg-pull-10 {
          right: 83.33333333%;
      }
      .col-lg-pull-9 {
          right: 75%;
      }
      .col-lg-pull-8 {
          right: 66.66666667%;
      }
      .col-lg-pull-7 {
          right: 58.33333333%;
      }
      .col-lg-pull-6 {
          right: 50%;
      }
      .col-lg-pull-5 {
          right: 41.66666667%;
      }
      .col-lg-pull-4 {
          right: 33.33333333%;
      }
      .col-lg-pull-3 {
          right: 25%;
      }
      .col-lg-pull-2 {
          right: 16.66666667%;
      }
      .col-lg-pull-1 {
          right: 8.33333333%;
      }
      .col-lg-pull-0 {
          right: auto;
      }
      .col-lg-push-12 {
          left: 100%;
      }
      .col-lg-push-11 {
          left: 91.66666667%;
      }
      .col-lg-push-10 {
          left: 83.33333333%;
      }
      .col-lg-push-9 {
          left: 75%;
      }
      .col-lg-push-8 {
          left: 66.66666667%;
      }
      .col-lg-push-7 {
          left: 58.33333333%;
      }
      .col-lg-push-6 {
          left: 50%;
      }
      .col-lg-push-5 {
          left: 41.66666667%;
      }
      .col-lg-push-4 {
          left: 33.33333333%;
      }
      .col-lg-push-3 {
          left: 25%;
      }
      .col-lg-push-2 {
          left: 16.66666667%;
      }
      .col-lg-push-1 {
          left: 8.33333333%;
      }
      .col-lg-push-0 {
          left: auto;
      }
      .col-lg-offset-12 {
          margin-left: 100%;
      }
      .col-lg-offset-11 {
          margin-left: 91.66666667%;
      }
      .col-lg-offset-10 {
          margin-left: 83.33333333%;
      }
      .col-lg-offset-9 {
          margin-left: 75%;
      }
      .col-lg-offset-8 {
          margin-left: 66.66666667%;
      }
      .col-lg-offset-7 {
          margin-left: 58.33333333%;
      }
      .col-lg-offset-6 {
          margin-left: 50%;
      }
      .col-lg-offset-5 {
          margin-left: 41.66666667%;
      }
      .col-lg-offset-4 {
          margin-left: 33.33333333%;
      }
      .col-lg-offset-3 {
          margin-left: 25%;
      }
      .col-lg-offset-2 {
          margin-left: 16.66666667%;
      }
      .col-lg-offset-1 {
          margin-left: 8.33333333%;
      }
      .col-lg-offset-0 {
          margin-left: 0;
      }
  }
  caption {
      padding-top: 15px;
      padding-bottom: 15px;
      color: #777;
  }
  .table {
      width: 100%;
      max-width: 100%;
  }
  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
      padding: 15px;
      line-height: 1.42857143;
      vertical-align: top;
      border-top: 1px solid #f5f5f5;
  }
  .btn,
  .btn-group,
  .btn-group-vertical,
  .caret {
      vertical-align: middle;
  }
  .table > thead > tr > th {
      border-bottom: 2px solid #f5f5f5;
  }
  .table > caption + thead > tr:first-child > td,
  .table > caption + thead > tr:first-child > th,
  .table > colgroup + thead > tr:first-child > td,
  .table > colgroup + thead > tr:first-child > th,
  .table > thead:first-child > tr:first-child > td,
  .table > thead:first-child > tr:first-child > th {
      border-top: 0;
  }
  .table > tbody + tbody {
      border-top: 2px solid #f5f5f5;
  }
  .table .table {
      background-color: #edecec;
  }
  .table-condensed > tbody > tr > td,
  .table-condensed > tbody > tr > th,
  .table-condensed > tfoot > tr > td,
  .table-condensed > tfoot > tr > th,
  .table-condensed > thead > tr > td,
  .table-condensed > thead > tr > th {
      padding: 10px;
  }
  .table-bordered,
  .table-bordered > tbody > tr > td,
  .table-bordered > tbody > tr > th,
  .table-bordered > tfoot > tr > td,
  .table-bordered > tfoot > tr > th,
  .table-bordered > thead > tr > td,
  .table-bordered > thead > tr > th {
      border: 1px solid #f5f5f5;
  }
  .table-bordered > thead > tr > td,
  .table-bordered > thead > tr > th {
      border-bottom-width: 2px;
  }
  .table-hover > tbody > tr:hover,
  .table-striped > tbody > tr:nth-of-type(odd) {
      background-color: #f4f4f4;
  }
  table col[class*="col-"] {
      position: static;
      float: none;
      display: table-column;
  }
  table td[class*="col-"],
  table th[class*="col-"] {
      position: static;
      float: none;
      display: table-cell;
  }
  .btn-group > .btn-group,
  .btn-toolbar .btn,
  .btn-toolbar .btn-group,
  .btn-toolbar .input-group,
  .dropdown-menu {
      float: left;
  }
  .table > tbody > tr.active > td,
  .table > tbody > tr.active > th,
  .table > tbody > tr > td.active,
  .table > tbody > tr > th.active,
  .table > tfoot > tr.active > td,
  .table > tfoot > tr.active > th,
  .table > tfoot > tr > td.active,
  .table > tfoot > tr > th.active,
  .table > thead > tr.active > td,
  .table > thead > tr.active > th,
  .table > thead > tr > td.active,
  .table > thead > tr > th.active {
      background-color: #fffcbe;
  }
  .table-hover > tbody > tr.active:hover > td,
  .table-hover > tbody > tr.active:hover > th,
  .table-hover > tbody > tr:hover > .active,
  .table-hover > tbody > tr > td.active:hover,
  .table-hover > tbody > tr > th.active:hover {
      background-color: #fffba4;
  }
  .table > tbody > tr.success > td,
  .table > tbody > tr.success > th,
  .table > tbody > tr > td.success,
  .table > tbody > tr > th.success,
  .table > tfoot > tr.success > td,
  .table > tfoot > tr.success > th,
  .table > tfoot > tr > td.success,
  .table > tfoot > tr > th.success,
  .table > thead > tr.success > td,
  .table > thead > tr.success > th,
  .table > thead > tr > td.success,
  .table > thead > tr > th.success {
      background-color: #67bd6a;
  }
  .table-hover > tbody > tr.success:hover > td,
  .table-hover > tbody > tr.success:hover > th,
  .table-hover > tbody > tr:hover > .success,
  .table-hover > tbody > tr > td.success:hover,
  .table-hover > tbody > tr > th.success:hover {
      background-color: #55b559;
  }
  .table > tbody > tr.info > td,
  .table > tbody > tr.info > th,
  .table > tbody > tr > td.info,
  .table > tbody > tr > th.info,
  .table > tfoot > tr.info > td,
  .table > tfoot > tr.info > th,
  .table > tfoot > tr > td.info,
  .table > tfoot > tr > th.info,
  .table > thead > tr.info > td,
  .table > thead > tr.info > th,
  .table > thead > tr > td.info,
  .table > thead > tr > th.info {
      background-color: #d9edf7;
  }
  .table-hover > tbody > tr.info:hover > td,
  .table-hover > tbody > tr.info:hover > th,
  .table-hover > tbody > tr:hover > .info,
  .table-hover > tbody > tr > td.info:hover,
  .table-hover > tbody > tr > th.info:hover {
      background-color: #c4e3f3;
  }
  .table > tbody > tr.warning > td,
  .table > tbody > tr.warning > th,
  .table > tbody > tr > td.warning,
  .table > tbody > tr > th.warning,
  .table > tfoot > tr.warning > td,
  .table > tfoot > tr.warning > th,
  .table > tfoot > tr > td.warning,
  .table > tfoot > tr > th.warning,
  .table > thead > tr.warning > td,
  .table > thead > tr.warning > th,
  .table > thead > tr > td.warning,
  .table > thead > tr > th.warning {
      background-color: #ffa829;
  }
  .table-hover > tbody > tr.warning:hover > td,
  .table-hover > tbody > tr.warning:hover > th,
  .table-hover > tbody > tr:hover > .warning,
  .table-hover > tbody > tr > td.warning:hover,
  .table-hover > tbody > tr > th.warning:hover {
      background-color: #ff9e0f;
  }
  .table > tbody > tr.danger > td,
  .table > tbody > tr.danger > th,
  .table > tbody > tr > td.danger,
  .table > tbody > tr > th.danger,
  .table > tfoot > tr.danger > td,
  .table > tfoot > tr.danger > th,
  .table > tfoot > tr > td.danger,
  .table > tfoot > tr > th.danger,
  .table > thead > tr.danger > td,
  .table > thead > tr.danger > th,
  .table > thead > tr > td.danger,
  .table > thead > tr > th.danger {
      background-color: #f6675d;
  }
  .table-hover > tbody > tr.danger:hover > td,
  .table-hover > tbody > tr.danger:hover > th,
  .table-hover > tbody > tr:hover > .danger,
  .table-hover > tbody > tr > td.danger:hover,
  .table-hover > tbody > tr > th.danger:hover {
      background-color: #f55145;
  }
  .table-responsive {
      overflow-x: auto;
      min-height: 0.01%;
  }
  @media screen and (max-width: 767px) {
      .table-responsive {
          width: 100%;
          margin-bottom: 13.5px;
          overflow-y: hidden;
          -ms-overflow-style: -ms-autohiding-scrollbar;
          border: 1px solid #f5f5f5;
      }
      .table-responsive > .table {
          margin-bottom: 0;
      }
      .table-responsive > .table > tbody > tr > td,
      .table-responsive > .table > tbody > tr > th,
      .table-responsive > .table > tfoot > tr > td,
      .table-responsive > .table > tfoot > tr > th,
      .table-responsive > .table > thead > tr > td,
      .table-responsive > .table > thead > tr > th {
          white-space: nowrap;
      }
      .table-responsive > .table-bordered {
          border: 0;
      }
      .table-responsive > .table-bordered > tbody > tr > td:first-child,
      .table-responsive > .table-bordered > tbody > tr > th:first-child,
      .table-responsive > .table-bordered > tfoot > tr > td:first-child,
      .table-responsive > .table-bordered > tfoot > tr > th:first-child,
      .table-responsive > .table-bordered > thead > tr > td:first-child,
      .table-responsive > .table-bordered > thead > tr > th:first-child {
          border-left: 0;
      }
      .table-responsive > .table-bordered > tbody > tr > td:last-child,
      .table-responsive > .table-bordered > tbody > tr > th:last-child,
      .table-responsive > .table-bordered > tfoot > tr > td:last-child,
      .table-responsive > .table-bordered > tfoot > tr > th:last-child,
      .table-responsive > .table-bordered > thead > tr > td:last-child,
      .table-responsive > .table-bordered > thead > tr > th:last-child {
          border-right: 0;
      }
      .table-responsive > .table-bordered > tbody > tr:last-child > td,
      .table-responsive > .table-bordered > tbody > tr:last-child > th,
      .table-responsive > .table-bordered > tfoot > tr:last-child > td,
      .table-responsive > .table-bordered > tfoot > tr:last-child > th {
          border-bottom: 0;
      }
  }
  fieldset,
  legend {
      padding: 0;
      border: 0;
  }
  fieldset {
      margin: 0;
      min-width: 0;
  }
  legend {
      width: 100%;
      margin-bottom: 18px;
      font-size: 19.5px;
      line-height: inherit;
      border-bottom: 1px solid #e5e5e5;
  }
  label {
      display: inline-block;
      max-width: 100%;
      margin-bottom: 5px;
  }
  input[type="search"] {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
  }
  input[type="checkbox"],
  input[type="radio"] {
      margin: 4px 0 0;
      margin-top: 1px\9;
      line-height: normal;
  }
  .form-control,
  output {
      font-size: 13px;
      line-height: 1.42857143;
      color: #000;
      display: block;
  }
  input[type="file"] {
      display: block;
  }
  input[type="range"] {
      display: block;
      width: 100%;
  }
  select[multiple],
  select[size] {
      height: auto;
  }
  input[type="file"]:focus,
  input[type="checkbox"]:focus,
  input[type="radio"]:focus {
      outline-offset: -2px;
      outline: 0 !important;
  }
  output {
      padding-top: 7px;
  }
  .form-control {
      width: 100%;
      height: 35px;
      padding: 6px 12px;
      background-color: transparent;
      border: 1px solid #e0e0e0;
      border-radius: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
  .form-control:focus {
      border-color: #b4b4b4;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(180, 180, 180, 0.6);
  }
  .form-control::-moz-placeholder {
      color: #999;
      opacity: 1;
  }
  .form-control:-ms-input-placeholder {
      color: #999;
  }
  .form-control::-webkit-input-placeholder {
      color: #999;
  }
  .has-success .checkbox,
  .has-success .checkbox-inline,
  .has-success .control-label,
  .has-success .form-control-feedback,
  .has-success .help-block,
  .has-success .radio,
  .has-success .radio-inline,
  .has-success.checkbox label,
  .has-success.checkbox-inline label,
  .has-success.radio label,
  .has-success.radio-inline label {
      color: #67bd6a;
  }
  .form-control::-ms-expand {
      border: 0;
      background-color: transparent;
  }
  .form-control[disabled],
  .form-control[readonly],
  fieldset[disabled] .form-control {
      background-color: #eee;
      opacity: 1;
  }
  .form-control[disabled],
  fieldset[disabled] .form-control {
      cursor: not-allowed;
  }
  textarea.form-control {
      height: auto;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
      input[type="date"].form-control,
      input[type="time"].form-control,
      input[type="datetime-local"].form-control,
      input[type="month"].form-control {
          line-height: 35px;
      }
      .input-group-sm input[type="date"],
      .input-group-sm input[type="time"],
      .input-group-sm input[type="datetime-local"],
      .input-group-sm input[type="month"],
      input[type="date"].input-sm,
      input[type="time"].input-sm,
      input[type="datetime-local"].input-sm,
      input[type="month"].input-sm {
          line-height: 30px;
      }
      .input-group-lg input[type="date"],
      .input-group-lg input[type="time"],
      .input-group-lg input[type="datetime-local"],
      .input-group-lg input[type="month"],
      input[type="date"].input-lg,
      input[type="time"].input-lg,
      input[type="datetime-local"].input-lg,
      input[type="month"].input-lg {
          line-height: 40px;
      }
  }
  .checkbox,
  .radio {
      position: relative;
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
  }
  .checkbox label,
  .radio label {
      min-height: 18px;
      margin-bottom: 0;
      font-weight: 400;
      cursor: pointer;
  }
  .checkbox input[type="checkbox"],
  .checkbox-inline input[type="checkbox"],
  .radio input[type="radio"],
  .radio-inline input[type="radio"] {
      position: absolute;
      margin-left: -20px;
      margin-top: 4px\9;
  }
  .checkbox + .checkbox,
  .radio + .radio {
      margin-top: -5px;
  }
  .checkbox-inline,
  .radio-inline {
      position: relative;
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      cursor: pointer;
  }
  .checkbox-inline + .checkbox-inline,
  .radio-inline + .radio-inline {
      margin-top: 0;
      margin-left: 10px;
  }
  .checkbox-inline.disabled,
  .checkbox.disabled label,
  .radio-inline.disabled,
  .radio.disabled label,
  fieldset[disabled] .checkbox label,
  fieldset[disabled] .checkbox-inline,
  fieldset[disabled] .radio label,
  fieldset[disabled] .radio-inline,
  fieldset[disabled] input[type="checkbox"],
  fieldset[disabled] input[type="radio"],
  input[type="checkbox"].disabled,
  input[type="checkbox"][disabled],
  input[type="radio"].disabled,
  input[type="radio"][disabled] {
      cursor: not-allowed;
  }
  .form-control-static {
      padding-top: 7px;
      padding-bottom: 7px;
      margin-bottom: 0;
      min-height: 31px;
  }
  .form-control-static.input-lg,
  .form-control-static.input-sm {
      padding-left: 0;
      padding-right: 0;
  }
  .form-group-sm .form-control,
  .input-sm {
      padding: 5px 10px;
      border-radius: 2px;
      font-size: 12px;
  }
  .input-sm {
      height: 30px;
      line-height: 1.5;
  }
  select.input-sm {
      height: 30px;
      line-height: 30px;
  }
  select[multiple].input-sm,
  textarea.input-sm {
      height: auto;
  }
  .form-group-sm .form-control {
      height: 30px;
      line-height: 1.5;
  }
  .form-group-lg .form-control,
  .input-lg {
      border-radius: 0;
      padding: 10px 16px;
      font-size: 17px;
  }
  .form-group-sm select.form-control {
      height: 30px;
      line-height: 30px;
  }
  .form-group-sm select[multiple].form-control,
  .form-group-sm textarea.form-control {
      height: auto;
  }
  .form-group-sm .form-control-static {
      height: 30px;
      min-height: 30px;
      padding: 6px 10px;
      font-size: 12px;
      line-height: 1.5;
  }
  .input-lg {
      height: 40px;
      line-height: 1.3333333;
  }
  select.input-lg {
      height: 40px;
      line-height: 40px;
  }
  select[multiple].input-lg,
  textarea.input-lg {
      height: auto;
  }
  .form-group-lg .form-control {
      height: 40px;
      line-height: 1.3333333;
  }
  .form-group-lg select.form-control {
      height: 40px;
      line-height: 40px;
  }
  .form-group-lg select[multiple].form-control,
  .form-group-lg textarea.form-control {
      height: auto;
  }
  .form-group-lg .form-control-static {
      height: 40px;
      min-height: 35px;
      padding: 11px 16px;
      font-size: 17px;
      line-height: 1.3333333;
  }
  .has-feedback {
      position: relative;
  }
  .has-feedback .form-control {
      padding-right: 43.75px;
  }
  .form-control-feedback {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      display: block;
      width: 35px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      pointer-events: none;
  }
  .collapsing,
  .dropdown,
  .dropup {
      position: relative;
  }
  .form-group-lg .form-control + .form-control-feedback,
  .input-group-lg + .form-control-feedback,
  .input-lg + .form-control-feedback {
      width: 40px;
      height: 40px;
      line-height: 40px;
  }
  .form-group-sm .form-control + .form-control-feedback,
  .input-group-sm + .form-control-feedback,
  .input-sm + .form-control-feedback {
      width: 30px;
      height: 30px;
      line-height: 30px;
  }
  .has-success .form-control {
      border-color: #67bd6a;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .has-success .form-control:focus {
      border-color: #49a84d;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #aedcb0;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #aedcb0;
  }
  .has-success .input-group-addon {
      color: #67bd6a;
      border-color: #67bd6a;
      background-color: #67bd6a;
  }
  .has-warning .checkbox,
  .has-warning .checkbox-inline,
  .has-warning .control-label,
  .has-warning .form-control-feedback,
  .has-warning .help-block,
  .has-warning .radio,
  .has-warning .radio-inline,
  .has-warning.checkbox label,
  .has-warning.checkbox-inline label,
  .has-warning.radio label,
  .has-warning.radio-inline label {
      color: #ffa829;
  }
  .has-warning .form-control {
      border-color: #ffa829;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .has-warning .form-control:focus {
      border-color: #f59200;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffd28f;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ffd28f;
  }
  .has-warning .input-group-addon {
      color: #ffa829;
      border-color: #ffa829;
      background-color: #ffa829;
  }
  .has-error .checkbox,
  .has-error .checkbox-inline,
  .has-error .control-label,
  .has-error .form-control-feedback,
  .has-error .help-block,
  .has-error .radio,
  .has-error .radio-inline,
  .has-error.checkbox label,
  .has-error.checkbox-inline label,
  .has-error.radio label,
  .has-error.radio-inline label {
      color: #f6675d;
  }
  .has-error .form-control {
      border-color: #f6675d;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
  .has-error .form-control:focus {
      border-color: #f33a2c;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #fbc2bd;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #fbc2bd;
  }
  .has-error .input-group-addon {
      color: #f6675d;
      border-color: #f6675d;
      background-color: #f6675d;
  }
  .has-feedback label ~ .form-control-feedback {
      top: 23px;
  }
  .has-feedback label.sr-only ~ .form-control-feedback {
      top: 0;
  }
  .help-block {
      display: block;
      margin-top: 5px;
      margin-bottom: 10px;
      color: #9e9e9e;
  }
  @media (min-width: 768px) {
      .form-inline .form-control-static,
      .form-inline .form-group {
          display: inline-block;
      }
      .form-inline .control-label,
      .form-inline .form-group {
          margin-bottom: 0;
          vertical-align: middle;
      }
      .form-inline .form-control {
          display: inline-block;
          width: auto;
          vertical-align: middle;
      }
      .form-inline .input-group {
          display: inline-table;
          vertical-align: middle;
      }
      .form-inline .input-group .form-control,
      .form-inline .input-group .input-group-addon,
      .form-inline .input-group .input-group-btn {
          width: auto;
      }
      .form-inline .input-group > .form-control {
          width: 100%;
      }
      .form-inline .checkbox,
      .form-inline .radio {
          display: inline-block;
          margin-top: 0;
          margin-bottom: 0;
          vertical-align: middle;
      }
      .form-inline .checkbox label,
      .form-inline .radio label {
          padding-left: 0;
      }
      .form-inline .checkbox input[type="checkbox"],
      .form-inline .radio input[type="radio"] {
          position: relative;
          margin-left: 0;
      }
      .form-inline .has-feedback .form-control-feedback {
          top: 0;
      }
      .form-horizontal .control-label {
          text-align: right;
          margin-bottom: 0;
          padding-top: 7px;
      }
  }
  .btn-block,
  input[type="button"].btn-block,
  input[type="reset"].btn-block,
  input[type="submit"].btn-block {
      width: 100%;
  }
  .form-horizontal .checkbox,
  .form-horizontal .checkbox-inline,
  .form-horizontal .radio,
  .form-horizontal .radio-inline {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 7px;
  }
  .form-horizontal .checkbox,
  .form-horizontal .radio {
      min-height: 25px;
  }
  .form-horizontal .form-group {
      margin-left: -15px;
      margin-right: -15px;
  }
  .form-horizontal .has-feedback .form-control-feedback {
      right: 15px;
  }
  @media (min-width: 768px) {
      .form-horizontal .form-group-lg .control-label {
          padding-top: 11px;
          font-size: 17px;
      }
      .form-horizontal .form-group-sm .control-label {
          padding-top: 6px;
          font-size: 12px;
      }
  }
  .btn {
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      touch-action: manipulation;
      cursor: pointer;
      white-space: nowrap;
      padding: 6px 12px;
      font-size: 13px;
      line-height: 1.42857143;
      border-radius: 2px;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  #header,
  .waves-effect {
      -moz-user-select: none;
      -ms-user-select: none;
  }
  .btn.active.focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn:active:focus,
  .btn:focus {
      outline-offset: -2px;
      outline: 0 !important;
  }
  .btn.focus,
  .btn:focus,
  .btn:hover {
      color: #333;
      text-decoration: none;
  }
  .btn.active,
  .btn:active {
      outline: 0;
      -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .btn.disabled,
  .btn[disabled],
  fieldset[disabled] .btn {
      cursor: not-allowed;
      opacity: 0.65;
      filter: alpha(opacity=65);
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  a.btn.disabled,
  fieldset[disabled] a.btn {
      pointer-events: none;
  }
  .btn-default {
      color: #333;
      background-color: #fff;
      border-color: #ccc;
  }
  .btn-default.active,
  .btn-default:active,
  .btn-default:hover,
  .open > .dropdown-toggle.btn-default {
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
  }
  .btn-default.active.focus,
  .btn-default.active:focus,
  .btn-default.active:hover,
  .btn-default:active.focus,
  .btn-default:active:focus,
  .btn-default:active:hover,
  .open > .dropdown-toggle.btn-default.focus,
  .open > .dropdown-toggle.btn-default:focus,
  .open > .dropdown-toggle.btn-default:hover {
      color: #333;
      background-color: #d4d4d4;
      border-color: #8c8c8c;
  }
  .btn-default.focus,
  .btn-default.focus.focus,
  .btn-default.focus:focus,
  .btn-default.focus:hover,
  .btn-default:active,
  .btn-default:active.focus,
  .btn-default:active:focus,
  .btn-default:active:hover,
  .btn-default:focus,
  .btn-default:focus.focus,
  .btn-default:focus:focus,
  .btn-default:focus:hover,
  .btn-default:hover,
  .btn-default:hover.focus,
  .btn-default:hover:focus,
  .btn-default:hover:hover,
  .open > .dropdown-toggle.btn-default,
  .open > .dropdown-toggle.btn-default.focus,
  .open > .dropdown-toggle.btn-default:focus,
  .open > .dropdown-toggle.btn-default:hover {
      color: #333;
      background-color: #fff;
      border-color: transparent;
  }
  .btn-default.disabled,
  .btn-default.disabled.focus,
  .btn-default.disabled:active,
  .btn-default.disabled:focus,
  .btn-default.disabled:hover,
  .btn-default[disabled],
  .btn-default[disabled].focus,
  .btn-default[disabled]:active,
  .btn-default[disabled]:focus,
  .btn-default[disabled]:hover,
  fieldset[disabled] .btn-default,
  fieldset[disabled] .btn-default.focus,
  fieldset[disabled] .btn-default:active,
  fieldset[disabled] .btn-default:focus,
  fieldset[disabled] .btn-default:hover {
      background-color: #fff;
      border-color: #ccc;
  }
  .btn-default .badge {
      color: #fff;
      background-color: #333;
  }
  .btn-primary {
      color: #fff;
      background-color: #61a3d2;
      border-color: #0d8aee;
  }
  .btn-primary.active,
  .btn-primary:active,
  .btn-primary:hover,
  .open > .dropdown-toggle.btn-primary {
      color: #fff;
      background-color: #0c7cd5;
      border-color: #0a68b4;
  }
  .btn-primary.active.focus,
  .btn-primary.active:focus,
  .btn-primary.active:hover,
  .btn-primary:active.focus,
  .btn-primary:active:focus,
  .btn-primary:active:hover,
  .open > .dropdown-toggle.btn-primary.focus,
  .open > .dropdown-toggle.btn-primary:focus,
  .open > .dropdown-toggle.btn-primary:hover {
      color: #fff;
      background-color: #0a68b4;
      border-color: #064475;
  }
  .btn-primary.focus,
  .btn-primary.focus.focus,
  .btn-primary.focus:focus,
  .btn-primary.focus:hover,
  .btn-primary:active,
  .btn-primary:active.focus,
  .btn-primary:active:focus,
  .btn-primary:active:hover,
  .btn-primary:focus,
  .btn-primary:focus.focus,
  .btn-primary:focus:focus,
  .btn-primary:focus:hover,
  .btn-primary:hover,
  .btn-primary:hover.focus,
  .btn-primary:hover:focus,
  .btn-primary:hover:hover,
  .open > .dropdown-toggle.btn-primary,
  .open > .dropdown-toggle.btn-primary.focus,
  .open > .dropdown-toggle.btn-primary:focus,
  .open > .dropdown-toggle.btn-primary:hover {
      color: #fff;
      background-color: #61a3d2;
      border-color: transparent;
  }
  .btn-primary.disabled,
  .btn-primary.disabled.focus,
  .btn-primary.disabled:active,
  .btn-primary.disabled:focus,
  .btn-primary.disabled:hover,
  .btn-primary[disabled],
  .btn-primary[disabled].focus,
  .btn-primary[disabled]:active,
  .btn-primary[disabled]:focus,
  .btn-primary[disabled]:hover,
  fieldset[disabled] .btn-primary,
  fieldset[disabled] .btn-primary.focus,
  fieldset[disabled] .btn-primary:active,
  fieldset[disabled] .btn-primary:focus,
  fieldset[disabled] .btn-primary:hover {
      background-color: #61a3d2;
      border-color: #0d8aee;
  }
  .btn-primary .badge {
      color: #61a3d2;
      background-color: #fff;
  }
  .btn-success {
      color: #fff;
      background-color: #4caf50;
      border-color: #449d48;
  }
  .btn-success.active,
  .btn-success:active,
  .btn-success:hover,
  .open > .dropdown-toggle.btn-success {
      color: #fff;
      background-color: #3d8b40;
      border-color: #327334;
  }
  .btn-success.active.focus,
  .btn-success.active:focus,
  .btn-success.active:hover,
  .btn-success:active.focus,
  .btn-success:active:focus,
  .btn-success:active:hover,
  .open > .dropdown-toggle.btn-success.focus,
  .open > .dropdown-toggle.btn-success:focus,
  .open > .dropdown-toggle.btn-success:hover {
      color: #fff;
      background-color: #327334;
      border-color: #1e441f;
  }
  .btn-success.focus,
  .btn-success.focus.focus,
  .btn-success.focus:focus,
  .btn-success.focus:hover,
  .btn-success:active,
  .btn-success:active.focus,
  .btn-success:active:focus,
  .btn-success:active:hover,
  .btn-success:focus,
  .btn-success:focus.focus,
  .btn-success:focus:focus,
  .btn-success:focus:hover,
  .btn-success:hover,
  .btn-success:hover.focus,
  .btn-success:hover:focus,
  .btn-success:hover:hover,
  .open > .dropdown-toggle.btn-success,
  .open > .dropdown-toggle.btn-success.focus,
  .open > .dropdown-toggle.btn-success:focus,
  .open > .dropdown-toggle.btn-success:hover {
      color: #fff;
      background-color: #4caf50;
      border-color: transparent;
  }
  .btn-success.active,
  .btn-success:active,
  .open > .dropdown-toggle.btn-success {
      background-image: none;
  }
  .btn-success.disabled,
  .btn-success.disabled.focus,
  .btn-success.disabled:active,
  .btn-success.disabled:focus,
  .btn-success.disabled:hover,
  .btn-success[disabled],
  .btn-success[disabled].focus,
  .btn-success[disabled]:active,
  .btn-success[disabled]:focus,
  .btn-success[disabled]:hover,
  fieldset[disabled] .btn-success,
  fieldset[disabled] .btn-success.focus,
  fieldset[disabled] .btn-success:active,
  fieldset[disabled] .btn-success:focus,
  fieldset[disabled] .btn-success:hover {
      background-color: #4caf50;
      border-color: #449d48;
  }
  .btn-success .badge {
      color: #4caf50;
      background-color: #fff;
  }
  .btn-info {
      color: #fff;
      background-color: #00bcd4;
      border-color: #00a5bb;
  }
  .btn-info.active,
  .btn-info:active,
  .btn-info:hover,
  .open > .dropdown-toggle.btn-info {
      color: #fff;
      background-color: #008fa1;
      border-color: #006f7d;
  }
  .btn-info.active.focus,
  .btn-info.active:focus,
  .btn-info.active:hover,
  .btn-info:active.focus,
  .btn-info:active:focus,
  .btn-info:active:hover,
  .open > .dropdown-toggle.btn-info.focus,
  .open > .dropdown-toggle.btn-info:focus,
  .open > .dropdown-toggle.btn-info:hover {
      color: #fff;
      background-color: #006f7d;
      border-color: #00343b;
  }
  .btn-info.focus,
  .btn-info.focus.focus,
  .btn-info.focus:focus,
  .btn-info.focus:hover,
  .btn-info:active,
  .btn-info:active.focus,
  .btn-info:active:focus,
  .btn-info:active:hover,
  .btn-info:focus,
  .btn-info:focus.focus,
  .btn-info:focus:focus,
  .btn-info:focus:hover,
  .btn-info:hover,
  .btn-info:hover.focus,
  .btn-info:hover:focus,
  .btn-info:hover:hover,
  .open > .dropdown-toggle.btn-info,
  .open > .dropdown-toggle.btn-info.focus,
  .open > .dropdown-toggle.btn-info:focus,
  .open > .dropdown-toggle.btn-info:hover {
      color: #fff;
      background-color: #00bcd4;
      border-color: transparent;
  }
  .btn-info.disabled,
  .btn-info.disabled.focus,
  .btn-info.disabled:active,
  .btn-info.disabled:focus,
  .btn-info.disabled:hover,
  .btn-info[disabled],
  .btn-info[disabled].focus,
  .btn-info[disabled]:active,
  .btn-info[disabled]:focus,
  .btn-info[disabled]:hover,
  fieldset[disabled] .btn-info,
  fieldset[disabled] .btn-info.focus,
  fieldset[disabled] .btn-info:active,
  fieldset[disabled] .btn-info:focus,
  fieldset[disabled] .btn-info:hover {
      background-color: #00bcd4;
      border-color: #00a5bb;
  }
  .btn-info .badge {
      color: #00bcd4;
      background-color: #fff;
  }
  .btn-warning {
      color: #fff;
      background-color: #ff9800;
      border-color: #e68900;
  }
  .btn-warning.active,
  .btn-warning:active,
  .btn-warning:hover,
  .open > .dropdown-toggle.btn-warning {
      color: #fff;
      background-color: #cc7a00;
      border-color: #a86400;
  }
  .btn-warning.active.focus,
  .btn-warning.active:focus,
  .btn-warning.active:hover,
  .btn-warning:active.focus,
  .btn-warning:active:focus,
  .btn-warning:active:hover,
  .open > .dropdown-toggle.btn-warning.focus,
  .open > .dropdown-toggle.btn-warning:focus,
  .open > .dropdown-toggle.btn-warning:hover {
      color: #fff;
      background-color: #a86400;
      border-color: #663d00;
  }
  .btn-warning.focus,
  .btn-warning.focus.focus,
  .btn-warning.focus:focus,
  .btn-warning.focus:hover,
  .btn-warning:active,
  .btn-warning:active.focus,
  .btn-warning:active:focus,
  .btn-warning:active:hover,
  .btn-warning:focus,
  .btn-warning:focus.focus,
  .btn-warning:focus:focus,
  .btn-warning:focus:hover,
  .btn-warning:hover,
  .btn-warning:hover.focus,
  .btn-warning:hover:focus,
  .btn-warning:hover:hover,
  .open > .dropdown-toggle.btn-warning,
  .open > .dropdown-toggle.btn-warning.focus,
  .open > .dropdown-toggle.btn-warning:focus,
  .open > .dropdown-toggle.btn-warning:hover {
      color: #fff;
      background-color: #ff9800;
      border-color: transparent;
  }
  .btn-warning.disabled,
  .btn-warning.disabled.focus,
  .btn-warning.disabled:active,
  .btn-warning.disabled:focus,
  .btn-warning.disabled:hover,
  .btn-warning[disabled],
  .btn-warning[disabled].focus,
  .btn-warning[disabled]:active,
  .btn-warning[disabled]:focus,
  .btn-warning[disabled]:hover,
  fieldset[disabled] .btn-warning,
  fieldset[disabled] .btn-warning.focus,
  fieldset[disabled] .btn-warning:active,
  fieldset[disabled] .btn-warning:focus,
  fieldset[disabled] .btn-warning:hover {
      background-color: #ff9800;
      border-color: #e68900;
  }
  .btn-warning .badge {
      color: #ff9800;
      background-color: #fff;
  }
  .btn-danger {
      color: #fff;
      background-color: #f44336;
      border-color: #f32c1e;
  }
  .btn-danger.active,
  .btn-danger:active,
  .btn-danger:hover,
  .open > .dropdown-toggle.btn-danger {
      color: #fff;
      background-color: #ea1c0d;
      border-color: #c8180b;
  }
  .btn-danger.active.focus,
  .btn-danger.active:focus,
  .btn-danger.active:hover,
  .btn-danger:active.focus,
  .btn-danger:active:focus,
  .btn-danger:active:hover,
  .open > .dropdown-toggle.btn-danger.focus,
  .open > .dropdown-toggle.btn-danger:focus,
  .open > .dropdown-toggle.btn-danger:hover {
      color: #fff;
      background-color: #c8180b;
      border-color: #891008;
  }
  .btn-danger.focus,
  .btn-danger.focus.focus,
  .btn-danger.focus:focus,
  .btn-danger.focus:hover,
  .btn-danger:active,
  .btn-danger:active.focus,
  .btn-danger:active:focus,
  .btn-danger:active:hover,
  .btn-danger:focus,
  .btn-danger:focus.focus,
  .btn-danger:focus:focus,
  .btn-danger:focus:hover,
  .btn-danger:hover,
  .btn-danger:hover.focus,
  .btn-danger:hover:focus,
  .btn-danger:hover:hover,
  .open > .dropdown-toggle.btn-danger,
  .open > .dropdown-toggle.btn-danger.focus,
  .open > .dropdown-toggle.btn-danger:focus,
  .open > .dropdown-toggle.btn-danger:hover {
      color: #fff;
      background-color: #f44336;
      border-color: transparent;
  }
  .btn-danger.disabled,
  .btn-danger.disabled.focus,
  .btn-danger.disabled:active,
  .btn-danger.disabled:focus,
  .btn-danger.disabled:hover,
  .btn-danger[disabled],
  .btn-danger[disabled].focus,
  .btn-danger[disabled]:active,
  .btn-danger[disabled]:focus,
  .btn-danger[disabled]:hover,
  fieldset[disabled] .btn-danger,
  fieldset[disabled] .btn-danger.focus,
  fieldset[disabled] .btn-danger:active,
  fieldset[disabled] .btn-danger:focus,
  fieldset[disabled] .btn-danger:hover {
      background-color: #f44336;
      border-color: #f32c1e;
  }
  .btn-danger .badge {
      color: #f44336;
      background-color: #fff;
  }
  .btn-link {
      font-weight: 400;
  }
  .btn-link,
  .btn-link.active,
  .btn-link:active,
  .btn-link[disabled],
  fieldset[disabled] .btn-link {
      background-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  .btn-link,
  .btn-link:active,
  .btn-link:focus,
  .btn-link:hover {
      border-color: transparent;
  }
  .btn-link:focus,
  .btn-link:hover {
      color: #0a6ebd;
      text-decoration: none;
      background-color: transparent;
  }
  .btn-link[disabled]:focus,
  .btn-link[disabled]:hover,
  fieldset[disabled] .btn-link:focus,
  fieldset[disabled] .btn-link:hover {
      color: #777;
      text-decoration: none;
  }
  .btn-group-lg > .btn,
  .btn-lg {
      padding: 10px 16px;
      font-size: 17px;
      line-height: 1.3333333;
      border-radius: 2px;
  }
  .btn-group-sm > .btn,
  .btn-sm {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 2px;
  }
  .dropdown-header,
  .dropdown-menu > li > a {
      line-height: 1.42857143;
      white-space: nowrap;
  }
  .btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
  .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle,
  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
  }
  .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,
  .btn-group > .btn:last-child:not(:first-child),
  .btn-group > .dropdown-toggle:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
  }
  .btn-group-vertical > .btn:not(:first-child):not(:last-child),
  .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,
  .btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
      border-radius: 0;
  }
  .btn-block {
      display: block;
  }
  .btn-block + .btn-block {
      margin-top: 5px;
  }
  .fade {
      opacity: 0;
      -webkit-transition: opacity 0.15s linear;
      -o-transition: opacity 0.15s linear;
      transition: opacity 0.15s linear;
  }
  .fade.in {
      opacity: 1;
  }
  .collapse {
      display: none;
  }
  .collapse.in {
      display: block;
  }
  tr.collapse.in {
      display: table-row;
  }
  tbody.collapse.in {
      display: table-row-group;
  }
  .collapsing {
      height: 0;
      overflow: hidden;
      -webkit-transition-property: height, visibility;
      transition-property: height, visibility;
      -webkit-transition-duration: 0.35s;
      transition-duration: 0.35s;
      -webkit-transition-timing-function: ease;
      transition-timing-function: ease;
  }
  .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 2px;
      border-top: 4px dashed;
      border-top: 4px solid\9;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
  }
  .dropdown-toggle:focus {
      outline: 0;
  }
  .dropdown-menu {
      position: absolute;
      left: 0;
      z-index: 9;
      display: none;
      min-width: 160px;
      list-style: none;
      font-size: 13px;
      text-align: left;
      background-color: #fff;
      -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
      background-clip: padding-box;
  }
  .dropdown-menu-right,
  .dropdown-menu.pull-right {
      left: auto;
      right: 0;
  }
  .dropdown-menu .divider {
      height: 1px;
      margin: 8px 0;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.08);
  }
  .dropdown-menu > li > a {
      display: block;
      clear: both;
      font-weight: 400;
      color: #333;
  }
  .dropdown-menu > li > a:focus,
  .dropdown-menu > li > a:hover {
      text-decoration: none;
      color: #333;
      background-color: rgba(0, 0, 0, 0.075);
  }
  .dropdown-menu > .active > a,
  .dropdown-menu > .active > a:focus,
  .dropdown-menu > .active > a:hover {
      color: #333;
      text-decoration: none;
      outline: 0;
      background-color: rgba(0, 0, 0, 0.075);
  }
  .dropdown-menu > .disabled > a,
  .dropdown-menu > .disabled > a:focus,
  .dropdown-menu > .disabled > a:hover {
      color: #e4e4e4;
  }
  .dropdown-menu > .disabled > a:focus,
  .dropdown-menu > .disabled > a:hover {
      text-decoration: none;
      background-color: transparent;
      filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
      cursor: not-allowed;
  }
  .open > .dropdown-menu {
      display: block;
  }
  .open > a {
      outline: 0;
  }
  .dropdown-menu-left {
      left: 0;
      right: auto;
  }
  .dropdown-header {
      display: block;
      font-size: 12px;
  }
  .dropdown-backdrop {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: -1;
  }
  .nav-justified > .dropdown .dropdown-menu,
  .nav-tabs.nav-justified > .dropdown .dropdown-menu {
      top: auto;
      left: auto;
  }
  .pull-right > .dropdown-menu {
      right: 0;
      left: auto;
  }
  .dropup .caret,
  .navbar-fixed-bottom .dropdown .caret {
      border-top: 0;
      border-bottom: 4px dashed;
      border-bottom: 4px solid\9;
      content: "";
  }
  .dropup .dropdown-menu,
  .navbar-fixed-bottom .dropdown .dropdown-menu {
      top: auto;
      bottom: 100%;
      margin-bottom: 2px;
  }
  @media (min-width: 768px) {
      .navbar-right .dropdown-menu {
          left: auto;
          right: 0;
      }
      .navbar-right .dropdown-menu-left {
          left: 0;
          right: auto;
      }
  }
  .btn-group,
  .btn-group-vertical {
      position: relative;
      display: inline-block;
  }
  .btn-group-vertical > .btn,
  .btn-group > .btn {
      position: relative;
      float: left;
  }
  .btn-group-vertical > .btn.active,
  .btn-group-vertical > .btn:active,
  .btn-group-vertical > .btn:focus,
  .btn-group-vertical > .btn:hover,
  .btn-group > .btn.active,
  .btn-group > .btn:active,
  .btn-group > .btn:focus,
  .btn-group > .btn:hover {
      z-index: 2;
  }
  .btn-group .btn + .btn,
  .btn-group .btn + .btn-group,
  .btn-group .btn-group + .btn,
  .btn-group .btn-group + .btn-group {
      margin-left: -1px;
  }
  .btn-toolbar {
      margin-left: -5px;
  }
  .btn-toolbar > .btn,
  .btn-toolbar > .btn-group,
  .btn-toolbar > .input-group {
      margin-left: 5px;
  }
  .btn .caret,
  .btn-group > .btn:first-child {
      margin-left: 0;
  }
  .btn-group .dropdown-toggle:active,
  .btn-group.open .dropdown-toggle {
      outline: 0;
  }
  .btn-group > .btn + .dropdown-toggle {
      padding-left: 8px;
      padding-right: 8px;
  }
  .btn-group > .btn-lg + .dropdown-toggle {
      padding-left: 12px;
      padding-right: 12px;
  }
  .btn-group.open .dropdown-toggle {
      -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  .btn-group.open .dropdown-toggle.btn-link {
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  .btn-lg .caret {
      border-width: 5px 5px 0;
  }
  .dropup .btn-lg .caret {
      border-width: 0 5px 5px;
  }
  .btn-group-vertical > .btn,
  .btn-group-vertical > .btn-group,
  .btn-group-vertical > .btn-group > .btn {
      display: block;
      float: none;
      width: 100%;
      max-width: 100%;
  }
  .btn-group-vertical > .btn-group > .btn {
      float: none;
  }
  .btn-group-vertical > .btn + .btn,
  .btn-group-vertical > .btn + .btn-group,
  .btn-group-vertical > .btn-group + .btn,
  .btn-group-vertical > .btn-group + .btn-group {
      margin-top: -1px;
      margin-left: 0;
  }
  .btn-group-vertical > .btn:first-child:not(:last-child) {
      border-radius: 2px 2px 0 0;
  }
  .btn-group-vertical > .btn:last-child:not(:first-child) {
      border-radius: 0 0 2px 2px;
  }
  .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
      border-radius: 0;
  }
  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
  .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
  }
  .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
  }
  .btn-group-justified {
      display: table;
      width: 100%;
      table-layout: fixed;
      border-collapse: separate;
  }
  .btn-group-justified > .btn,
  .btn-group-justified > .btn-group {
      float: none;
      display: table-cell;
      width: 1%;
  }
  .btn-group-justified > .btn-group .btn {
      width: 100%;
  }
  .btn-group-justified > .btn-group .dropdown-menu {
      left: auto;
  }
  [data-toggle="buttons"] > .btn input[type="checkbox"],
  [data-toggle="buttons"] > .btn input[type="radio"],
  [data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"],
  [data-toggle="buttons"] > .btn-group > .btn input[type="radio"] {
      position: absolute;
      clip: rect(0, 0, 0, 0);
      pointer-events: none;
  }
  .input-group {
      position: relative;
      display: table;
      border-collapse: separate;
  }
  .input-group[class*="col-"] {
      float: none;
      padding-left: 0;
      padding-right: 0;
  }
  .input-group .form-control {
      position: relative;
      z-index: 2;
      float: left;
      width: 100%;
      margin-bottom: 0;
  }
  .input-group .form-control:focus {
      z-index: 3;
  }
  .input-group-lg > .form-control,
  .input-group-lg > .input-group-addon,
  .input-group-lg > .input-group-btn > .btn {
      height: 40px;
      padding: 10px 16px;
      font-size: 17px;
      line-height: 1.3333333;
      border-radius: 0;
  }
  select.input-group-lg > .form-control,
  select.input-group-lg > .input-group-addon,
  select.input-group-lg > .input-group-btn > .btn {
      height: 40px;
      line-height: 40px;
  }
  select[multiple].input-group-lg > .form-control,
  select[multiple].input-group-lg > .input-group-addon,
  select[multiple].input-group-lg > .input-group-btn > .btn,
  textarea.input-group-lg > .form-control,
  textarea.input-group-lg > .input-group-addon,
  textarea.input-group-lg > .input-group-btn > .btn {
      height: auto;
  }
  .input-group-sm > .form-control,
  .input-group-sm > .input-group-addon,
  .input-group-sm > .input-group-btn > .btn {
      height: 30px;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 2px;
  }
  select.input-group-sm > .form-control,
  select.input-group-sm > .input-group-addon,
  select.input-group-sm > .input-group-btn > .btn {
      height: 30px;
      line-height: 30px;
  }
  select[multiple].input-group-sm > .form-control,
  select[multiple].input-group-sm > .input-group-addon,
  select[multiple].input-group-sm > .input-group-btn > .btn,
  textarea.input-group-sm > .form-control,
  textarea.input-group-sm > .input-group-addon,
  textarea.input-group-sm > .input-group-btn > .btn {
      height: auto;
  }
  .input-group .form-control,
  .input-group-addon,
  .input-group-btn {
      display: table-cell;
  }
  .nav > li,
  .nav > li > a {
      display: block;
      position: relative;
  }
  .input-group .form-control:not(:first-child):not(:last-child),
  .input-group-addon:not(:first-child):not(:last-child),
  .input-group-btn:not(:first-child):not(:last-child) {
      border-radius: 0;
  }
  .input-group-addon,
  .input-group-btn {
      width: 1%;
      white-space: nowrap;
      vertical-align: middle;
  }
  .input-group-addon {
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 400;
      line-height: 1;
      color: #000;
      text-align: center;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 0;
  }
  .input-group-addon.input-sm {
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 2px;
  }
  .input-group-addon.input-lg {
      padding: 10px 16px;
      font-size: 17px;
      border-radius: 0;
  }
  .input-group-addon input[type="checkbox"],
  .input-group-addon input[type="radio"] {
      margin-top: 0;
  }
  .input-group .form-control:first-child,
  .input-group-addon:first-child,
  .input-group-btn:first-child > .btn,
  .input-group-btn:first-child > .btn-group > .btn,
  .input-group-btn:first-child > .dropdown-toggle,
  .input-group-btn:last-child > .btn-group:not(:last-child) > .btn,
  .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
  }
  .input-group-addon:first-child {
      border-right: 0;
  }
  .input-group .form-control:last-child,
  .input-group-addon:last-child,
  .input-group-btn:first-child > .btn-group:not(:first-child) > .btn,
  .input-group-btn:first-child > .btn:not(:first-child),
  .input-group-btn:last-child > .btn,
  .input-group-btn:last-child > .btn-group > .btn,
  .input-group-btn:last-child > .dropdown-toggle {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
  }
  .input-group-addon:last-child {
      border-left: 0;
  }
  .input-group-btn {
      position: relative;
      font-size: 0;
      white-space: nowrap;
  }
  .input-group-btn > .btn {
      position: relative;
  }
  .input-group-btn > .btn + .btn {
      margin-left: -1px;
  }
  .input-group-btn > .btn:active,
  .input-group-btn > .btn:focus,
  .input-group-btn > .btn:hover {
      z-index: 2;
  }
  .input-group-btn:first-child > .btn,
  .input-group-btn:first-child > .btn-group {
      margin-right: -1px;
  }
  .input-group-btn:last-child > .btn,
  .input-group-btn:last-child > .btn-group {
      z-index: 2;
      margin-left: -1px;
  }
  .nav {
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
  }
  .nav > li > a {
      padding: 10px 15px;
  }
  .nav > li > a:focus,
  .nav > li > a:hover {
      text-decoration: none;
      background-color: #eee;
  }
  .nav > li.disabled > a {
      color: #777;
  }
  .nav > li.disabled > a:focus,
  .nav > li.disabled > a:hover {
      color: #777;
      text-decoration: none;
      background-color: transparent;
      cursor: not-allowed;
  }
  .nav .open > a,
  .nav .open > a:focus,
  .nav .open > a:hover {
      background-color: #eee;
      border-color: #61a3d2;
  }
  .nav .nav-divider {
      height: 1px;
      margin: 8px 0;
      overflow: hidden;
      background-color: #e5e5e5;
  }
  .nav > li > a > img {
      max-width: none;
  }
  .nav-tabs {
      border-bottom: 1px solid #fff;
  }
  .nav-tabs > li {
      float: left;
      margin-bottom: -1px;
  }
  .nav-tabs > li > a {
      margin-right: 2px;
      line-height: 1.42857143;
      border: 1px solid transparent;
      border-radius: 2px 2px 0 0;
  }
  .nav-tabs > li > a:hover {
      border-color: #eee #eee #fff;
  }
  .nav-tabs > li.active > a,
  .nav-tabs > li.active > a:focus,
  .nav-tabs > li.active > a:hover {
      color: #555;
      background-color: transparent;
      border: 1px solid #fff;
      border-bottom-color: transparent;
      cursor: default;
  }
  .nav-tabs.nav-justified {
      width: 100%;
      border-bottom: 0;
  }
  .nav-tabs.nav-justified > li {
      float: none;
  }
  .nav-tabs.nav-justified > li > a {
      text-align: center;
      margin-bottom: 5px;
      margin-right: 0;
      border-radius: 2px;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:focus,
  .nav-tabs.nav-justified > .active > a:hover {
      border: 1px solid #ddd;
  }
  @media (min-width: 768px) {
      .nav-tabs.nav-justified > li {
          display: table-cell;
          width: 1%;
      }
      .nav-tabs.nav-justified > li > a {
          margin-bottom: 0;
          border-bottom: 1px solid #ddd;
          border-radius: 2px 2px 0 0;
      }
      .nav-tabs.nav-justified > .active > a,
      .nav-tabs.nav-justified > .active > a:focus,
      .nav-tabs.nav-justified > .active > a:hover {
          border-bottom-color: #edecec;
      }
  }
  .nav-pills > li {
      float: left;
  }
  .nav-justified > li,
  .nav-stacked > li {
      float: none;
  }
  .nav-pills > li > a {
      border-radius: 2px;
  }
  .nav-pills > li + li {
      margin-left: 2px;
  }
  .nav-pills > li.active > a,
  .nav-pills > li.active > a:focus,
  .nav-pills > li.active > a:hover {
      color: #fff;
      background-color: #61a3d2;
  }
  .nav-stacked > li + li {
      margin-top: 2px;
      margin-left: 0;
  }
  .nav-justified {
      width: 100%;
  }
  .nav-justified > li > a {
      text-align: center;
      margin-bottom: 5px;
  }
  .nav-tabs-justified {
      border-bottom: 0;
  }
  .nav-tabs-justified > li > a {
      margin-right: 0;
      border-radius: 2px;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:focus,
  .nav-tabs-justified > .active > a:hover {
      border: 1px solid #ddd;
  }
  @media (min-width: 768px) {
      .nav-justified > li {
          display: table-cell;
          width: 1%;
      }
      .nav-justified > li > a {
          margin-bottom: 0;
      }
      .nav-tabs-justified > li > a {
          border-bottom: 1px solid #ddd;
          border-radius: 2px 2px 0 0;
      }
      .nav-tabs-justified > .active > a,
      .nav-tabs-justified > .active > a:focus,
      .nav-tabs-justified > .active > a:hover {
          border-bottom-color: #edecec;
      }
  }
  .tab-content > .tab-pane {
      display: none;
  }
  .tab-content > .active {
      display: block;
  }
  .nav-tabs .dropdown-menu {
      margin-top: -1px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
  }
  .navbar {
      position: relative;
      min-height: 50px;
      margin-bottom: 18px;
      border: 1px solid transparent;
  }
  .navbar-collapse {
      overflow-x: visible;
      padding-right: 15px;
      padding-left: 15px;
      border-top: 1px solid transparent;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      -webkit-overflow-scrolling: touch;
  }
  .navbar-collapse.in {
      overflow-y: auto;
  }
  @media (max-device-width: 480px) and (orientation: landscape) {
      .navbar-fixed-bottom .navbar-collapse,
      .navbar-fixed-top .navbar-collapse {
          max-height: 200px;
      }
  }
  .container-fluid > .navbar-collapse,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container > .navbar-header {
      margin-right: -15px;
      margin-left: -15px;
  }
  @media (min-width: 768px) {
      .navbar {
          border-radius: 2px;
      }
      .navbar-header {
          float: left;
      }
      .navbar-collapse {
          width: auto;
          border-top: 0;
          box-shadow: none;
      }
      .navbar-collapse.collapse {
          display: block !important;
          height: auto !important;
          padding-bottom: 0;
          overflow: visible !important;
      }
      .navbar-collapse.in {
          overflow-y: visible;
      }
      .navbar-fixed-bottom .navbar-collapse,
      .navbar-fixed-top .navbar-collapse,
      .navbar-static-top .navbar-collapse {
          padding-left: 0;
          padding-right: 0;
      }
      .container-fluid > .navbar-collapse,
      .container-fluid > .navbar-header,
      .container > .navbar-collapse,
      .container > .navbar-header {
          margin-right: 0;
          margin-left: 0;
      }
      .navbar-static-top {
          border-radius: 0;
      }
  }
  .navbar-static-top {
      z-index: 1000;
      border-width: 0 0 1px;
  }
  .navbar-fixed-bottom,
  .navbar-fixed-top {
      position: fixed;
      right: 0;
      left: 0;
      z-index: 1030;
  }
  .navbar-fixed-top {
      top: 0;
      border-width: 0 0 1px;
  }
  .navbar-fixed-bottom {
      bottom: 0;
      margin-bottom: 0;
      border-width: 1px 0 0;
  }
  .navbar-brand {
      float: left;
      padding: 16px 15px;
      font-size: 17px;
      line-height: 18px;
      height: 50px;
  }
  .navbar-brand:focus,
  .navbar-brand:hover {
      text-decoration: none;
  }
  .navbar-brand > img {
      display: block;
  }
  @media (min-width: 768px) {
      .navbar-fixed-bottom,
      .navbar-fixed-top {
          border-radius: 0;
      }
      .navbar > .container .navbar-brand,
      .navbar > .container-fluid .navbar-brand {
          margin-left: -15px;
      }
  }
  .navbar-toggle {
      position: relative;
      float: right;
      margin-right: 15px;
      padding: 9px 10px;
      margin-top: 8px;
      margin-bottom: 8px;
      background-color: transparent;
      border: 1px solid transparent;
      border-radius: 2px;
  }
  .navbar-toggle:focus {
      outline: 0;
  }
  .navbar-toggle .icon-bar {
      display: block;
      width: 22px;
      height: 2px;
      border-radius: 1px;
  }
  .navbar-toggle .icon-bar + .icon-bar {
      margin-top: 4px;
  }
  .navbar-nav {
      margin: 8px -15px;
  }
  .navbar-nav > li > a {
      padding-top: 10px;
      padding-bottom: 10px;
      line-height: 18px;
  }
  @media (max-width: 767px) {
      .navbar-nav .open .dropdown-menu {
          position: static;
          float: none;
          width: auto;
          margin-top: 0;
          background-color: transparent;
          border: 0;
          box-shadow: none;
      }
      .navbar-nav .open .dropdown-menu .dropdown-header,
      .navbar-nav .open .dropdown-menu > li > a {
          padding: 5px 15px 5px 25px;
      }
      .navbar-nav .open .dropdown-menu > li > a {
          line-height: 18px;
      }
      .navbar-nav .open .dropdown-menu > li > a:focus,
      .navbar-nav .open .dropdown-menu > li > a:hover {
          background-image: none;
      }
  }
  .progress-bar-striped,
  .progress-striped .progress-bar,
  .progress-striped .progress-bar-success {
      background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
      background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  }
  @media (min-width: 768px) {
      .navbar-toggle {
          display: none;
      }
      .navbar-nav {
          float: left;
          margin: 0;
      }
      .navbar-nav > li {
          float: left;
      }
      .navbar-nav > li > a {
          padding-top: 16px;
          padding-bottom: 16px;
      }
  }
  .navbar-form {
      padding: 10px 15px;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
      margin: 7.5px -15px;
  }
  @media (min-width: 768px) {
      .navbar-form .form-control-static,
      .navbar-form .form-group {
          display: inline-block;
      }
      .navbar-form .control-label,
      .navbar-form .form-group {
          margin-bottom: 0;
          vertical-align: middle;
      }
      .navbar-form .form-control {
          display: inline-block;
          width: auto;
          vertical-align: middle;
      }
      .navbar-form .input-group {
          display: inline-table;
          vertical-align: middle;
      }
      .navbar-form .input-group .form-control,
      .navbar-form .input-group .input-group-addon,
      .navbar-form .input-group .input-group-btn {
          width: auto;
      }
      .navbar-form .input-group > .form-control {
          width: 100%;
      }
      .navbar-form .checkbox,
      .navbar-form .radio {
          display: inline-block;
          margin-top: 0;
          margin-bottom: 0;
          vertical-align: middle;
      }
      .navbar-form .checkbox label,
      .navbar-form .radio label {
          padding-left: 0;
      }
      .navbar-form .checkbox input[type="checkbox"],
      .navbar-form .radio input[type="radio"] {
          position: relative;
          margin-left: 0;
      }
      .navbar-form .has-feedback .form-control-feedback {
          top: 0;
      }
      .navbar-form {
          width: auto;
          border: 0;
          margin-left: 0;
          margin-right: 0;
          padding-top: 0;
          padding-bottom: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
      }
  }
  .breadcrumb > li,
  .pagination {
      display: inline-block;
  }
  .btn .badge,
  .btn .label {
      top: -1px;
      position: relative;
  }
  @media (max-width: 767px) {
      .navbar-form .form-group {
          margin-bottom: 5px;
      }
      .navbar-form .form-group:last-child {
          margin-bottom: 0;
      }
  }
  .navbar-nav > li > .dropdown-menu {
      margin-top: 0;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
  }
  .navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
      margin-bottom: 0;
      border-radius: 2px 2px 0 0;
  }
  .navbar-btn {
      margin-top: 7.5px;
      margin-bottom: 7.5px;
  }
  .navbar-btn.btn-sm {
      margin-top: 10px;
      margin-bottom: 10px;
  }
  .navbar-btn.btn-xs {
      margin-top: 14px;
      margin-bottom: 14px;
  }
  .navbar-text {
      margin-top: 16px;
      margin-bottom: 16px;
  }
  @media (min-width: 768px) {
      .navbar-text {
          float: left;
          margin-left: 15px;
          margin-right: 15px;
      }
      .navbar-left {
          float: left !important;
      }
      .navbar-right {
          float: right !important;
          margin-right: -15px;
      }
      .navbar-right ~ .navbar-right {
          margin-right: 0;
      }
  }
  .navbar-default {
      background-color: #f8f8f8;
      border-color: #e7e7e7;
  }
  .navbar-default .navbar-brand {
      color: #777;
  }
  .navbar-default .navbar-brand:focus,
  .navbar-default .navbar-brand:hover {
      color: #5e5e5e;
      background-color: transparent;
  }
  .navbar-default .navbar-nav > li > a,
  .navbar-default .navbar-text {
      color: #777;
  }
  .navbar-default .navbar-nav > li > a:focus,
  .navbar-default .navbar-nav > li > a:hover {
      color: #333;
      background-color: transparent;
  }
  .navbar-default .navbar-nav > .active > a,
  .navbar-default .navbar-nav > .active > a:focus,
  .navbar-default .navbar-nav > .active > a:hover {
      color: #555;
      background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav > .disabled > a,
  .navbar-default .navbar-nav > .disabled > a:focus,
  .navbar-default .navbar-nav > .disabled > a:hover {
      color: #ccc;
      background-color: transparent;
  }
  .navbar-default .navbar-toggle {
      border-color: #ddd;
  }
  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
      background-color: #ddd;
  }
  .navbar-default .navbar-toggle .icon-bar {
      background-color: #888;
  }
  .navbar-default .navbar-collapse,
  .navbar-default .navbar-form {
      border-color: #e7e7e7;
  }
  .navbar-default .navbar-nav > .open > a,
  .navbar-default .navbar-nav > .open > a:focus,
  .navbar-default .navbar-nav > .open > a:hover {
      background-color: #e7e7e7;
      color: #555;
  }
  @media (max-width: 767px) {
      .navbar-default .navbar-nav .open .dropdown-menu > li > a {
          color: #777;
      }
      .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus,
      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover {
          color: #333;
          background-color: transparent;
      }
      .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
      .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus,
      .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover {
          color: #555;
          background-color: #e7e7e7;
      }
      .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
      .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus,
      .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover {
          color: #ccc;
          background-color: transparent;
      }
  }
  .navbar-default .navbar-link {
      color: #777;
  }
  .navbar-default .navbar-link:hover {
      color: #333;
  }
  .navbar-default .btn-link {
      color: #777;
  }
  .navbar-default .btn-link:focus,
  .navbar-default .btn-link:hover {
      color: #333;
  }
  .navbar-default .btn-link[disabled]:focus,
  .navbar-default .btn-link[disabled]:hover,
  fieldset[disabled] .navbar-default .btn-link:focus,
  fieldset[disabled] .navbar-default .btn-link:hover {
      color: #ccc;
  }
  .navbar-inverse {
      background-color: #222;
      border-color: #080808;
  }
  .navbar-inverse .navbar-brand {
      color: #9d9d9d;
  }
  .navbar-inverse .navbar-brand:focus,
  .navbar-inverse .navbar-brand:hover {
      color: #fff;
      background-color: transparent;
  }
  .navbar-inverse .navbar-nav > li > a,
  .navbar-inverse .navbar-text {
      color: #9d9d9d;
  }
  .navbar-inverse .navbar-nav > li > a:focus,
  .navbar-inverse .navbar-nav > li > a:hover {
      color: #fff;
      background-color: transparent;
  }
  .navbar-inverse .navbar-nav > .active > a,
  .navbar-inverse .navbar-nav > .active > a:focus,
  .navbar-inverse .navbar-nav > .active > a:hover {
      color: #fff;
      background-color: #080808;
  }
  .navbar-inverse .navbar-nav > .disabled > a,
  .navbar-inverse .navbar-nav > .disabled > a:focus,
  .navbar-inverse .navbar-nav > .disabled > a:hover {
      color: #444;
      background-color: transparent;
  }
  .navbar-inverse .navbar-toggle {
      border-color: #333;
  }
  .navbar-inverse .navbar-toggle:focus,
  .navbar-inverse .navbar-toggle:hover {
      background-color: #333;
  }
  .navbar-inverse .navbar-toggle .icon-bar {
      background-color: #fff;
  }
  .navbar-inverse .navbar-collapse,
  .navbar-inverse .navbar-form {
      border-color: #101010;
  }
  .navbar-inverse .navbar-nav > .open > a,
  .navbar-inverse .navbar-nav > .open > a:focus,
  .navbar-inverse .navbar-nav > .open > a:hover {
      background-color: #080808;
      color: #fff;
  }
  @media (max-width: 767px) {
      .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
          border-color: #080808;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
          background-color: #080808;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
          color: #9d9d9d;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus,
      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover {
          color: #fff;
          background-color: transparent;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover {
          color: #fff;
          background-color: #080808;
      }
      .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus,
      .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover {
          color: #444;
          background-color: transparent;
      }
  }
  .navbar-inverse .navbar-link {
      color: #9d9d9d;
  }
  .navbar-inverse .navbar-link:hover {
      color: #fff;
  }
  .navbar-inverse .btn-link {
      color: #9d9d9d;
  }
  .navbar-inverse .btn-link:focus,
  .navbar-inverse .btn-link:hover {
      color: #fff;
  }
  .navbar-inverse .btn-link[disabled]:focus,
  .navbar-inverse .btn-link[disabled]:hover,
  fieldset[disabled] .navbar-inverse .btn-link:focus,
  fieldset[disabled] .navbar-inverse .btn-link:hover {
      color: #444;
  }
  .breadcrumb {
      padding: 8px 20px;
      list-style: none;
      background-color: transparent;
  }
  .breadcrumb > li + li:before {
      content: "/\00a0";
      padding: 0 5px;
      color: #ccc;
  }
  .breadcrumb > .active {
      color: #7c7c7c;
  }
  .pagination {
      padding-left: 0;
      margin: 18px 0;
  }
  .pagination > li > a,
  .pagination > li > span {
      float: left;
      text-decoration: none;
      color: #7e7e7e;
      background-color: #e2e2e2;
      border: 1px solid #fff;
      margin-left: -1px;
  }
  .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span,
  .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
  }
  .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span,
  .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span {
      margin-left: 0;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
  }
  .pagination > li > a:focus,
  .pagination > li > a:hover,
  .pagination > li > span:focus,
  .pagination > li > span:hover {
      z-index: 2;
      color: #333;
      background-color: #d7d7d7;
      border-color: #fff;
  }
  .pagination > .active > a,
  .pagination > .active > a:focus,
  .pagination > .active > a:hover,
  .pagination > .active > span,
  .pagination > .active > span:focus,
  .pagination > .active > span:hover {
      z-index: 3;
      color: #fff;
      background-color: #00bcd4;
      border-color: #fff;
      cursor: default;
  }
  .pagination > .disabled > a,
  .pagination > .disabled > a:focus,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > span,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > span:hover {
      color: #777;
      background-color: #e2e2e2;
      border-color: #fff;
      cursor: not-allowed;
  }
  .pagination-lg > li > a,
  .pagination-lg > li > span {
      padding: 10px 16px;
      font-size: 17px;
      line-height: 1.3333333;
  }
  .pagination-sm > li > a,
  .pagination-sm > li > span {
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
  }
  .badge,
  .label {
      line-height: 1;
      white-space: nowrap;
      text-align: center;
  }
  .pager {
      padding-left: 0;
      margin: 18px 0;
      list-style: none;
      text-align: center;
  }
  .pager li {
      display: inline;
  }
  .pager li > a,
  .pager li > span {
      display: inline-block;
      background-color: #e2e2e2;
      border: 1px solid #fff;
      border-radius: 5px;
  }
  .pager li > a:focus,
  .pager li > a:hover {
      text-decoration: none;
      background-color: #d7d7d7;
  }
  .pager .next > a,
  .pager .next > span {
      float: right;
  }
  .pager .previous > a,
  .pager .previous > span {
      float: left;
  }
  .pager .disabled > a,
  .pager .disabled > a:focus,
  .pager .disabled > a:hover,
  .pager .disabled > span {
      color: #777;
      background-color: #e2e2e2;
      cursor: not-allowed;
  }
  .label {
      display: inline;
      padding: 0.2em 0.6em 0.3em;
      font-size: 75%;
      font-weight: 700;
      color: #fff;
      vertical-align: baseline;
      border-radius: 0.25em;
  }
  a.label:focus,
  a.label:hover {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
  }
  .label:empty {
      display: none;
  }
  .label-default {
      background-color: #777;
  }
  .label-default[href]:focus,
  .label-default[href]:hover {
      background-color: #5e5e5e;
  }
  .label-primary {
      background-color: #61a3d2;
  }
  .label-primary[href]:focus,
  .label-primary[href]:hover {
      background-color: #0c7cd5;
  }
  .label-success {
      background-color: #4caf50;
  }
  .label-success[href]:focus,
  .label-success[href]:hover {
      background-color: #3d8b40;
  }
  .label-info {
      background-color: #00bcd4;
  }
  .label-info[href]:focus,
  .label-info[href]:hover {
      background-color: #008fa1;
  }
  .label-warning {
      background-color: #ff9800;
  }
  .label-warning[href]:focus,
  .label-warning[href]:hover {
      background-color: #cc7a00;
  }
  .label-danger {
      background-color: #f44336;
  }
  .label-danger[href]:focus,
  .label-danger[href]:hover {
      background-color: #ea1c0d;
  }
  .badge,
  .list-group-item.active > .badge,
  .nav-pills > .active > a > .badge {
      color: #fff;
      background-color: #61a3d2;
  }
  .badge {
      display: inline-block;
      min-width: 10px;
      padding: 3px 7px;
      font-size: 12px;
      font-weight: 400;
      vertical-align: middle;
      border-radius: 2px;
  }
  .badge:empty {
      display: none;
  }
  .media-object,
  .thumbnail {
      display: block;
  }
  .btn-group-xs > .btn .badge,
  .btn-xs .badge {
      top: 0;
      padding: 1px 5px;
  }
  a.badge:focus,
  a.badge:hover {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
  }
  .jumbotron,
  .jumbotron .h1,
  .jumbotron h1 {
      color: inherit;
  }
  .list-group-item > .badge {
      float: right;
  }
  .list-group-item > .badge + .badge {
      margin-right: 5px;
  }
  .nav-pills > li > a > .badge {
      margin-left: 3px;
  }
  .jumbotron {
      padding-top: 30px;
      padding-bottom: 30px;
      margin-bottom: 30px;
      background-color: #f7f7f7;
  }
  .jumbotron p {
      margin-bottom: 15px;
      font-size: 20px;
      font-weight: 200;
  }
  .alert,
  .thumbnail {
      margin-bottom: 18px;
  }
  .jumbotron > hr {
      border-top-color: #dedede;
  }
  .container .jumbotron,
  .container-fluid .jumbotron {
      border-radius: 2px;
      padding-left: 15px;
      padding-right: 15px;
  }
  .jumbotron .container {
      max-width: 100%;
  }
  @media screen and (min-width: 768px) {
      .jumbotron {
          padding-top: 48px;
          padding-bottom: 48px;
      }
      .container .jumbotron,
      .container-fluid .jumbotron {
          padding-left: 60px;
          padding-right: 60px;
      }
      .jumbotron .h1,
      .jumbotron h1 {
          font-size: 59px;
      }
  }
  .thumbnail {
      padding: 3px;
      line-height: 1.42857143;
      background-color: #fff;
      border: 1px solid #ededed;
      border-radius: 2px;
      -webkit-transition: border 0.2s ease-in-out;
      -o-transition: border 0.2s ease-in-out;
      transition: border 0.2s ease-in-out;
  }
  .thumbnail a > img,
  .thumbnail > img {
      margin-left: auto;
      margin-right: auto;
  }
  a.thumbnail.active,
  a.thumbnail:focus,
  a.thumbnail:hover {
      border-color: #61a3d2;
  }
  .thumbnail .caption {
      padding: 10px 15px;
      color: #5e5e5e;
  }
  .alert {
      padding: 15px;
      border: 1px solid transparent;
      border-radius: 2px;
  }
  .alert-danger,
  .alert-info,
  .alert-success,
  .alert-warning {
      border-color: transparent;
  }
  .alert-danger hr,
  .alert-info hr,
  .alert-success hr,
  .alert-warning hr {
      border-top-color: transparent;
  }
  .alert h4 {
      margin-top: 0;
      color: inherit;
  }
  .alert .alert-link {
      font-weight: 700;
  }
  .alert > p,
  .alert > ul {
      margin-bottom: 0;
  }
  .alert > p + p {
      margin-top: 5px;
  }
  .alert-dismissable,
  .alert-dismissible {
      padding-right: 35px;
  }
  .alert-dismissable .close,
  .alert-dismissible .close {
      position: relative;
      top: -2px;
      right: -21px;
      color: inherit;
  }
  .modal,
  .modal-backdrop {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }
  .alert-success {
      background-color: #4caf50;
      color: #fff;
  }
  .alert-success .alert-link {
      color: #e6e6e6;
  }
  .alert-info {
      background-color: #61a3d2;
      color: #fff;
  }
  .alert-info .alert-link {
      color: #e6e6e6;
  }
  .alert-warning {
      background-color: #ffc107;
      color: #fff;
  }
  .alert-warning .alert-link {
      color: #e6e6e6;
  }
  .alert-danger {
      background-color: #f44336;
      color: #fff;
  }
  .alert-danger .alert-link {
      color: #e6e6e6;
  }
  @-webkit-keyframes progress-bar-stripes {
      from {
          background-position: 40px 0;
      }
      to {
          background-position: 0 0;
      }
  }
  @keyframes progress-bar-stripes {
      from {
          background-position: 40px 0;
      }
      to {
          background-position: 0 0;
      }
  }
  .progress {
      overflow: hidden;
      background-color: #f5f5f5;
      -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .progress-bar {
      float: left;
      width: 0;
      height: 100%;
      font-size: 12px;
      line-height: 18px;
      color: #fff;
      text-align: center;
      background-color: #61a3d2;
      -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
      box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
      -webkit-transition: width 0.6s ease;
      -o-transition: width 0.6s ease;
      transition: width 0.6s ease;
  }
  .progress-bar-striped,
  .progress-striped .progress-bar {
      background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
      background-size: 40px 40px;
  }
  .progress-bar.active,
  .progress.active .progress-bar {
      -webkit-animation: progress-bar-stripes 2s linear infinite;
      -o-animation: progress-bar-stripes 2s linear infinite;
      animation: progress-bar-stripes 2s linear infinite;
  }
  .progress-bar-success {
      background-color: #4caf50;
  }
  .progress-striped .progress-bar-success {
      background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  }
  .progress-striped .progress-bar-info,
  .progress-striped .progress-bar-warning {
      background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
      background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  }
  .progress-bar-info {
      background-color: #00bcd4;
  }
  .progress-striped .progress-bar-info {
      background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  }
  .progress-bar-warning {
      background-color: #ff9800;
  }
  .progress-striped .progress-bar-warning {
      background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  }
  .progress-bar-danger {
      background-color: #f44336;
  }
  .progress-striped .progress-bar-danger {
      background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
      background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
      background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  }
  .media {
      margin-top: 15px;
  }
  .media-heading,
  .media:first-child,
  .panel-title {
      margin-top: 0;
  }
  .media,
  .media-body {
      zoom: 1;
      overflow: hidden;
  }
  .media-object.img-thumbnail {
      max-width: none;
  }
  .media-right,
  .media > .pull-right {
      padding-left: 10px;
  }
  .list-group,
  .media-list {
      padding-left: 0;
  }
  .media-left,
  .media > .pull-left {
      padding-right: 10px;
  }
  .media-body,
  .media-left,
  .media-right {
      display: table-cell;
      vertical-align: top;
  }
  .btn-file,
  .fileinput .btn,
  .fileinput .thumbnail,
  .fileinput-filename,
  .media-middle {
      vertical-align: middle;
  }
  .media-bottom {
      vertical-align: bottom;
  }
  .media-list {
      list-style: none;
  }
  .list-group-item {
      position: relative;
      display: block;
      padding: 10px 15px;
      margin-bottom: -1px;
      background-color: transparent;
      border: 1px solid #e9e9e9;
  }
  .list-group-item:first-child {
      border-top-right-radius: 2px;
      border-top-left-radius: 2px;
  }
  .list-group-item:last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 2px;
      border-bottom-left-radius: 2px;
  }
  a.list-group-item,
  button.list-group-item {
      color: #555;
  }
  a.list-group-item .list-group-item-heading,
  button.list-group-item .list-group-item-heading {
      color: #333;
  }
  a.list-group-item:focus,
  a.list-group-item:hover,
  button.list-group-item:focus,
  button.list-group-item:hover {
      text-decoration: none;
      color: #555;
      background-color: #f7f7f7;
  }
  button.list-group-item {
      width: 100%;
      text-align: left;
  }
  .list-group-item.disabled,
  .list-group-item.disabled:focus,
  .list-group-item.disabled:hover {
      background-color: #fff;
      color: #b5b4b4;
      cursor: not-allowed;
  }
  .list-group-item.disabled .list-group-item-heading,
  .list-group-item.disabled:focus .list-group-item-heading,
  .list-group-item.disabled:hover .list-group-item-heading {
      color: inherit;
  }
  .list-group-item.disabled .list-group-item-text,
  .list-group-item.disabled:focus .list-group-item-text,
  .list-group-item.disabled:hover .list-group-item-text {
      color: #b5b4b4;
  }
  .list-group-item.active,
  .list-group-item.active:focus,
  .list-group-item.active:hover {
      z-index: 2;
      color: #000;
      background-color: #f5f5f5;
      border-color: #e9e9e9;
  }
  .list-group-item.active .list-group-item-heading,
  .list-group-item.active .list-group-item-heading > .small,
  .list-group-item.active .list-group-item-heading > small,
  .list-group-item.active:focus .list-group-item-heading,
  .list-group-item.active:focus .list-group-item-heading > .small,
  .list-group-item.active:focus .list-group-item-heading > small,
  .list-group-item.active:hover .list-group-item-heading,
  .list-group-item.active:hover .list-group-item-heading > .small,
  .list-group-item.active:hover .list-group-item-heading > small {
      color: inherit;
  }
  .list-group-item.active .list-group-item-text,
  .list-group-item.active:focus .list-group-item-text,
  .list-group-item.active:hover .list-group-item-text {
      color: #fff;
  }
  .list-group-item-success {
      color: #67bd6a;
      background-color: #67bd6a;
  }
  a.list-group-item-success,
  button.list-group-item-success {
      color: #67bd6a;
  }
  a.list-group-item-success .list-group-item-heading,
  button.list-group-item-success .list-group-item-heading {
      color: inherit;
  }
  a.list-group-item-success:focus,
  a.list-group-item-success:hover,
  button.list-group-item-success:focus,
  button.list-group-item-success:hover {
      color: #67bd6a;
      background-color: #55b559;
  }
  a.list-group-item-success.active,
  a.list-group-item-success.active:focus,
  a.list-group-item-success.active:hover,
  button.list-group-item-success.active,
  button.list-group-item-success.active:focus,
  button.list-group-item-success.active:hover {
      color: #fff;
      background-color: #67bd6a;
      border-color: #67bd6a;
  }
  .list-group-item-info {
      color: #31708f;
      background-color: #d9edf7;
  }
  a.list-group-item-info,
  button.list-group-item-info {
      color: #31708f;
  }
  a.list-group-item-info .list-group-item-heading,
  button.list-group-item-info .list-group-item-heading {
      color: inherit;
  }
  a.list-group-item-info:focus,
  a.list-group-item-info:hover,
  button.list-group-item-info:focus,
  button.list-group-item-info:hover {
      color: #31708f;
      background-color: #c4e3f3;
  }
  a.list-group-item-info.active,
  a.list-group-item-info.active:focus,
  a.list-group-item-info.active:hover,
  button.list-group-item-info.active,
  button.list-group-item-info.active:focus,
  button.list-group-item-info.active:hover {
      color: #fff;
      background-color: #31708f;
      border-color: #31708f;
  }
  .list-group-item-warning {
      color: #ffa829;
      background-color: #ffa829;
  }
  a.list-group-item-warning,
  button.list-group-item-warning {
      color: #ffa829;
  }
  a.list-group-item-warning .list-group-item-heading,
  button.list-group-item-warning .list-group-item-heading {
      color: inherit;
  }
  a.list-group-item-warning:focus,
  a.list-group-item-warning:hover,
  button.list-group-item-warning:focus,
  button.list-group-item-warning:hover {
      color: #ffa829;
      background-color: #ff9e0f;
  }
  a.list-group-item-warning.active,
  a.list-group-item-warning.active:focus,
  a.list-group-item-warning.active:hover,
  button.list-group-item-warning.active,
  button.list-group-item-warning.active:focus,
  button.list-group-item-warning.active:hover {
      color: #fff;
      background-color: #ffa829;
      border-color: #ffa829;
  }
  .list-group-item-danger {
      color: #f6675d;
      background-color: #f6675d;
  }
  a.list-group-item-danger,
  button.list-group-item-danger {
      color: #f6675d;
  }
  a.list-group-item-danger .list-group-item-heading,
  button.list-group-item-danger .list-group-item-heading {
      color: inherit;
  }
  a.list-group-item-danger:focus,
  a.list-group-item-danger:hover,
  button.list-group-item-danger:focus,
  button.list-group-item-danger:hover {
      color: #f6675d;
      background-color: #f55145;
  }
  a.list-group-item-danger.active,
  a.list-group-item-danger.active:focus,
  a.list-group-item-danger.active:hover,
  button.list-group-item-danger.active,
  button.list-group-item-danger.active:focus,
  button.list-group-item-danger.active:hover {
      color: #fff;
      background-color: #f6675d;
      border-color: #f6675d;
  }
  .panel-heading > .dropdown .dropdown-toggle,
  .panel-title,
  .panel-title > .small,
  .panel-title > .small > a,
  .panel-title > a,
  .panel-title > small,
  .panel-title > small > a {
      color: inherit;
  }
  .list-group-item-heading {
      margin-top: 0;
      margin-bottom: 5px;
  }
  .list-group-item-text {
      margin-bottom: 0;
      line-height: 1.3;
  }
  .panel {
      margin-bottom: 18px;
      background-color: #fff;
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  }
  .panel-title,
  .panel > .list-group,
  .panel > .panel-collapse > .list-group,
  .panel > .panel-collapse > .table,
  .panel > .table,
  .panel > .table-responsive > .table {
      margin-bottom: 0;
  }
  .panel-body {
      padding: 15px;
  }
  .panel-heading {
      border-bottom: 1px solid transparent;
      border-top-right-radius: 1px;
      border-top-left-radius: 1px;
  }
  .panel-title {
      font-size: 15px;
  }
  .panel-footer {
      padding: 10px 15px;
      background-color: #f5f5f5;
      border-top: 1px solid #ddd;
      border-bottom-right-radius: 1px;
      border-bottom-left-radius: 1px;
  }
  .panel > .list-group .list-group-item,
  .panel > .panel-collapse > .list-group .list-group-item {
      border-width: 1px 0;
      border-radius: 0;
  }
  .panel-group .panel-heading,
  .panel > .table-bordered > tbody > tr:first-child > td,
  .panel > .table-bordered > tbody > tr:first-child > th,
  .panel > .table-bordered > tbody > tr:last-child > td,
  .panel > .table-bordered > tbody > tr:last-child > th,
  .panel > .table-bordered > tfoot > tr:last-child > td,
  .panel > .table-bordered > tfoot > tr:last-child > th,
  .panel > .table-bordered > thead > tr:first-child > td,
  .panel > .table-bordered > thead > tr:first-child > th,
  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th,
  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th {
      border-bottom: 0;
  }
  .panel > .table-responsive:last-child > .table:last-child,
  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child,
  .panel > .table:last-child,
  .panel > .table:last-child > tbody:last-child > tr:last-child,
  .panel > .table:last-child > tfoot:last-child > tr:last-child {
      border-bottom-left-radius: 1px;
      border-bottom-right-radius: 1px;
  }
  .panel > .list-group:first-child .list-group-item:first-child,
  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
      border-top: 0;
      border-top-right-radius: 1px;
      border-top-left-radius: 1px;
  }
  .panel > .list-group:last-child .list-group-item:last-child,
  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
      border-bottom: 0;
      border-bottom-right-radius: 1px;
      border-bottom-left-radius: 1px;
  }
  .panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
  }
  .panel > .table-responsive:first-child > .table:first-child,
  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child,
  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
  .panel > .table:first-child,
  .panel > .table:first-child > tbody:first-child > tr:first-child,
  .panel > .table:first-child > thead:first-child > tr:first-child {
      border-top-right-radius: 1px;
      border-top-left-radius: 1px;
  }
  .list-group + .panel-footer,
  .panel-heading + .list-group .list-group-item:first-child {
      border-top-width: 0;
  }
  .panel > .panel-collapse > .table caption,
  .panel > .table caption,
  .panel > .table-responsive > .table caption {
      padding-left: 15px;
      padding-right: 15px;
  }
  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child,
  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
  .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
  .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
  .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
  .panel > .table:first-child > thead:first-child > tr:first-child th:first-child {
      border-top-left-radius: 1px;
  }
  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child,
  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
  .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
  .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
  .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
  .panel > .table:first-child > thead:first-child > tr:first-child th:last-child {
      border-top-right-radius: 1px;
  }
  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
  .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
  .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
  .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
  .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
      border-bottom-left-radius: 1px;
  }
  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
  .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
  .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
  .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
  .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
      border-bottom-right-radius: 1px;
  }
  .panel > .panel-body + .table,
  .panel > .panel-body + .table-responsive,
  .panel > .table + .panel-body,
  .panel > .table-responsive + .panel-body {
      border-top: 1px solid #f5f5f5;
  }
  .panel > .table > tbody:first-child > tr:first-child td,
  .panel > .table > tbody:first-child > tr:first-child th {
      border-top: 0;
  }
  .panel > .table-bordered,
  .panel > .table-responsive > .table-bordered {
      border: 0;
  }
  .panel > .table-bordered > tbody > tr > td:first-child,
  .panel > .table-bordered > tbody > tr > th:first-child,
  .panel > .table-bordered > tfoot > tr > td:first-child,
  .panel > .table-bordered > tfoot > tr > th:first-child,
  .panel > .table-bordered > thead > tr > td:first-child,
  .panel > .table-bordered > thead > tr > th:first-child,
  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child,
  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child {
      border-left: 0;
  }
  .panel > .table-bordered > tbody > tr > td:last-child,
  .panel > .table-bordered > tbody > tr > th:last-child,
  .panel > .table-bordered > tfoot > tr > td:last-child,
  .panel > .table-bordered > tfoot > tr > th:last-child,
  .panel > .table-bordered > thead > tr > td:last-child,
  .panel > .table-bordered > thead > tr > th:last-child,
  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child,
  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child {
      border-right: 0;
  }
  .panel > .table-responsive {
      border: 0;
      margin-bottom: 0;
  }
  .panel-group {
      margin-bottom: 18px;
  }
  .panel-group .panel {
      margin-bottom: 0;
      border-radius: 2px;
  }
  .panel-group .panel + .panel {
      margin-top: 5px;
  }
  .panel-group .panel-heading + .panel-collapse > .list-group,
  .panel-group .panel-heading + .panel-collapse > .panel-body {
      border-top: 1px solid #ddd;
  }
  .panel-group .panel-footer {
      border-top: 0;
  }
  .panel-group .panel-footer + .panel-collapse .panel-body {
      border-bottom: 1px solid #ddd;
  }
  .panel-default {
      border-color: #ddd;
  }
  .panel-default > .panel-heading {
      color: #333;
      background-color: #f5f5f5;
      border-color: #ddd;
  }
  .panel-default > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #ddd;
  }
  .panel-default > .panel-heading .badge {
      color: #f5f5f5;
      background-color: #333;
  }
  .panel-default > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #ddd;
  }
  .panel-primary {
      border-color: #61a3d2;
  }
  .panel-primary > .panel-heading {
      color: #fff;
      background-color: #61a3d2;
      border-color: #61a3d2;
  }
  .panel-success,
  .panel-success > .panel-heading {
      border-color: #61b555;
  }
  .panel-primary > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #61a3d2;
  }
  .panel-primary > .panel-heading .badge {
      color: #61a3d2;
      background-color: #fff;
  }
  .panel-success > .panel-heading,
  .panel-success > .panel-heading .badge {
      color: #67bd6a;
      background-color: #67bd6a;
  }
  .panel-primary > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #61a3d2;
  }
  .panel-success > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #61b555;
  }
  .panel-success > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #61b555;
  }
  .panel-info {
      border-color: #bce8f1;
  }
  .panel-info > .panel-heading {
      color: #31708f;
      background-color: #d9edf7;
      border-color: #bce8f1;
  }
  .panel-warning,
  .panel-warning > .panel-heading {
      border-color: #ff760f;
  }
  .panel-info > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #bce8f1;
  }
  .panel-info > .panel-heading .badge {
      color: #d9edf7;
      background-color: #31708f;
  }
  .panel-warning > .panel-heading,
  .panel-warning > .panel-heading .badge {
      color: #ffa829;
      background-color: #ffa829;
  }
  .panel-info > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #bce8f1;
  }
  .panel-danger,
  .panel-danger > .panel-heading {
      border-color: #f54556;
  }
  .panel-warning > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #ff760f;
  }
  .panel-danger > .panel-heading,
  .panel-danger > .panel-heading .badge {
      color: #f6675d;
      background-color: #f6675d;
  }
  .panel-warning > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #ff760f;
  }
  .panel-danger > .panel-heading + .panel-collapse > .panel-body {
      border-top-color: #f54556;
  }
  .panel-danger > .panel-footer + .panel-collapse > .panel-body {
      border-bottom-color: #f54556;
  }
  .embed-responsive {
      position: relative;
      display: block;
      height: 0;
      padding: 0;
      overflow: hidden;
  }
  .embed-responsive .embed-responsive-item,
  .embed-responsive embed,
  .embed-responsive iframe,
  .embed-responsive object,
  .embed-responsive video {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      border: 0;
  }
  .embed-responsive-16by9 {
      padding-bottom: 56.25%;
  }
  .embed-responsive-4by3 {
      padding-bottom: 75%;
  }
  .well {
      min-height: 20px;
      padding: 19px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      border-radius: 2px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  }
  #main,
  body,
  html {
      min-height: 100vh;
  }
  .well-lg,
  .well-sm {
      border-radius: 2px;
  }
  .well blockquote {
      border-color: #ddd;
      border-color: rgba(0, 0, 0, 0.15);
  }
  .well-lg {
      padding: 24px;
  }
  .well-sm {
      padding: 9px;
  }
  .close {
      float: right;
      font-size: 19.5px;
      line-height: 1;
      color: #000;
  }
  .close:focus,
  .close:hover {
      color: #000;
      text-decoration: none;
      cursor: pointer;
      opacity: 0.5;
      filter: alpha(opacity=50);
  }
  button.close {
      padding: 0;
      cursor: pointer;
      background: 0 0;
      border: 0;
      -webkit-appearance: none;
  }
  .modal-content,
  .popover {
      background-clip: padding-box;
  }
  .modal-open {
      overflow: hidden;
  }
  .modal {
      display: none;
      overflow: hidden;
      position: fixed;
      z-index: 1050;
      -webkit-overflow-scrolling: touch;
      outline: 0;
  }
  .modal.fade .modal-dialog {
      -webkit-transform: translate(0, -25%);
      -ms-transform: translate(0, -25%);
      -o-transform: translate(0, -25%);
      transform: translate(0, -25%);
      -webkit-transition: -webkit-transform 0.3s ease-out;
      -moz-transition: -moz-transform 0.3s ease-out;
      -o-transition: -o-transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
  }
  .modal.in .modal-dialog {
      -webkit-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      -o-transform: translate(0, 0);
      transform: translate(0, 0);
  }
  .modal-open .modal {
      overflow-x: hidden;
      overflow-y: auto;
  }
  .modal-dialog {
      position: relative;
      width: auto;
      margin: 10px;
  }
  .modal-content {
      position: relative;
      background-color: #fff;
      border: 1px solid transparent;
      border-radius: 2px;
      -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
      outline: 0;
  }
  .modal-backdrop {
      position: fixed;
      z-index: 11;
      background-color: #000;
  }
  .modal-backdrop.fade {
      opacity: 0;
      filter: alpha(opacity=0);
  }
  .modal-backdrop.in {
      opacity: 0.5;
      filter: alpha(opacity=50);
  }
  .modal-header {
      padding: 15px;
      border-bottom: 1px solid transparent;
  }
  .modal-header .close {
      margin-top: -2px;
  }
  .modal-title {
      margin: 0;
      line-height: transparent;
  }
  .popover,
  .tooltip {
      font-family: roboto;
      font-weight: 400;
      letter-spacing: normal;
      line-break: auto;
      line-height: 1.42857143;
      text-shadow: none;
      text-transform: none;
      white-space: normal;
      word-break: normal;
      word-spacing: normal;
      word-wrap: normal;
      text-decoration: none;
  }
  .modal-body {
      position: relative;
      padding: 15px;
  }
  .modal-footer {
      padding: 15px;
      text-align: right;
      border-top: 1px solid transparent;
  }
  .modal-footer .btn + .btn {
      margin-left: 5px;
      margin-bottom: 0;
  }
  .modal-footer .btn-group .btn + .btn {
      margin-left: -1px;
  }
  .modal-footer .btn-block + .btn-block {
      margin-left: 0;
  }
  .modal-scrollbar-measure {
      position: absolute;
      top: -9999px;
      width: 50px;
      height: 50px;
      overflow: scroll;
  }
  @media (min-width: 768px) {
      .modal-dialog {
          width: 600px;
          margin: 30px auto;
      }
      .modal-content {
          -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      }
      .modal-sm {
          width: 300px;
      }
  }
  .tooltip.top-left .tooltip-arrow,
  .tooltip.top-right .tooltip-arrow {
      bottom: 0;
      margin-bottom: -5px;
      border-width: 5px 5px 0;
      border-top-color: #737373;
  }
  @media (min-width: 992px) {
      .modal-lg {
          width: 900px;
      }
  }
  .tooltip {
      position: absolute;
      z-index: 1070;
      display: block;
      text-align: left;
      text-align: start;
      font-size: 12px;
      opacity: 0;
      filter: alpha(opacity=0);
  }
  .tooltip.in {
      opacity: 1;
      filter: alpha(opacity=100);
  }
  .tooltip.top {
      margin-top: -3px;
      padding: 5px 0;
  }
  .tooltip.right {
      margin-left: 3px;
      padding: 0 5px;
  }
  .tooltip.bottom {
      margin-top: 3px;
      padding: 5px 0;
  }
  .tooltip.left {
      margin-left: -3px;
      padding: 0 5px;
  }
  .tooltip-inner {
      max-width: 200px;
      color: #fff;
      text-align: center;
      background-color: #737373;
      border-radius: 2px;
  }
  .tooltip-arrow {
      position: absolute;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
  }
  .tooltip.top .tooltip-arrow {
      bottom: 0;
      left: 50%;
      margin-left: -5px;
      border-width: 5px 5px 0;
      border-top-color: #737373;
  }
  .tooltip.top-left .tooltip-arrow {
      right: 5px;
  }
  .tooltip.top-right .tooltip-arrow {
      left: 5px;
  }
  .tooltip.right .tooltip-arrow {
      top: 50%;
      left: 0;
      margin-top: -5px;
      border-width: 5px 5px 5px 0;
      border-right-color: #737373;
  }
  .tooltip.left .tooltip-arrow {
      top: 50%;
      right: 0;
      margin-top: -5px;
      border-width: 5px 0 5px 5px;
      border-left-color: #737373;
  }
  .tooltip.bottom .tooltip-arrow,
  .tooltip.bottom-left .tooltip-arrow,
  .tooltip.bottom-right .tooltip-arrow {
      border-width: 0 5px 5px;
      border-bottom-color: #737373;
      top: 0;
  }
  .tooltip.bottom .tooltip-arrow {
      left: 50%;
      margin-left: -5px;
  }
  .tooltip.bottom-left .tooltip-arrow {
      right: 5px;
      margin-top: -5px;
  }
  .tooltip.bottom-right .tooltip-arrow {
      left: 5px;
      margin-top: -5px;
  }
  .popover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      display: none;
      max-width: 276px;
      padding: 1px;
      text-align: left;
      text-align: start;
      font-size: 13px;
      background-color: #fff;
      border: 1px solid #fff;
      border-radius: 2px;
      -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .carousel-caption,
  .carousel-control {
      color: #fff;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      text-align: center;
  }
  .popover.top {
      margin-top: -10px;
  }
  .popover.right {
      margin-left: 10px;
  }
  .popover.bottom {
      margin-top: 10px;
  }
  .popover.left {
      margin-left: -10px;
  }
  .popover-title {
      margin: 0;
      background-color: #fff;
      border-radius: 1px 1px 0 0;
  }
  .popover > .arrow,
  .popover > .arrow:after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
  }
  .carousel,
  .carousel-inner {
      position: relative;
  }
  .popover > .arrow {
      border-width: 11px;
  }
  .popover > .arrow:after {
      border-width: 10px;
  }
  .popover.top > .arrow {
      left: 50%;
      margin-left: -11px;
      border-bottom-width: 0;
      border-top-color: #fff;
      bottom: -11px;
  }
  .popover.top > .arrow:after {
      content: " ";
      bottom: 1px;
      margin-left: -10px;
      border-bottom-width: 0;
      border-top-color: #fff;
  }
  .popover.left > .arrow:after,
  .popover.right > .arrow:after {
      content: " ";
      bottom: -10px;
  }
  .popover.right > .arrow {
      top: 50%;
      left: -11px;
      margin-top: -11px;
      border-left-width: 0;
      border-right-color: #fff;
  }
  .popover.right > .arrow:after {
      left: 1px;
      border-left-width: 0;
      border-right-color: #fff;
  }
  .popover.bottom > .arrow {
      left: 50%;
      margin-left: -11px;
      border-top-width: 0;
      border-bottom-color: #fff;
      top: -11px;
  }
  .popover.bottom > .arrow:after {
      content: " ";
      top: 1px;
      margin-left: -10px;
      border-top-width: 0;
      border-bottom-color: #fff;
  }
  .popover.left > .arrow {
      top: 50%;
      right: -11px;
      margin-top: -11px;
      border-right-width: 0;
      border-left-color: #fff;
  }
  .popover.left > .arrow:after {
      right: 1px;
      border-right-width: 0;
      border-left-color: #fff;
  }
  .carousel-inner {
      overflow: hidden;
      width: 100%;
  }
  .carousel-inner > .item {
      display: none;
      position: relative;
      -webkit-transition: 0.6s ease-in-out left;
      -o-transition: 0.6s ease-in-out left;
      transition: 0.6s ease-in-out left;
  }
  .carousel-inner > .item > a > img,
  .carousel-inner > .item > img {
      line-height: 1;
  }
  @media all and (transform-3d), (-webkit-transform-3d) {
      .carousel-inner > .item {
          -webkit-transition: -webkit-transform 0.6s ease-in-out;
          -moz-transition: -moz-transform 0.6s ease-in-out;
          -o-transition: -o-transform 0.6s ease-in-out;
          transition: transform 0.6s ease-in-out;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000px;
          -moz-perspective: 1000px;
          perspective: 1000px;
      }
      .carousel-inner > .item.active.right,
      .carousel-inner > .item.next {
          -webkit-transform: translate3d(100%, 0, 0);
          transform: translate3d(100%, 0, 0);
          left: 0;
      }
      .carousel-inner > .item.active.left,
      .carousel-inner > .item.prev {
          -webkit-transform: translate3d(-100%, 0, 0);
          transform: translate3d(-100%, 0, 0);
          left: 0;
      }
      .carousel-inner > .item.active,
      .carousel-inner > .item.next.left,
      .carousel-inner > .item.prev.right {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          left: 0;
      }
  }
  .carousel-inner > .active,
  .carousel-inner > .next,
  .carousel-inner > .prev {
      display: block;
  }
  .carousel-inner > .active {
      left: 0;
  }
  .carousel-inner > .next,
  .carousel-inner > .prev {
      position: absolute;
      top: 0;
      width: 100%;
  }
  .carousel-inner > .next {
      left: 100%;
  }
  .carousel-inner > .prev {
      left: -100%;
  }
  .carousel-inner > .next.left,
  .carousel-inner > .prev.right {
      left: 0;
  }
  .carousel-inner > .active.left {
      left: -100%;
  }
  .carousel-inner > .active.right {
      left: 100%;
  }
  .carousel-control {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 15%;
      opacity: 0.5;
      filter: alpha(opacity=50);
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0);
  }
  .carousel-control.left {
      background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.0001) 100%);
      background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.0001) 100%);
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.0001) 100%);
      background-repeat: repeat-x;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  }
  .carousel-control.right {
      left: auto;
      right: 0;
      background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0, rgba(0, 0, 0, 0.5) 100%);
      background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0, rgba(0, 0, 0, 0.5) 100%);
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0, rgba(0, 0, 0, 0.5) 100%);
      background-repeat: repeat-x;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  }
  .carousel-control:focus,
  .carousel-control:hover {
      outline: 0;
      color: #fff;
      text-decoration: none;
      opacity: 0.9;
      filter: alpha(opacity=90);
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next,
  .carousel-control .icon-prev {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      z-index: 5;
      display: inline-block;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
      left: 50%;
      margin-left: -10px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
      right: 50%;
      margin-right: -10px;
  }
  .carousel-control .icon-next,
  .carousel-control .icon-prev {
      width: 20px;
      height: 20px;
      line-height: 1;
      font-family: serif;
  }
  .carousel-control .icon-prev:before {
      content: "\2039";
  }
  .carousel-control .icon-next:before {
      content: "\203a";
  }
  .carousel-indicators {
      position: absolute;
      bottom: 10px;
      left: 50%;
      z-index: 15;
      width: 60%;
      margin-left: -30%;
      padding-left: 0;
      list-style: none;
      text-align: center;
  }
  .carousel-indicators li {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 1px;
      text-indent: -999px;
      border: 1px solid #fff;
      border-radius: 10px;
      cursor: pointer;
      background-color: #000\9;
      background-color: rgba(0, 0, 0, 0);
  }
  .carousel-indicators .active {
      margin: 0;
      width: 12px;
      height: 12px;
      background-color: #fff;
  }
  .carousel-caption {
      position: absolute;
      left: 15%;
      right: 15%;
      bottom: 20px;
      z-index: 10;
      padding-top: 20px;
      padding-bottom: 20px;
  }
  .carousel-caption .btn,
  .close,
  .text-hide {
      text-shadow: none;
  }
  @media screen and (min-width: 768px) {
      .carousel-control .glyphicon-chevron-left,
      .carousel-control .glyphicon-chevron-right,
      .carousel-control .icon-next,
      .carousel-control .icon-prev {
          width: 30px;
          height: 30px;
          margin-top: -10px;
          font-size: 30px;
      }
      .carousel-control .glyphicon-chevron-left,
      .carousel-control .icon-prev {
          margin-left: -10px;
      }
      .carousel-control .glyphicon-chevron-right,
      .carousel-control .icon-next {
          margin-right: -10px;
      }
      .carousel-caption {
          left: 20%;
          right: 20%;
          padding-bottom: 30px;
      }
      .carousel-indicators {
          bottom: 20px;
      }
  }
  .btn-group-vertical > .btn-group:after,
  .btn-group-vertical > .btn-group:before,
  .btn-toolbar:after,
  .btn-toolbar:before,
  .clearfix:after,
  .clearfix:before,
  .container-fluid:after,
  .container-fluid:before,
  .container:after,
  .container:before,
  .dl-horizontal dd:after,
  .dl-horizontal dd:before,
  .form-horizontal .form-group:after,
  .form-horizontal .form-group:before,
  .modal-footer:after,
  .modal-footer:before,
  .modal-header:after,
  .modal-header:before,
  .nav:after,
  .nav:before,
  .navbar-collapse:after,
  .navbar-collapse:before,
  .navbar-header:after,
  .navbar-header:before,
  .navbar:after,
  .navbar:before,
  .pager:after,
  .pager:before,
  .panel-body:after,
  .panel-body:before,
  .row:after,
  .row:before {
      content: " ";
      display: table;
  }
  .center-block {
      display: block;
      margin-left: auto;
      margin-right: auto;
  }
  .pull-right {
      float: right !important;
  }
  .pull-left {
      float: left !important;
  }
  .hide {
      display: none !important;
  }
  .show {
      display: block !important;
  }
  .hidden,
  .visible-lg,
  .visible-lg-block,
  .visible-lg-inline,
  .visible-lg-inline-block,
  .visible-md,
  .visible-md-block,
  .visible-md-inline,
  .visible-md-inline-block,
  .visible-sm,
  .visible-sm-block,
  .visible-sm-inline,
  .visible-sm-inline-block,
  .visible-xs,
  .visible-xs-block,
  .visible-xs-inline,
  .visible-xs-inline-block {
      display: none !important;
  }
  .invisible {
      visibility: hidden;
  }
  .text-hide {
      font: 0/0 a;
      color: transparent;
      background-color: transparent;
      border: 0;
  }
  .affix {
      position: fixed;
  }
  @-ms-viewport {
      width: device-width;
  }
  @media (max-width: 767px) {
      .visible-xs {
          display: block !important;
      }
      table.visible-xs {
          display: table !important;
      }
      tr.visible-xs {
          display: table-row !important;
      }
      td.visible-xs,
      th.visible-xs {
          display: table-cell !important;
      }
      .visible-xs-block {
          display: block !important;
      }
      .visible-xs-inline {
          display: inline !important;
      }
      .visible-xs-inline-block {
          display: inline-block !important;
      }
  }
  @media (min-width: 768px) and (max-width: 991px) {
      .visible-sm {
          display: block !important;
      }
      table.visible-sm {
          display: table !important;
      }
      tr.visible-sm {
          display: table-row !important;
      }
      td.visible-sm,
      th.visible-sm {
          display: table-cell !important;
      }
      .visible-sm-block {
          display: block !important;
      }
      .visible-sm-inline {
          display: inline !important;
      }
      .visible-sm-inline-block {
          display: inline-block !important;
      }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
      .visible-md {
          display: block !important;
      }
      table.visible-md {
          display: table !important;
      }
      tr.visible-md {
          display: table-row !important;
      }
      td.visible-md,
      th.visible-md {
          display: table-cell !important;
      }
      .visible-md-block {
          display: block !important;
      }
      .visible-md-inline {
          display: inline !important;
      }
      .visible-md-inline-block {
          display: inline-block !important;
      }
  }
  @media (min-width: 1200px) {
      .visible-lg {
          display: block !important;
      }
      table.visible-lg {
          display: table !important;
      }
      tr.visible-lg {
          display: table-row !important;
      }
      td.visible-lg,
      th.visible-lg {
          display: table-cell !important;
      }
      .visible-lg-block {
          display: block !important;
      }
      .visible-lg-inline {
          display: inline !important;
      }
      .visible-lg-inline-block {
          display: inline-block !important;
      }
      .hidden-lg {
          display: none !important;
      }
  }
  @media (max-width: 767px) {
      .hidden-xs {
          display: none !important;
      }
  }
  @media (min-width: 768px) and (max-width: 991px) {
      .hidden-sm {
          display: none !important;
      }
  }
  @media (min-width: 992px) and (max-width: 1199px) {
      .hidden-md {
          display: none !important;
      }
  }
  .visible-print {
      display: none !important;
  }
  @media print {
      .visible-print {
          display: block !important;
      }
      table.visible-print {
          display: table !important;
      }
      tr.visible-print {
          display: table-row !important;
      }
      td.visible-print,
      th.visible-print {
          display: table-cell !important;
      }
  }
  .visible-print-block {
      display: none !important;
  }
  @media print {
      .visible-print-block {
          display: block !important;
      }
  }
  .visible-print-inline {
      display: none !important;
  }
  @media print {
      .visible-print-inline {
          display: inline !important;
      }
  }
  .visible-print-inline-block {
      display: none !important;
  }
  @media print {
      .visible-print-inline-block {
          display: inline-block !important;
      }
      .hidden-print {
          display: none !important;
      }
  }
  @font-face {
      font-family: roboto;
      src: url(/fonts/roboto/Roboto-Light-webfont.eot);
      src: url(/fonts/roboto/Roboto-Light-webfont.eot?#iefix) format("embedded-opentype"), url(/fonts/roboto/Roboto-Light-webfont.woff) format("woff"), url(/fonts/roboto/Roboto-Light-webfont.ttf) format("truetype"),
          url(/fonts/roboto/Roboto-Light-webfont.svg#icon) format("svg");
      font-weight: 300;
      font-style: normal;
  }
  @font-face {
      font-family: roboto;
      src: url(/fonts/roboto/Roboto-Regular-webfont.eot);
      src: url(/fonts/roboto/Roboto-Regular-webfont.eot?#iefix) format("embedded-opentype"), url(/fonts/roboto/Roboto-Regular-webfont.woff) format("woff"), url(/fonts/roboto/Roboto-Regular-webfont.ttf) format("truetype"),
          url(/fonts/roboto/Roboto-Regular-webfont.svg#icon) format("svg");
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: roboto;
      src: url(/fonts/roboto/Roboto-Medium-webfont.eot);
      src: url(/fonts/roboto/Roboto-Medium-webfont.eot?#iefix) format("embedded-opentype"), url(/fonts/roboto/Roboto-Medium-webfont.woff) format("woff"), url(/fonts/roboto/Roboto-Medium-webfont.ttf) format("truetype"),
          url(/fonts/roboto/Roboto-Medium-webfont.svg#icon) format("svg");
      font-weight: 500;
      font-style: normal;
  }
  @font-face {
      font-family: roboto;
      src: url(/fonts/roboto/Roboto-Bold-webfont.eot);
      src: url(/fonts/roboto/Roboto-Bold-webfont.eot?#iefix) format("embedded-opentype"), url(/fonts/roboto/Roboto-Bold-webfont.woff) format("woff"), url(/fonts/roboto/Roboto-Bold-webfont.ttf) format("truetype"),
          url(/fonts/roboto/Roboto-Bold-webfont.svg#icon) format("svg");
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
      font-family: satisfy;
      src: url(/fonts/satisfy/satisfy.eot);
      src: url(/fonts/satisfy/satisfy.eot?#iefix) format("embedded-opentype"), url(/fonts/satisfy/satisfy.woff) format("woff"), url(/fonts/satisfy/satisfy.ttf) format("truetype"), url(/fonts/satisfy/satisfy.svg#icon) format("svg");
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
      font-family: weather-icons;
      src: url(/fonts/weather-icons/weather-icons.eot);
      src: url(/fonts/weather-icons/weather-icons.eot?#iefix) format("embedded-opentype"), url(/fonts/weather-icons/weather-icons.woff) format("woff"), url(/fonts/weather-icons/weather-icons.ttf) format("truetype"),
          url(/fonts/weather-icons/weather-icons.svg#icon) format("svg");
      font-weight: 400;
      font-style: normal;
  }
  #weather-widget [class*="icon-"] {
      font-family: weather-icons;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  .icon-0:before {
      content: ":";
  }
  .icon-1:before {
      content: "p";
  }
  .icon-2:before {
      content: "S";
  }
  .icon-3:before {
      content: "Q";
  }
  .icon-4:before {
      content: "S";
  }
  .icon-5:before,
  .icon-6:before,
  .icon-7:before,
  .icon-8:before {
      content: "W";
  }
  .icon-9:before {
      content: "I";
  }
  .icon-10:before {
      content: "W";
  }
  .icon-11:before,
  .icon-12:before,
  .icon-13:before,
  .icon-14:before {
      content: "I";
  }
  .icon-15:before {
      content: "W";
  }
  .icon-16:before {
      content: "I";
  }
  .icon-17:before {
      content: "W";
  }
  .icon-18:before {
      content: "U";
  }
  .icon-19:before,
  .icon-20:before,
  .icon-21:before,
  .icon-22:before,
  .icon-23:before {
      content: "Z";
  }
  .icon-24:before,
  .icon-25:before {
      content: "E";
  }
  .icon-26:before {
      content: "3";
  }
  .icon-27:before {
      content: "a";
  }
  .icon-28:before {
      content: "A";
  }
  .icon-29:before {
      content: "a";
  }
  .icon-30:before {
      content: "A";
  }
  .icon-31:before {
      content: "6";
  }
  .icon-32:before {
      content: "1";
  }
  .icon-33:before {
      content: "6";
  }
  .icon-34:before {
      content: "1";
  }
  .icon-35:before {
      content: "W";
  }
  .icon-36:before {
      content: "1";
  }
  .icon-37:before,
  .icon-38:before,
  .icon-39:before {
      content: "S";
  }
  .icon-40:before {
      content: "M";
  }
  .icon-41:before {
      content: "W";
  }
  .icon-42:before {
      content: "I";
  }
  .icon-43:before {
      content: "W";
  }
  .icon-44:before {
      content: "a";
  }
  .icon-45:before {
      content: "S";
  }
  .icon-46:before {
      content: "U";
  }
  .icon-47:before {
      content: "S";
  }
  .btn-file {
      overflow: hidden;
      position: relative;
  }
  .btn-file > input {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      opacity: 0;
      filter: alpha(opacity=0);
      font-size: 23px;
      height: 100%;
      width: 100%;
      direction: ltr;
      cursor: pointer;
  }
  .fileinput {
      margin-bottom: 9px;
      display: inline-block;
  }
  .fileinput .form-control {
      padding-top: 7px;
      padding-bottom: 5px;
      display: inline-block;
      margin-bottom: 0;
      vertical-align: middle;
      cursor: text;
  }
  .fileinput .thumbnail {
      overflow: hidden;
      display: inline-block;
      margin-bottom: 5px;
      text-align: center;
  }
  .fileinput-exists .fileinput-new,
  .fileinput-new .fileinput-exists,
  :full-screen [data-ma-action="fullscreen"] {
      display: none;
  }
  .fileinput .thumbnail > img {
      max-height: 100%;
  }
  .fileinput-inline .fileinput-controls {
      display: inline;
  }
  .fileinput-filename {
      display: inline-block;
      overflow: hidden;
  }
  .form-control .fileinput-filename {
      vertical-align: bottom;
  }
  .fileinput.input-group {
      display: table;
  }
  .fileinput.input-group > * {
      position: relative;
      z-index: 2;
  }
  .fileinput.input-group > .btn-file {
      z-index: 1;
  }
  .fileinput-new .input-group .btn-file,
  .fileinput-new .input-group .btn-file.btn-lg,
  .fileinput-new .input-group .btn-file.btn-sm,
  .fileinput-new .input-group .btn-file.btn-xs,
  .fileinput-new.input-group .btn-file,
  .fileinput-new.input-group .btn-file.btn-lg,
  .fileinput-new.input-group .btn-file.btn-sm,
  .fileinput-new.input-group .btn-file.btn-xs {
      border-radius: 0 2px 2px 0;
  }
  .form-group.has-warning .fileinput .fileinput-preview {
      color: #ffa829;
  }
  .form-group.has-warning .fileinput .thumbnail {
      border-color: #ff760f;
  }
  .form-group.has-error .fileinput .fileinput-preview {
      color: #f6675d;
  }
  .form-group.has-error .fileinput .thumbnail {
      border-color: #f54556;
  }
  .form-group.has-success .fileinput .fileinput-preview {
      color: #67bd6a;
  }
  .form-group.has-success .fileinput .thumbnail {
      border-color: #61b555;
  }
  .input-group-addon:not(:first-child) {
      border-left: 0;
  }
  .waves-effect {
      position: relative;
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      user-select: none;
  }
  #header,
  .toggle-switch {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
  }
  .waves-effect .waves-ripple {
      position: absolute;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      margin-top: -50px;
      margin-left: -50px;
      opacity: 0;
      background: rgba(0, 0, 0, 0.2);
      background: -webkit-radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      background: -o-radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      background: -moz-radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      background: radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      -webkit-transition: all 0.5s ease-out;
      -moz-transition: all 0.5s ease-out;
      -o-transition: all 0.5s ease-out;
      transition: all 0.5s ease-out;
      -webkit-transition-property: -webkit-transform, opacity;
      -moz-transition-property: -moz-transform, opacity;
      -o-transition-property: -o-transform, opacity;
      transition-property: transform, opacity;
      -webkit-transform: scale(0) translate(0, 0);
      -moz-transform: scale(0) translate(0, 0);
      -ms-transform: scale(0) translate(0, 0);
      -o-transform: scale(0) translate(0, 0);
      transform: scale(0) translate(0, 0);
      pointer-events: none;
  }
  .waves-effect.waves-light .waves-ripple {
      background: rgba(255, 255, 255, 0.4);
      background: -webkit-radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      background: -o-radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      background: -moz-radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
      background: radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);
  }
  .waves-effect.waves-classic .waves-ripple {
      background: rgba(0, 0, 0, 0.2);
  }
  .waves-effect.waves-classic.waves-light .waves-ripple {
      background: rgba(255, 255, 255, 0.4);
  }
  .waves-notransition {
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -o-transition: none !important;
      transition: none !important;
  }
  .waves-button,
  .waves-circle {
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-mask-image: -webkit-radial-gradient(circle, #fff 100%, #000 100%);
  }
  .hi-trigger:before,
  .sub-menu > a:after {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
  }
  .waves-button,
  .waves-button-input,
  .waves-button:hover,
  .waves-button:visited {
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      border: none;
      outline: 0;
      color: inherit;
      background-color: rgba(0, 0, 0, 0);
      font-size: 1em;
      line-height: 1em;
      text-align: center;
      text-decoration: none;
      z-index: 1;
  }
  .waves-button {
      padding: 0.85em 1.1em;
      border-radius: 0.2em;
  }
  .waves-button-input {
      margin: 0;
      padding: 0.85em 1.1em;
  }
  .waves-input-wrapper {
      border-radius: 0.2em;
      vertical-align: bottom;
  }
  .waves-input-wrapper.waves-button {
      padding: 0;
  }
  .waves-input-wrapper .waves-button-input {
      position: relative;
      top: 0;
      left: 0;
      z-index: 1;
  }
  .waves-circle {
      text-align: center;
      width: 2.5em;
      height: 2.5em;
      line-height: 2.5em;
      border-radius: 50%;
  }
  .waves-float {
      -webkit-mask-image: none;
      -webkit-box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
      box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
  }
  .waves-float:active {
      -webkit-box-shadow: 0 8px 20px 1px rgba(0, 0, 0, 0.3);
      box-shadow: 0 8px 20px 1px rgba(0, 0, 0, 0.3);
  }
  .waves-block {
      display: block;
  }
  .m-0 {
      margin: 0 !important;
  }
  .m-t-0 {
      margin-top: 0 !important;
  }
  .m-b-0 {
      margin-bottom: 0 !important;
  }
  .m-l-0 {
      margin-left: 0 !important;
  }
  .m-r-0 {
      margin-right: 0 !important;
  }
  .m-5 {
      margin: 5px !important;
  }
  .m-t-5 {
      margin-top: 5px !important;
  }
  .m-b-5 {
      margin-bottom: 5px !important;
  }
  .m-l-5 {
      margin-left: 5px !important;
  }
  .m-r-5 {
      margin-right: 5px !important;
  }
  .m-10 {
      margin: 10px !important;
  }
  .m-t-10 {
      margin-top: 10px !important;
  }
  .m-b-10 {
      margin-bottom: 10px !important;
  }
  .m-l-10 {
      margin-left: 10px !important;
  }
  .m-r-10 {
      margin-right: 10px !important;
  }
  .m-15 {
      margin: 15px !important;
  }
  .m-t-15 {
      margin-top: 15px !important;
  }
  .m-b-15 {
      margin-bottom: 15px !important;
  }
  .m-l-15 {
      margin-left: 15px !important;
  }
  .m-r-15 {
      margin-right: 15px !important;
  }
  .m-20 {
      margin: 20px !important;
  }
  .m-t-20 {
      margin-top: 20px !important;
  }
  .m-b-20 {
      margin-bottom: 20px !important;
  }
  .m-l-20 {
      margin-left: 20px !important;
  }
  .m-r-20 {
      margin-right: 20px !important;
  }
  .m-25 {
      margin: 25px !important;
  }
  .m-t-25 {
      margin-top: 25px !important;
  }
  .m-b-25 {
      margin-bottom: 25px !important;
  }
  .m-l-25 {
      margin-left: 25px !important;
  }
  .m-r-25 {
      margin-right: 25px !important;
  }
  .m-30 {
      margin: 30px !important;
  }
  .m-t-30 {
      margin-top: 30px !important;
  }
  .m-b-30 {
      margin-bottom: 30px !important;
  }
  .m-l-30 {
      margin-left: 30px !important;
  }
  .m-r-30 {
      margin-right: 30px !important;
  }
  .p-0 {
      padding: 0 !important;
  }
  .p-t-0 {
      padding-top: 0 !important;
  }
  .p-b-0 {
      padding-bottom: 0 !important;
  }
  .p-l-0 {
      padding-left: 0 !important;
  }
  .p-r-0 {
      padding-right: 0 !important;
  }
  .p-5 {
      padding: 5px !important;
  }
  .p-t-5 {
      padding-top: 5px !important;
  }
  .p-b-5 {
      padding-bottom: 5px !important;
  }
  .p-l-5 {
      padding-left: 5px !important;
  }
  .p-r-5 {
      padding-right: 5px !important;
  }
  .p-10 {
      padding: 10px !important;
  }
  .p-t-10 {
      padding-top: 10px !important;
  }
  .p-b-10 {
      padding-bottom: 10px !important;
  }
  .p-l-10 {
      padding-left: 10px !important;
  }
  .p-r-10 {
      padding-right: 10px !important;
  }
  .p-15 {
      padding: 15px !important;
  }
  .p-t-15 {
      padding-top: 15px !important;
  }
  .p-b-15 {
      padding-bottom: 15px !important;
  }
  .p-l-15 {
      padding-left: 15px !important;
  }
  .p-r-15 {
      padding-right: 15px !important;
  }
  .p-20 {
      padding: 20px !important;
  }
  .p-t-20 {
      padding-top: 20px !important;
  }
  .p-b-20 {
      padding-bottom: 20px !important;
  }
  .p-l-20 {
      padding-left: 20px !important;
  }
  .p-r-20 {
      padding-right: 20px !important;
  }
  .p-25 {
      padding: 25px !important;
  }
  .p-t-25 {
      padding-top: 25px !important;
  }
  .p-b-25 {
      padding-bottom: 25px !important;
  }
  .p-l-25 {
      padding-left: 25px !important;
  }
  .p-r-25 {
      padding-right: 25px !important;
  }
  .p-30 {
      padding: 30px !important;
  }
  .p-t-30 {
      padding-top: 30px !important;
  }
  .p-b-30 {
      padding-bottom: 30px !important;
  }
  .p-l-30 {
      padding-left: 30px !important;
  }
  .p-r-30 {
      padding-right: 30px !important;
  }
  .f-8 {
      font-size: 8px !important;
  }
  .f-9 {
      font-size: 9px !important;
  }
  .f-10 {
      font-size: 10px !important;
  }
  .f-11 {
      font-size: 11px !important;
  }
  .f-12 {
      font-size: 12px !important;
  }
  .f-13 {
      font-size: 13px !important;
  }
  .f-14 {
      font-size: 14px !important;
  }
  .f-15 {
      font-size: 15px !important;
  }
  .f-16 {
      font-size: 16px !important;
  }
  .f-17 {
      font-size: 17px !important;
  }
  .f-18 {
      font-size: 18px !important;
  }
  .f-19 {
      font-size: 19px !important;
  }
  .f-20 {
      font-size: 20px !important;
  }
  .f-300 {
      font-weight: 300 !important;
  }
  .f-400 {
      font-weight: 400 !important;
  }
  .f-500 {
      font-weight: 500 !important;
  }
  .f-700 {
      font-weight: 700 !important;
  }
  .close,
  body {
      font-weight: 400;
  }
  .p-relative {
      position: relative !important;
  }
  .p-absolute {
      position: absolute !important;
  }
  .p-fixed {
      position: fixed !important;
  }
  .p-static {
      position: static !important;
  }
  #main,
  .h-inner,
  .hi-trigger,
  body {
      position: relative;
  }
  .o-hidden {
      overflow: hidden !important;
  }
  .o-visible {
      overflow: visible !important;
  }
  .ie9 textarea,
  .o-auto {
      overflow: auto !important;
  }
  .d-block {
      display: block !important;
  }
  .di-block {
      display: inline-block !important;
  }
  .bgm-white {
      background-color: #fff !important;
  }
  .c-white {
      color: #fff !important;
  }
  .bgm-black {
      background-color: #000 !important;
  }
  .c-black {
      color: #000 !important;
  }
  .bgm-brown {
      background-color: #795548 !important;
  }
  .c-brown {
      color: #795548 !important;
  }
  .bgm-pink {
      background-color: #e91e63 !important;
  }
  .c-pink {
      color: #e91e63 !important;
  }
  .bgm-red {
      background-color: #f44336 !important;
  }
  .c-red {
      color: #f44336 !important;
  }
  .bgm-blue {
      background-color: #61a3d2 !important;
  }
  .c-blue {
      color: #61a3d2 !important;
  }
  .bgm-purple {
      background-color: #ba68c8 !important;
  }
  .c-purple {
      color: #ba68c8 !important;
  }
  .bgm-deeppurple {
      background-color: #673ab7 !important;
  }
  .c-deeppurple {
      color: #673ab7 !important;
  }
  .bgm-lightblue {
      background-color: #03a9f4 !important;
  }
  .c-lightblue {
      color: #03a9f4 !important;
  }
  .bgm-cyan {
      background-color: #00bcd4 !important;
  }
  .c-cyan {
      color: #00bcd4 !important;
  }
  .bgm-teal {
      background-color: #009688 !important;
  }
  .c-teal {
      color: #009688 !important;
  }
  .bgm-green {
      background-color: #4caf50 !important;
  }
  .c-green {
      color: #4caf50 !important;
  }
  .bgm-lightgreen {
      background-color: #8bc34a !important;
  }
  .c-lightgreen {
      color: #8bc34a !important;
  }
  .bgm-lime {
      background-color: #cddc39 !important;
  }
  .c-lime {
      color: #cddc39 !important;
  }
  .bgm-yellow {
      background-color: #ffeb3b !important;
  }
  .c-yellow {
      color: #ffeb3b !important;
  }
  .bgm-amber {
      background-color: #ffc107 !important;
  }
  .c-amber {
      color: #ffc107 !important;
  }
  .bgm-orange {
      background-color: #ff9800 !important;
  }
  .c-orange {
      color: #ff9800 !important;
  }
  .bgm-deeporange {
      background-color: #ff5722 !important;
  }
  .c-deeporange {
      color: #ff5722 !important;
  }
  .bgm-gray {
      background-color: #9e9e9e !important;
  }
  .c-gray {
      color: #9e9e9e !important;
  }
  .bgm-bluegray {
      background-color: #607d8b !important;
  }
  .c-bluegray {
      color: #607d8b !important;
  }
  .bgm-indigo {
      background-color: #3f51b5 !important;
  }
  .c-indigo {
      color: #3f51b5 !important;
  }
  .bg-black-trp {
      background-color: rgba(0, 0, 0, 0.1) !important;
  }
  .b-0 {
      border: 0 !important;
  }
  .brd-2,
  .media-object {
      border-radius: 2px;
  }
  .w-100 {
      width: 100% !important;
  }
  .media {
      overflow: visible;
  }
  .media:after,
  .media:before {
      content: " ";
      display: table;
  }
  .media > .pull-left {
      padding-right: 15px;
  }
  .media > .pull-right {
      padding-left: 15px;
  }
  .media-heading {
      font-size: 14px;
      margin-bottom: 10px;
  }
  .media-body {
      zoom: 1;
      display: block;
      width: auto;
  }
  .close {
      opacity: 0.5;
      filter: alpha(opacity=50);
  }
  .close:hover {
      color: inherit;
      opacity: 1;
      filter: alpha(opacity=100);
  }
  .dl-horizontal dt {
      text-align: left;
  }
  *,
  a,
  button,
  i,
  input {
      -webkit-font-smoothing: antialiased;
  }
  *,
  :active,
  :focus,
  :hover {
      outline: 0 !important;
      -webkit-tap-highlight-color: transparent !important;
  }
  html {
      overflow-x: hidden\0/;
      -ms-overflow-style: none;
  }
  html:not(.ie9) body {
      overflow-y: scroll;
  }
  html.ismobile * {
      cursor: pointer;
  }
  body {
      overflow-x: hidden;
  }
  audio,
  video {
      outline: 0;
  }
  p {
      margin-bottom: 20px;
  }
  .h1 small,
  .h2 small,
  .h3 small,
  .h4 small,
  .h5 small,
  .h6 small,
  h1 small,
  h2 small,
  h3 small,
  h4 small,
  h5 small,
  h6 small {
      font-size: 12px;
  }
  #main {
      padding-bottom: 110px;
      padding-top: 100px;
  }
  .sidebar-toggled #main {
      height: 100vh;
      overflow: hidden;
  }
  .container.container-alt {
      max-width: 1170px;
  }
  @media (min-width: 1280px) {
      #content:not(.content-alt) {
          padding-left: 283px;
          padding-right: 15px;
      }
  }
  @media (min-width: 768px) and (max-width: 1279px) {
      #content {
          padding-left: 15px;
          padding-right: 15px;
      }
  }
  #content.content-alt {
      max-width: 1200px;
      margin: 0 auto;
  }
  .clist {
      list-style: none;
  }
  .clist > li:before {
      font-family: Material-Design-Iconic-Font;
      margin: 0 10px 0 -20px;
      vertical-align: middle;
  }
  .clist.clist-angle > li:before {
      content: "\f2fb";
  }
  .clist.clist-check > li:before {
      content: "\f26b";
  }
  .clist.clist-star > li:before {
      content: "\f27d";
  }
  .h-inner {
      list-style: none;
      padding: 17px 0;
      margin-bottom: 0;
  }
  .hi-menu,
  .hi-menu > li .dropdown-menu-lg {
      padding: 0;
  }
  .h-inner > li:not(.pull-right) {
      float: left;
  }
  .hi-logo a {
      color: #fff;
      text-transform: uppercase;
      display: block;
      font-size: 16px;
  }
  .hi-trigger {
      margin-left: -5px;
      cursor: pointer;
      display: none !important;
  }
  .hi-trigger:before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.22);
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      transform: scale(0);
      z-index: 0;
      margin-top: -22px;
      margin-left: -22px;
  }
  .hi-trigger.toggled:before {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .hi-menu {
      list-style: none;
  }
  .hi-menu > li {
      display: inline-block;
      margin: 0 1px;
      vertical-align: top;
      min-width: 50px;
  }
  @media (max-width: 767px) {
      .hi-menu > li {
          position: static !important;
      }
  }
  .hi-menu > li .dropdown-menu {
      top: -5px;
  }
  .hi-menu > li .dropdown-menu-lg .lg-body {
      min-height: 350px;
      overflow-x: hidden;
  }
  .hi-menu > li > a {
      color: #fff;
      display: block;
      text-align: center;
      z-index: 1;
      position: relative;
      -webkit-transition: background-color;
      -o-transition: background-color;
      transition: background-color;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
      border-radius: 2px;
  }
  .hi-menu > li > a > .him-icon {
      font-size: 24px;
      line-height: 36px;
  }
  .hi-menu > li > a > .him-label {
      line-height: 35px;
      white-space: nowrap;
      padding: 0 10px;
      font-size: 14px;
      text-transform: uppercase;
  }
  .hi-menu > li > a > .him-counts {
      position: absolute;
      font-style: normal;
      background: #f44336;
      padding: 1px 5px;
      border-radius: 2px;
      right: 7px;
      top: -3px;
      font-size: 10px;
      line-height: 15px;
  }
  .hi-menu > li.toggled > a,
  .hi-menu > li:hover > a {
      background-color: rgba(0, 0, 0, 0.08);
  }
  @media (max-width: 767px) {
      .hi-menu .dropdown-menu-lg {
          width: calc(100% - 28px) !important;
      }
      .hi-menu .dropdown-menu {
          right: 14px;
          top: 55px !important;
      }
  }
  .him-notification:before {
      position: absolute;
      width: 100%;
      height: calc(100% - 70px);
      background: url(/img/notifications.png) center no-repeat;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -webkit-transform: scale(0) rotate(-180deg);
      -ms-transform: scale(0) rotate(-180deg);
      -o-transform: scale(0) rotate(-180deg);
      transform: scale(0) rotate(-180deg);
      opacity: 0;
      filter: alpha(opacity=0);
      top: 42px;
  }
  .h-search-wrap,
  .sidebar {
      -webkit-transition: all;
      -o-transition: all;
  }
  .him-notification.empty:before {
      -webkit-transform: scale(1) rotate(0);
      -ms-transform: scale(1) rotate(0);
      -o-transform: scale(1) rotate(0);
      transform: scale(1) rotate(0);
      opacity: 1;
      filter: alpha(opacity=100);
  }
  :-webkit-full-screen [data-ma-action="fullscreen"] {
      display: none;
  }
  :-moz-full-screen [data-ma-action="fullscreen"] {
      display: none;
  }
  :-ms-fullscreen [data-ma-action="fullscreen"] {
      display: none;
  }
  :fullscreen [data-ma-action="fullscreen"] {
      display: none;
  }
  #header {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      min-height: 70px;
      user-select: none;
      position: fixed;
      z-index: 11;
      width: 100%;
      left: 0;
      top: 0;
      padding: 0 20px;
  }
  #header .ma-backdrop,
  .h-search-wrap {
      position: absolute;
  }
  @media (max-width: 767px) {
      #header {
          padding: 0 8px;
      }
      .h-search-wrap .hsw-close {
          right: 7px;
      }
  }
  #header .hi-logo a {
      padding: 7px 10px;
  }
  @media (max-width: 1279px) {
      #header .hi-trigger {
          display: inline-block !important;
      }
  }
  #header.search-toggled .h-search-wrap {
      top: 0;
      opacity: 1;
      filter: alpha(opacity=100);
  }
  .h-search-wrap {
      top: -65px;
      left: 0;
      width: 100%;
      height: 70px;
      background: #fff;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      opacity: 0;
      filter: alpha(opacity=0);
      z-index: 10;
  }
  .h-search-wrap input[type="text"] {
      border: 0;
      height: 40px;
      padding: 0 10px 0 55px;
      font-size: 18px;
      border-radius: 2px;
      background-color: #efefef;
      width: 100%;
  }
  .h-search-wrap .hsw-close {
      position: absolute;
      top: 15px;
      font-size: 23px;
      font-style: normal;
      width: 45px;
      text-align: center;
      border-radius: 2px 0 0 2px;
      cursor: pointer;
      left: 15px;
      height: 40px;
      padding-top: 9px;
  }
  .h-search-wrap .hsw-close:hover {
      background-color: #e3e3e3;
  }
  .hsw-inner {
      position: relative;
      padding: 15px;
      max-width: 700px;
      display: block;
      margin: 0 auto;
  }
  #header-alt {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
      position: relative;
      margin-bottom: -50px;
      z-index: 10;
      padding: 15px 10px 0 35px;
  }
  @media (min-width: 992px) {
      #header-alt:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.04);
          width: 100%;
          height: 49px;
          z-index: -1;
      }
  }
  @media (max-width: 767px) {
      #header-alt {
          padding: 5px 5px 0 25px;
      }
  }
  #header-alt .hi-trigger {
      top: -7px;
      left: -15px;
  }
  @media (max-width: 991px) {
      #header-alt .hi-trigger {
          display: inline-block !important;
      }
  }
  #header-alt .ma-backdrop {
      position: absolute;
  }
  #header-alt .ha-search {
      margin-bottom: 25px;
      padding-right: 25px;
  }
  #header-alt .ha-search input[type="text"] {
      width: 100%;
      background: 0 0;
      border: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.24);
      color: #fff;
      font-size: 15px;
      font-weight: 300;
      padding: 6px 0 6px 30px;
  }
  #header-alt .ha-search input[type="text"]::-moz-placeholder {
      color: #fff;
      opacity: 1;
  }
  #header-alt .ha-search input[type="text"]:-ms-input-placeholder {
      color: #fff;
  }
  #header-alt .ha-search input[type="text"]::-webkit-input-placeholder {
      color: #fff;
  }
  #header-alt .ha-search input[type="text"].ie9-placeholder {
      color: #fff !important;
  }
  #header-alt .ha-search .fg-line {
      max-width: 500px;
      position: relative;
  }
  #header-alt .ha-search .fg-line:after {
      background: #ffeb3b;
  }
  #header-alt .ha-search .fg-line:before {
      content: "\f1c3";
      font-family: Material-Design-Iconic-Font;
      position: absolute;
      left: 0;
      bottom: 1px;
      color: #fff;
      font-size: 22px;
  }
  @media (min-width: 992px) {
      .ha-menu > ul {
          list-style: none;
          padding: 0;
          margin: 0;
      }
      .ha-menu > ul > li {
          display: inline-block;
          vertical-align: top;
      }
      .ha-menu > ul > li:not(.active) > :not(ul) {
          color: rgba(255, 255, 255, 0.6);
      }
      .ha-menu > ul > li.active > a {
          color: #fff;
          box-shadow: inset 0 -3px 0 0 #ffeb3b;
      }
      .ha-menu > ul > li > a {
          text-transform: uppercase;
          padding: 15px 12px;
          display: block;
      }
      .ha-menu > ul > li > a:hover {
          color: #fff;
      }
      .ha-menu > ul > li .dropdown-menu {
          min-width: 100%;
      }
  }
  @media (max-width: 991px) {
      .ha-menu {
          display: none;
      }
  }
  .sidebar {
      position: fixed;
      background: #fff;
      height: calc(100% - 70px);
      top: 70px;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      z-index: 10;
      overflow-y: auto;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
  #sidebar {
      width: 268px;
  }
  @media (max-width: 1279px) {
      #sidebar {
          -webkit-transform: translate3d(-288px, 0, 0);
          transform: translate3d(-288px, 0, 0);
          box-shadow: 0 0 20px rgba(14, 18, 21, 0.38);
      }
      #sidebar.toggled {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
      }
  }
  .sidebar-alt {
      top: 0;
      height: 100%;
      -webkit-transform: translate3d(-268px, 0, 0);
      transform: translate3d(-268px, 0, 0);
  }
  .sidebar-alt.toggled {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }
  .s-profile > a {
      display: block;
      height: 129px;
      margin-bottom: 5px;
      width: 100%;
      background: url(/img/profile-menu.png) left top no-repeat;
      background-size: 100%;
  }
  .s-profile > a .sp-pic {
      padding: 12px;
  }
  .s-profile > a .sp-pic > img {
      width: 47px;
      height: 47px;
      border-radius: 50%;
      border: 3px solid rgba(0, 0, 0, 0.14);
      box-sizing: content-box;
  }
  .s-profile > a .sp-info {
      background: rgba(0, 0, 0, 0.37);
      padding: 7px 14px;
      color: #fff;
      margin-top: 20px;
      position: relative;
  }
  .s-profile > a .sp-info > i {
      font-size: 19px;
      line-height: 100%;
      position: absolute;
      right: 15px;
      top: 7px;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .s-profile .main-menu {
      display: none;
      margin: 0;
  }
  .s-profile.toggled .sp-info > i {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
  }
  .main-menu {
      list-style: none;
      padding-left: 0;
      margin: 20px 0 0;
  }
  .main-menu a {
      -webkit-transition: color;
      -o-transition: color;
      transition: color;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .main-menu .active > a,
  .main-menu a.active,
  .main-menu a:hover {
      color: #262626;
  }
  .main-menu > li > a {
      padding: 14px 20px 14px 65px;
      display: block;
      font-weight: 500;
      position: relative;
      color: #4c4c4c;
  }
  .main-menu > li > a > i {
      position: absolute;
      left: 25px;
      font-size: 20px;
      top: 0;
      width: 25px;
      text-align: center;
      padding: 13px 0;
  }
  .main-menu > li.active > a,
  .main-menu > li > a:hover {
      background-color: #f4f4f4;
  }
  .list-group.lg-even-black .list-group-item:nth-child(even),
  .list-group.lg-odd-black .list-group-item:nth-child(odd),
  .sub-menu ul > li ul {
      background-color: #f7f7f7;
  }
  .sub-menu > a {
      position: relative;
  }
  .sub-menu > a:after,
  .sub-menu > a:before {
      position: absolute;
      top: 50%;
      margin-top: -11px;
      font-family: Material-Design-Iconic-Font;
      font-size: 17px;
      right: 15px;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
  }
  .sub-menu > a:before {
      content: "\f278";
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .sub-menu > a:after {
      content: "\f273";
      transform: scale(0);
  }
  .sub-menu.toggled > a:before {
      content: "\f278";
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
  }
  .sub-menu.toggled > a:after {
      content: "\f273";
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .mini-charts-item:before,
  .tab-nav li > a:after {
      content: "";
      left: 0;
  }
  .sub-menu ul {
      list-style: none;
      display: none;
      padding: 0;
  }
  .sub-menu ul > li > a {
      padding: 8px 20px 8px 65px;
      font-weight: 500;
      display: block;
      color: #989898;
  }
  .sub-menu ul > li:first-child > a {
      padding-top: 14px;
  }
  .sub-menu ul > li:last-child > a {
      padding-bottom: 16px;
  }
  .sub-menu ul > li ul {
      font-size: 12px;
      margin: 10px 0;
  }
  .sub-menu.active > ul {
      display: block;
  }
  @media (max-width: 1279px) {
      .ie9 #sidebar {
          display: none;
      }
      .ie9 #sidebar.toggled {
          display: block;
      }
  }
  .ie9 .sidebar-alt {
      display: none;
  }
  .ie9 .sidebar-alt.toggled,
  .lgi-heading,
  .lgi-text {
      display: block;
  }
  .dropdown:not([data-animation]) .dropdown-menu {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 0.3s;
      animation-duration: 0.3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
  }
  .dropdown-menu {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      padding: 10px 0;
      border-radius: 3px;
      top: -1px;
      margin: 0;
      border: 0;
  }
  .btn-group.open .dropdown-toggle,
  .progress,
  .progress .progress-bar {
      box-shadow: none;
  }
  .dropdown-menu > li > a {
      padding: 10px 20px;
      -webkit-transition: background-color;
      -o-transition: background-color;
      transition: background-color;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .dropdown-menu[class*="bgm-"] > li > a {
      color: #fff;
  }
  .dropup .dropdown-menu {
      bottom: -2px;
  }
  .dm-icon > li > a > .zmdi {
      line-height: 100%;
      vertical-align: top;
      font-size: 18px;
      width: 28px;
  }
  .dropdown-menu-lg {
      width: 300px;
  }
  .dropdown-header {
      padding: 3px 17px;
      margin-top: 10px;
      color: #b1b1b1;
      text-transform: uppercase;
      font-weight: 400;
  }
  .lg-header,
  .tab-nav li > a {
      font-weight: 500;
      text-transform: uppercase;
  }
  .list-group {
      margin-bottom: 0;
  }
  .list-group .list-group-item {
      border: 0;
      margin: 0;
      padding: 15px 23px;
  }
  .list-group .list-group-item > .checkbox.pull-left {
      margin: 0;
  }
  .lg-header {
      text-align: center;
      padding: 15px 10px 13px;
      line-height: 100%;
      border-bottom: 1px solid #f0f0f0;
      color: #4c4c4c;
      margin-bottom: 10px;
  }
  .lgi-heading,
  .lgi-text:not(:last-child) {
      margin-bottom: 4px;
  }
  .lg-header .actions {
      position: absolute;
      top: 5px;
      right: 10px;
  }
  .lgi-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
  }
  .lgi-heading {
      color: #000;
  }
  .lgi-attrs > li,
  .lgi-text {
      font-size: 12px;
      color: #777;
  }
  .lgi-heading,
  .lgi-text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .lgi-checkbox {
      margin-top: 8px;
      margin-bottom: 0;
  }
  .lgi-attrs {
      list-style: none;
      padding: 0;
      margin: 0;
  }
  .lgi-attrs > li {
      display: inline-block;
      border: 1px solid #e0e0e0;
      margin: 2px 2px 2px 0;
      padding: 2px 5px;
  }
  .lgi-attrs > li > a {
      display: block;
  }
  .progress {
      border-radius: 0;
      height: 5px;
      margin-bottom: 0;
  }
  #chat {
      padding: 20px 0 5px;
      width: 280px;
      right: -300px;
      box-shadow: 0 0 20px rgba(14, 18, 21, 0.38);
  }
  #chat.toggled {
      right: 0;
  }
  #chat .chat-search {
      padding: 20px 20px 15px;
  }
  #chat .chat-search .form-control {
      background-repeat: no-repeat;
      background-position: left center;
      padding-left: 30px;
      background-color: transparent;
  }
  #chat .chat-search .form-control:focus {
      padding: 0 30px 0 0;
  }
  #chat .chat-search .form-control:focus + .zmdi-search {
      left: calc(100% - 15px);
  }
  #chat .chat-search .form-control,
  #chat .chat-search .zmdi-search {
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  #chat .chat-search .zmdi-search {
      position: absolute;
      left: 0;
      bottom: 6px;
      font-size: 20px;
  }
  #chat .lg-body {
      height: calc(100% - 70px);
  }
  [class*="chat-status"] {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: -3px;
      right: 12px;
      border: 2px solid #fff;
  }
  .chat-status-online {
      box-shadow: 0 0 0 1px #1ec01e;
      background: #1ec01e;
  }
  .chat-status-offline {
      box-shadow: 0 0 0 1px #e73f3f;
      background: #e73f3f;
  }
  .chat-status-busy {
      box-shadow: 0 0 0 1px orange;
      background: orange;
  }
  .tab-nav {
      list-style: none;
      padding: 0;
      white-space: nowrap;
      margin: 0;
      overflow: auto;
      box-shadow: inset 0 -2px 0 0 #eee;
      width: 100%;
  }
  .card,
  .mini-charts-item {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
  .tab-nav li {
      display: inline-block;
      vertical-align: top;
  }
  .tab-nav li > a {
      display: inline-block;
      color: #7a7a7a;
      position: relative;
      width: 100%;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
  }
  .tab-nav li > a:after {
      height: 2px;
      position: absolute;
      width: 100%;
      bottom: 0;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
  }
  .card,
  .card .card-header {
      position: relative;
  }
  @media (min-width: 768px) {
      .tab-nav li > a {
          padding: 15px;
      }
  }
  @media (max-width: 768px) {
      .tab-nav li > a {
          padding: 15px 8px;
      }
  }
  .tab-nav li.active > a {
      color: #000;
  }
  .tab-nav li.active > a:after {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .tab-nav.tab-nav-right {
      text-align: right;
  }
  .tab-nav.tn-justified > li {
      display: table-cell;
      width: 1%;
      text-align: center;
  }
  .tab-nav.tn-icon > li .zmdi {
      font-size: 22px;
      line-height: 100%;
      min-height: 25px;
  }
  .tab-nav:not([data-tab-color]) > li > a:after {
      background: #61a3d2;
  }
  .tab-nav[data-tab-color="green"] > li > a:after {
      background: #4caf50;
  }
  .tab-nav[data-tab-color="red"] > li > a:after {
      background: #f44336;
  }
  .tab-nav[data-tab-color="teal"] > li > a:after {
      background: #009688;
  }
  .tab-nav[data-tab-color="amber"] > li > a:after {
      background: #ffc107;
  }
  .tab-nav[data-tab-color="black"] > li > a:after {
      background: #000;
  }
  .tab-nav[data-tab-color="cyan"] > li > a:after {
      background: #00bcd4;
  }
  .tab-content {
      padding: 20px 0;
  }
  .card {
      background: #fff;
      margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
      .card .card-header {
          padding: 25px 27px;
      }
  }
  @media screen and (max-width: 991px) {
      .card .card-header {
          padding: 18px;
      }
  }
  .card .card-header h2 {
      margin: 0;
      line-height: 100%;
      font-size: 17px;
      font-weight: 400;
  }
  .card .card-header h2 small {
      display: block;
      margin-top: 8px;
      color: #aeaeae;
      line-height: 160%;
  }
  .card .card-header[class*="bgm-"] h2,
  .card .card-header[class*="bgm-"] h2 small,
  .card-light .card-header h2,
  .card-light .card-header h2 small {
      color: #fff;
  }
  .card .card-header.ch-alt:not([class*="bgm-"]) {
      background-color: #f7f7f7;
  }
  .card .card-header .actions {
      position: absolute;
      right: 10px;
      z-index: 2;
      top: 15px;
  }
  .card .card-header .btn-float {
      right: 25px;
      bottom: -23px;
      z-index: 1;
  }
  .card a.card-header {
      display: block;
  }
  @media screen and (min-width: 768px) {
      .card .card-body.card-padding {
          padding: 25px 27px;
      }
  }
  @media screen and (max-width: 991px) {
      .card .card-body.card-padding {
          padding: 18px;
      }
  }
  .card .card-body.card-padding-sm {
      padding: 15px;
  }
  .card-header:not(.ch-alt):not([class*="bgm-"]) + .card-padding {
      padding-top: 0;
  }
  .chart-edge {
      margin: 20px -8px 0 -10px;
      overflow: hidden;
  }
  .chart-edge .flot-chart {
      bottom: -14px;
  }
  .charts-row {
      margin-top: 50px;
      margin-bottom: 20px;
  }
  .mini-charts-item {
      position: relative;
      margin-bottom: 30px;
  }
  .mini-charts-item .chart {
      padding: 21px 18px 0;
      float: left;
  }
  .mini-charts-item .chart.chart-pie {
      margin: 0 20px;
      padding: 14px 11px;
  }
  .mini-charts-item .count {
      overflow: hidden;
      color: rgba(255, 255, 255, 0.9);
      padding: 16px 12px;
  }
  .mini-charts-item .count > h2 {
      margin: 0;
      line-height: 100%;
      font-size: 22px;
      font-weight: 300;
      color: #fff;
  }
  .mini-charts-item .count > small {
      margin-bottom: 2px;
      display: block;
  }
  .mini-charts-item .count > h2,
  .mini-charts-item .count > small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .mini-charts-item > .btn-group-vertical > .btn-group,
  .mini-charts-item > .btn-toolbar,
  .mini-charts-item > .clearfix,
  .mini-charts-item > .container,
  .mini-charts-item > .container-fluid,
  .mini-charts-item > .dl-horizontal dd,
  .mini-charts-item > .form-horizontal .form-group,
  .mini-charts-item > .modal-footer,
  .mini-charts-item > .modal-header,
  .mini-charts-item > .nav,
  .mini-charts-item > .navbar,
  .mini-charts-item > .navbar-collapse,
  .mini-charts-item > .navbar-header,
  .mini-charts-item > .pager,
  .mini-charts-item > .panel-body,
  .mini-charts-item > .row {
      position: relative;
      z-index: 1;
  }
  .mini-charts-item:before {
      -webkit-transition: width;
      -o-transition: width;
      transition: width;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
      width: 105px;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
  }
  .mini-charts-item:hover .count {
      color: #fff !important;
  }
  .mini-charts-item:hover:before {
      width: 100%;
  }
  #jqstooltip {
      min-width: 21px;
      min-height: 23px;
      text-align: center;
      border: 0;
      background: #fff;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  #jqstooltip .jqsfield {
      font-size: 12px;
      font-weight: 700;
      font-family: inherit;
      text-align: center;
      color: #333;
  }
  #jqstooltip .jqsfield > span {
      display: none;
  }
  .epc-item {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      position: relative;
      margin-bottom: 30px;
      padding: 30px 20px;
      text-align: center;
  }
  .easy-pie {
      display: inline-block;
      position: relative;
      padding: 0 0 10px;
  }
  .easy-pie .percent {
      position: absolute;
      font-weight: 300;
      width: 100%;
      line-height: 100%;
      left: 4px;
      color: #fff;
  }
  .easy-pie .percent:after {
      content: "%";
  }
  .easy-pie.main-pie .percent {
      margin-top: 49px;
      font-size: 50px;
      text-align: center;
  }
  .easy-pie.main-pie .percent:after {
      font-size: 30px;
  }
  .easy-pie.main-pie .pie-title {
      color: #fff;
  }
  .easy-pie:not(.main-pie) .percent {
      font-size: 24px;
      margin-top: 33px;
  }
  .easy-pie:not(.main-pie) .percent:after {
      font-size: 20px;
  }
  .easy-pie .pie-title {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: -3px;
      left: 0;
  }
  #recent-items-chart {
      width: calc(100% + 19px);
      height: 150px;
      margin: -20px -10px 0;
      bottom: -10px;
  }
  [class*="flot-chart"] {
      width: 100%;
      display: block;
  }
  .flot-chart {
      height: 200px;
  }
  .flot-chart-pie {
      height: 300px;
  }
  @media (min-width: 768px) {
      .flot-chart-pie {
          margin-bottom: 20px;
      }
  }
  #flotTip,
  .flot-tooltip {
      position: absolute;
      color: #333;
      display: none;
      font-size: 12px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      padding: 3px 10px;
      background-color: #fff;
      z-index: 99999;
  }
  .dw-item,
  .dwi-header {
      position: relative;
  }
  #site-visits .dwi-header,
  #site-visits .sv-item:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.05);
  }
  [class*="flc-"] {
      text-align: center;
      margin: 10px 0 5px;
  }
  [class*="flc-"] table {
      display: inline-block;
  }
  [class*="flc-"] .legendColorBox > div {
      border: #fff !important;
  }
  [class*="flc-"] .legendColorBox > div > div {
      border-radius: 50%;
  }
  [class*="flc-"] .legendLabel {
      padding: 0 8px 0 3px;
  }
  .dw-item {
      min-height: 400px;
      margin-bottom: 30px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
  }
  .dw-footer,
  .dwih-title {
      position: absolute;
      left: 0;
  }
  .dwi-header-img {
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center;
      height: 155px;
  }
  .dw-footer {
      bottom: 0;
      width: 100%;
  }
  .dwih-title {
      padding: 12px 20px;
      width: 100%;
  }
  #site-visits .dwi-header {
      padding-bottom: 38px;
      margin-bottom: 12px;
  }
  #site-visits .dwi-header canvas {
      width: 100% !important;
  }
  #site-visits .dwih-title {
      bottom: 0;
      color: #fff;
  }
  #site-visits .sv-item small {
      color: rgba(255, 255, 255, 0.7);
  }
  #site-visits .sv-item h3 {
      font-weight: 400;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
  }
  #site-visits .sv-item .pull-right {
      margin-top: 5px;
      opacity: 0.7;
      filter: alpha(opacity=70);
  }
  #best-selling {
      background-color: #fff;
  }
  #best-selling .dwi-header .dwih-title {
      padding-bottom: 30px;
      top: 0;
      color: #fff;
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%);
      background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%);
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%);
      background-repeat: repeat-x;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#99000000', endColorstr='#00000000', GradientType=0);
  }
  #best-selling .dwi-header .bs-main {
      padding: 15px;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.6) 100%);
      background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.6) 100%);
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.6) 100%);
      background-repeat: repeat-x;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#99000000', GradientType=0);
  }
  #best-selling .dwi-header .bs-main > h2 {
      font-weight: 400;
      font-size: 20px;
      margin: 5px 0 0;
      line-height: 100%;
      color: #fff;
  }
  #weather-widget {
      color: #fff;
      padding: 20px 20px 0;
  }
  #weather-widget .weather-status {
      font-size: 40px;
      line-height: 100%;
  }
  #weather-widget .weather-icon {
      text-align: center;
      margin-top: 10px;
      height: 150px;
      background-repeat: no-repeat;
      background-position: center;
  }
  #weather-widget .weather-icon.wi-0 {
      background-image: url(/img/icons/weather/0.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-0 {
          background-image: url(/img/icons/weather/0@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-1 {
      background-image: url(/img/icons/weather/1.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-1 {
          background-image: url(/img/icons/weather/1@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-2 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-2 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-3 {
      background-image: url(/img/icons/weather/3.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-3 {
          background-image: url(/img/icons/weather/3@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-4 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-4 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-5 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-5 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-6 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-6 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-7 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-7 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-8 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-8 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-9 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-9 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-10 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-10 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-11 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-11 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-12 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-12 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-13 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-13 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-14 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-14 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-15 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-15 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-16 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-16 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-17 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-17 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-18 {
      background-image: url(/img/icons/weather/18.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-18 {
          background-image: url(/img/icons/weather/18@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-19 {
      background-image: url(/img/icons/weather/19.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-19 {
          background-image: url(/img/icons/weather/19@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-20 {
      background-image: url(/img/icons/weather/19.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-20 {
          background-image: url(/img/icons/weather/19@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-21 {
      background-image: url(/img/icons/weather/19.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-21 {
          background-image: url(/img/icons/weather/19@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-22 {
      background-image: url(/img/icons/weather/19.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-22 {
          background-image: url(/img/icons/weather/19@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-23 {
      background-image: url(/img/icons/weather/19.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-23 {
          background-image: url(/img/icons/weather/19@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-24 {
      background-image: url(/img/icons/weather/24.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-24 {
          background-image: url(/img/icons/weather/24@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-25 {
      background-image: url(/img/icons/weather/24.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-25 {
          background-image: url(/img/icons/weather/24@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-26 {
      background-image: url(/img/icons/weather/26.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-26 {
          background-image: url(/img/icons/weather/26@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-27 {
      background-image: url(/img/icons/weather/27.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-27 {
          background-image: url(/img/icons/weather/27@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-28 {
      background-image: url(/img/icons/weather/28.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-28 {
          background-image: url(/img/icons/weather/28@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-29 {
      background-image: url(/img/icons/weather/27.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-29 {
          background-image: url(/img/icons/weather/27@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-30 {
      background-image: url(/img/icons/weather/28.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-30 {
          background-image: url(/img/icons/weather/28@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-31 {
      background-image: url(/img/icons/weather/31.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-31 {
          background-image: url(/img/icons/weather/31@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-32 {
      background-image: url(/img/icons/weather/32.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-32 {
          background-image: url(/img/icons/weather/32@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-33 {
      background-image: url(/img/icons/weather/31.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-33 {
          background-image: url(/img/icons/weather/31@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-34 {
      background-image: url(/img/icons/weather/32.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-34 {
          background-image: url(/img/icons/weather/32@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-35 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-35 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-36 {
      background-image: url(/img/icons/weather/32.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-36 {
          background-image: url(/img/icons/weather/32@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-37 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-37 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-38 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-38 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-39 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-39 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-40 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-40 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-41 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-41 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-42 {
      background-image: url(/img/icons/weather/9.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-42 {
          background-image: url(/img/icons/weather/9@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-43 {
      background-image: url(/img/icons/weather/5.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-43 {
          background-image: url(/img/icons/weather/5@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-44 {
      background-image: url(/img/icons/weather/27.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-44 {
          background-image: url(/img/icons/weather/27@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-45 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-45 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-46 {
      background-image: url(/img/icons/weather/18.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-46 {
          background-image: url(/img/icons/weather/18@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-icon.wi-47 {
      background-image: url(/img/icons/weather/2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      #weather-widget .weather-icon.wi-47 {
          background-image: url(/img/icons/weather/2@2x.png);
          background-size: 125px 125px;
      }
  }
  #weather-widget .weather-info {
      list-style: none;
      padding: 0;
      margin: 3px 0 0;
  }
  #weather-widget .weather-info > li {
      display: inline-block;
      border: 1px solid rgba(255, 255, 255, 0.39);
      padding: 2px 10px 3px;
      margin-right: 5px;
  }
  #weather-widget .dw-footer {
      background: rgba(0, 0, 0, 0.04);
      padding: 10px 20px;
  }
  #weather-widget .weather-list {
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  #weather-widget .weather-list > span {
      margin-right: 7px;
      display: inline-block;
      line-height: 40px;
      vertical-align: top;
  }
  #weather-widget .weather-list > span.weather-list-icon {
      width: 35px;
      height: 35px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 30px 30px;
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-0 {
      background-image: url(/img/icons/weather/0.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-1 {
      background-image: url(/img/icons/weather/1.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-2 {
      background-image: url(/img/icons/weather/2.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-3 {
      background-image: url(/img/icons/weather/3.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-4 {
      background-image: url(/img/icons/weather/2.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-5,
  #weather-widget .weather-list > span.weather-list-icon.wi-6,
  #weather-widget .weather-list > span.weather-list-icon.wi-7,
  #weather-widget .weather-list > span.weather-list-icon.wi-8 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-9 {
      background-image: url(/img/icons/weather/9.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-10 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-11,
  #weather-widget .weather-list > span.weather-list-icon.wi-12,
  #weather-widget .weather-list > span.weather-list-icon.wi-13,
  #weather-widget .weather-list > span.weather-list-icon.wi-14 {
      background-image: url(/img/icons/weather/9.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-15 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-16 {
      background-image: url(/img/icons/weather/9.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-17 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-18 {
      background-image: url(/img/icons/weather/18.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-19,
  #weather-widget .weather-list > span.weather-list-icon.wi-20,
  #weather-widget .weather-list > span.weather-list-icon.wi-21,
  #weather-widget .weather-list > span.weather-list-icon.wi-22,
  #weather-widget .weather-list > span.weather-list-icon.wi-23 {
      background-image: url(/img/icons/weather/19.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-24,
  #weather-widget .weather-list > span.weather-list-icon.wi-25 {
      background-image: url(/img/icons/weather/24.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-26 {
      background-image: url(/img/icons/weather/26.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-27 {
      background-image: url(/img/icons/weather/27.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-28 {
      background-image: url(/img/icons/weather/28.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-29 {
      background-image: url(/img/icons/weather/27.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-30 {
      background-image: url(/img/icons/weather/28.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-31 {
      background-image: url(/img/icons/weather/31.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-32 {
      background-image: url(/img/icons/weather/32.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-33 {
      background-image: url(/img/icons/weather/31.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-34 {
      background-image: url(/img/icons/weather/32.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-35 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-36 {
      background-image: url(/img/icons/weather/32.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-37,
  #weather-widget .weather-list > span.weather-list-icon.wi-38,
  #weather-widget .weather-list > span.weather-list-icon.wi-39 {
      background-image: url(/img/icons/weather/2.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-40,
  #weather-widget .weather-list > span.weather-list-icon.wi-41 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-42 {
      background-image: url(/img/icons/weather/9.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-43 {
      background-image: url(/img/icons/weather/5.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-44 {
      background-image: url(/img/icons/weather/27.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-45 {
      background-image: url(/img/icons/weather/2.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-46 {
      background-image: url(/img/icons/weather/18.png);
  }
  #weather-widget .weather-list > span.weather-list-icon.wi-47 {
      background-image: url(/img/icons/weather/2.png);
  }
  #weather-widget .weather-list > span > i {
      line-height: 100%;
      font-size: 39px;
  }
  .profile-view {
      text-align: center;
  }
  .profile-view .pv-header {
      position: relative;
      height: 145px;
      width: 100%;
      background-image: url(/img/headers/sm/4.png);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center;
  }
  .profile-view .pv-header > .pv-main {
      border-radius: 50%;
      width: 130px;
      position: absolute;
      height: 130px;
      bottom: -50px;
      left: 50%;
      margin-left: -65px;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .profile-view .pv-body {
      margin-top: 70px;
      padding: 0 20px 20px;
  }
  .profile-view .pv-body > h2 {
      margin: 0;
      line-height: 100%;
      font-size: 20px;
      font-weight: 400;
  }
  .profile-view .pv-body > small {
      display: block;
      color: #8e8e8e;
      margin: 10px 0 15px;
  }
  .profile-view .pv-body .pv-contact,
  .profile-view .pv-body .pv-follow {
      padding: 0;
      list-style: none;
  }
  .profile-view .pv-body .pv-contact > li,
  .profile-view .pv-body .pv-follow > li {
      display: inline-block;
  }
  .profile-view .pv-body .pv-follow {
      margin: 20px -20px;
      padding: 10px;
      background-color: #f3f3f3;
  }
  .profile-view .pv-body .pv-follow > li {
      padding: 0 10px;
  }
  .profile-view .pv-body .pv-contact > li {
      margin: 0 5px;
  }
  .profile-view .pv-body .pv-contact > li > .zmdi {
      line-height: 100%;
      vertical-align: text-bottom;
      font-size: 22px;
  }
  .profile-view .pv-body .pv-follow-btn {
      padding: 7px 20px;
      background: #00bcd4;
      color: #fff;
      border-radius: 3px;
      text-transform: uppercase;
      max-width: 200px;
      width: 100%;
      display: inline-block;
  }
  .profile-view .pv-body .pv-follow-btn:hover {
      background: #00a5bb;
  }
  .profile-view:hover .pv-main {
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
  }
  .picture-list .pl-body,
  .picture-list .pl-body [class*="col-"] {
      padding: 2px;
  }
  .picture-list .pl-body [class*="col-"] > a {
      display: block;
  }
  .picture-list .pl-body [class*="col-"] > a img {
      width: 100%;
  }
  .picture-list .pl-body:after,
  .picture-list .pl-body:before {
      content: " ";
      display: table;
  }
  .go-social .card-body {
      padding: 0 15px 20px;
  }
  .go-social .card-body [class*="col-"] {
      padding: 12px;
  }
  .go-social .card-body [class*="col-"] img {
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
  }
  .btn-float i,
  .t-add,
  .ta-block,
  .ta-btn {
      -webkit-transition: all;
      -o-transition: all;
  }
  .go-social .card-body [class*="col-"]:hover img {
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transform: scale(1.2);
  }
  .rating-list {
      padding: 0 0 20px;
  }
  .rating-list .rl-star {
      margin-top: 10px;
      margin-bottom: 4px;
  }
  .rating-list .rl-star .zmdi {
      font-size: 20px;
      color: #ccc;
  }
  .rating-list .rl-star .zmdi.active {
      color: #ff9800;
  }
  .rating-list .media .zmdi-star {
      line-height: 100%;
      font-size: 22px;
      vertical-align: middle;
      position: relative;
      top: -2px;
      left: 6px;
      color: #ff9800;
  }
  .rating-list .media .media-body {
      padding: 7px 10px 0 5px;
  }
  .cwh-year {
      color: rgba(255, 255, 255, 0.6);
      font-size: 15px;
  }
  #todo .card-header h2,
  .cwh-day {
      font-size: 25px;
  }
  .cwh-day {
      line-height: 100%;
      color: #fff;
  }
  .table {
      margin-bottom: 0;
  }
  .table > thead > tr > th {
      background-color: #fff;
      vertical-align: middle;
      font-weight: 500;
      color: #333;
      border-width: 1px;
      text-transform: uppercase;
  }
  .table.table-inner,
  .table > tbody > tr.active > td,
  .table > tbody > tr.danger > td,
  .table > tbody > tr.info > td,
  .table > tbody > tr.succes > td,
  .table > tbody > tr.warning > td,
  .table > tfoot > tr.active > td,
  .table > tfoot > tr.danger > td,
  .table > tfoot > tr.info > td,
  .table > tfoot > tr.succes > td,
  .table > tfoot > tr.warning > td {
      border: 0;
  }
  .table > tbody > tr > td:first-child,
  .table > tbody > tr > th:first-child,
  .table > tfoot > tr > td:first-child,
  .table > tfoot > tr > th:first-child,
  .table > thead > tr > td:first-child,
  .table > thead > tr > th:first-child {
      padding-left: 30px;
  }
  .table > tbody > tr > td:last-child,
  .table > tbody > tr > th:last-child,
  .table > tfoot > tr > td:last-child,
  .table > tfoot > tr > th:last-child,
  .table > thead > tr > td:last-child,
  .table > thead > tr > th:last-child {
      padding-right: 30px;
  }
  .table > tbody > tr:last-child > td,
  .table > tfoot > tr:last-child > td {
      padding-bottom: 20px;
  }
  .table-striped td,
  .table-striped th {
      border: 0 !important;
  }
  .table-bordered,
  .table-bordered > tbody > tr > td,
  .table-bordered > tbody > tr > th {
      border-bottom: 0;
      border-left: 0;
  }
  .table-bordered,
  .table-bordered > tbody > tr > td:last-child,
  .table-bordered > tbody > tr > th:last-child,
  .table-bordered > thead > tr > th:last-child {
      border-right: 0;
  }
  .table-bordered > thead > tr > th {
      border-left: 0;
  }
  .table-vmiddle td {
      vertical-align: middle !important;
  }
  .table-responsive {
      border: 0;
  }
  #todo {
      background: #ffc107;
      color: #fff;
      font-family: satisfy, cursive;
  }
  .checkbox .input-helper:after,
  .t-view:before {
      font-family: Material-Design-Iconic-Font;
  }
  #todo .card-header {
      padding: 28px 35px 20px;
      background-color: rgba(0, 0, 0, 0.03);
  }
  #todo .card-header h2 small {
      font-size: 18px;
      margin-top: 0;
  }
  #todo .card-body {
      font-size: 20px;
      position: relative;
  }
  #todo .list-group-item {
      padding: 0;
  }
  #todo .checkbox .input-helper:after,
  #todo .checkbox .input-helper:before {
      top: 5px;
  }
  #todo .checkbox input:checked + i + span {
      text-decoration: line-through;
  }
  .t-add,
  .ta-block,
  .ta-btn {
      transition: all;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
  }
  .t-add {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      background: #fff;
      top: -25px;
      right: 23px;
      max-height: 300px;
  }
  .t-add .ta-block {
      overflow: hidden;
      opacity: 0;
      filter: alpha(opacity=0);
  }
  .t-add .ta-block textarea {
      padding: 25px 25px 45px;
      resize: none;
      width: 100%;
      font-size: 24px;
      color: #ffc107;
      position: absolute;
      height: 100%;
      border: 0;
      outline: 0;
  }
  .t-add:not(.toggled) {
      overflow: hidden;
  }
  .t-add:not(.toggled) .ta-btn {
      position: relative;
      z-index: 1;
      display: inline-block;
      width: 50px;
      height: 50px;
      cursor: pointer;
      text-align: center;
      font-size: 23px;
      color: #ff9800;
      line-height: 51px;
  }
  .t-add.toggled {
      width: calc(100% - 47px);
      height: calc(100% - 25px);
      border-radius: 2px;
      top: 0;
      z-index: 1;
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
      overflow: visible;
  }
  .t-add.toggled .ta-btn {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
      display: none;
  }
  .t-add.toggled .ta-block {
      opacity: 1;
      filter: alpha(opacity=100);
  }
  .t-add.toggled .ta-block .tab-actions {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 5px 10px;
      border-top: 1px solid #eee;
      z-index: 1;
  }
  .t-add.toggled .ta-block .tab-actions > a {
      font-size: 25px;
      padding: 0 6px;
      border-radius: 50%;
      text-align: center;
      height: 40px;
      width: 40px;
      line-height: 48px;
      display: inline-block;
  }
  .t-add.toggled .ta-block .tab-actions > a:hover {
      background-color: #eee;
  }
  .btn {
      border: 0;
      text-transform: uppercase;
  }
  .btn[class*="bgm-"]:not(.bgm-white) {
      color: #fff;
  }
  .btn .caret {
      margin-top: -3px;
  }
  .btn:not(.btn-link) {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  }
  .btn-group-vertical:not(.bootstrap-select),
  .btn-group:not(.bootstrap-select) {
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  }
  .btn-group .btn,
  .btn-group .btn-group,
  .btn-group .btn:active,
  .btn-group .btn:focus,
  .btn-group-vertical .btn,
  .btn-group-vertical .btn-group,
  .btn-group-vertical .btn:active,
  .btn-group-vertical .btn:focus,
  .form-control,
  input:active,
  input:focus {
      box-shadow: none !important;
  }
  .btn-group .btn,
  .btn-group-vertical .btn {
      margin: 0;
  }
  .btn-group-xs > .btn,
  .btn-xs {
      padding: 2px 5px;
      font-size: 11px;
      line-height: 1.5;
      border-radius: 2px;
  }
  .btn-link {
      color: #797979;
      text-decoration: none;
      border-radius: 2px;
  }
  .btn-link:hover {
      color: #0a0a0a;
  }
  .btn-inverse {
      color: #fff;
      background-color: #454545;
      border-color: transparent;
  }
  .btn-inverse.active,
  .btn-inverse.focus,
  .btn-inverse:active,
  .btn-inverse:focus,
  .btn-inverse:hover,
  .open > .dropdown-toggle.btn-inverse {
      color: #fff;
      background-color: #2b2b2b;
      border-color: transparent;
  }
  .btn-inverse.active.focus,
  .btn-inverse.active:focus,
  .btn-inverse.active:hover,
  .btn-inverse:active.focus,
  .btn-inverse:active:focus,
  .btn-inverse:active:hover,
  .open > .dropdown-toggle.btn-inverse.focus,
  .open > .dropdown-toggle.btn-inverse:focus,
  .open > .dropdown-toggle.btn-inverse:hover {
      color: #fff;
      background-color: #1a1a1a;
      border-color: transparent;
  }
  .btn-inverse.focus,
  .btn-inverse.focus.focus,
  .btn-inverse.focus:focus,
  .btn-inverse.focus:hover,
  .btn-inverse:active,
  .btn-inverse:active.focus,
  .btn-inverse:active:focus,
  .btn-inverse:active:hover,
  .btn-inverse:focus,
  .btn-inverse:focus.focus,
  .btn-inverse:focus:focus,
  .btn-inverse:focus:hover,
  .btn-inverse:hover,
  .btn-inverse:hover.focus,
  .btn-inverse:hover:focus,
  .btn-inverse:hover:hover,
  .open > .dropdown-toggle.btn-inverse,
  .open > .dropdown-toggle.btn-inverse.focus,
  .open > .dropdown-toggle.btn-inverse:focus,
  .open > .dropdown-toggle.btn-inverse:hover {
      color: #fff;
      background-color: #454545;
      border-color: transparent;
  }
  .btn-inverse.active,
  .btn-inverse:active,
  .open > .dropdown-toggle.btn-inverse {
      background-image: none;
  }
  .btn-inverse.disabled,
  .btn-inverse.disabled.focus,
  .btn-inverse.disabled:active,
  .btn-inverse.disabled:focus,
  .btn-inverse.disabled:hover,
  .btn-inverse[disabled],
  .btn-inverse[disabled].focus,
  .btn-inverse[disabled]:active,
  .btn-inverse[disabled]:focus,
  .btn-inverse[disabled]:hover,
  fieldset[disabled] .btn-inverse,
  fieldset[disabled] .btn-inverse.focus,
  fieldset[disabled] .btn-inverse:active,
  fieldset[disabled] .btn-inverse:focus,
  fieldset[disabled] .btn-inverse:hover {
      background-color: #454545;
      border-color: transparent;
  }
  .btn-inverse .badge {
      color: #454545;
      background-color: #fff;
  }
  .btn-icon {
      border-radius: 50%;
      width: 40px;
      line-height: 42px;
      height: 40px;
      padding: 0;
      text-align: center;
  }
  .btn-icon .zmdi {
      font-size: 17px;
  }
  .btn-icon-text > .zmdi {
      font-size: 15px;
      vertical-align: top;
      display: inline-block;
      margin-top: 2px;
      line-height: 100%;
      margin-right: 5px;
  }
  .btn-float {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      line-height: 46px !important;
  }
  .btn-float:not(.m-btn) {
      position: absolute !important;
  }
  .btn-float i {
      font-size: 23px;
      transition: all;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
  }
  .btn-float:hover i {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
  }
  .btn-float:not(.bgm-white):not(.bgm-gray) > i {
      color: #fff;
  }
  .btn-float.bgm-gray > i,
  .btn-float.bgm-white > i {
      color: #333;
  }
  .open .btn,
  .open .btn:active,
  .open .btn:focus {
      outline: 0 !important;
      -webkit-tap-highlight-color: transparent !important;
  }
  .m-btn {
      z-index: 1;
      bottom: 40px;
      right: 40px;
      position: fixed !important;
  }
  label {
      font-weight: 500;
  }
  input:active,
  input:focus {
      outline: 0;
  }
  .form-control {
      resize: none;
  }
  .form-control:active,
  .form-control:focus {
      box-shadow: none;
  }
  .form-control:not(.fc-alt) {
      border-left: 0;
      border-right: 0;
      border-top: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      padding: 0;
  }
  .form-control:not(.fc-alt).auto-size {
      padding-top: 6px;
  }
  .form-group {
      margin-bottom: 25px;
  }
  .checkbox label:before,
  .checkbox-inline:before,
  .input-helper:after,
  .input-helper:before,
  .radio label:before,
  .radio-inline:before {
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
  }
  .checkbox,
  .radio {
      padding-top: 0 !important;
  }
  .checkbox label,
  .radio label {
      display: block;
      padding-left: 30px;
  }
  .checkbox input,
  .radio input {
      top: 0;
      left: 0;
      margin-left: 0 !important;
      z-index: 1;
      cursor: pointer;
      opacity: 0;
      filter: alpha(opacity=0);
      margin-top: 0;
  }
  .checkbox input:checked + .input-helper:before,
  .radio input:checked + .input-helper:before {
      border-color: #009688;
  }
  .checkbox .input-helper:after,
  .checkbox .input-helper:before,
  .radio .input-helper:after,
  .radio .input-helper:before {
      position: absolute;
      content: "";
  }
  .checkbox .input-helper:before,
  .radio .input-helper:before {
      left: 0;
      border: 2px solid #7a7a7a;
  }
  .checkbox.disabled,
  .radio.disabled {
      opacity: 0.6;
      filter: alpha(opacity=60);
  }
  .checkbox input {
      width: 17px;
      height: 17px;
  }
  .checkbox input:checked + .input-helper:before {
      background-color: #009688;
  }
  .checkbox input:checked + .input-helper:after {
      opacity: 1;
      filter: alpha(opacity=100);
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .checkbox .input-helper:before {
      top: 0;
      width: 17px;
      height: 17px;
      border-radius: 2px;
  }
  .checkbox .input-helper:after {
      opacity: 0;
      filter: alpha(opacity=0);
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
      content: "\f26b";
      position: absolute;
      font-size: 12px;
      left: 2px;
      top: 0;
      color: #fff;
      font-weight: 700;
  }
  .radio input {
      width: 19px;
      height: 19px;
  }
  .radio input:checked + .input-helper:after {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .radio .input-helper:before {
      top: -1px;
      width: 19px;
      height: 19px;
      border-radius: 50%;
  }
  .radio .input-helper:after {
      width: 9px;
      height: 9px;
      background: #009688;
      border-radius: 50%;
      top: 4px;
      left: 5px;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
  }
  .checkbox-inline,
  .radio-inline {
      vertical-align: top;
      margin-top: 0;
      padding-left: 25px;
  }
  .checkbox-light .input-helper:before,
  .radio-light .input-helper:before {
      border-color: #fff;
  }
  .checkbox-light input:checked + .input-helper:before {
      border-color: #fff;
      background-color: #fff;
  }
  .checkbox-light input:checked + .input-helper:after {
      color: #333;
  }
  html:not(.ie9) .select {
      position: relative;
  }
  html:not(.ie9) .select:before {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      height: calc(100% - 2px);
      width: 30px;
      background-color: #fff;
      background-position: right calc(100% - 7px);
      background-repeat: no-repeat;
      background-image: url(/img/select.png);
      pointer-events: none;
      z-index: 5;
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      html:not(.ie9) .select:before {
          background-image: url(/img/select@2x.png);
          background-size: 12px 12px;
      }
  }
  html:not(.ie9) .select:not(.fg-line):before {
      right: 0;
  }
  html:not(.ie9) .select.fg-line:before {
      right: 10px;
  }
  .input-group:not(.input-group-lg):not(.input-group-sm) .input-group-addon {
      font-size: 15px;
  }
  .input-group-addon {
      border-width: 0 0 1px;
      min-width: 42px;
  }
  .input-group-addon > .zmdi {
      position: relative;
      top: 3px;
  }
  .fg-line {
      position: relative;
      vertical-align: top;
  }
  .fg-line:not(.form-group) {
      display: inline-block;
      width: 100%;
  }
  .fg-line .form-control:disabled {
      color: #9d9d9d;
      background: 0 0;
  }
  .fg-line:not(.disabled):after,
  .fg-line:not(.readonly):after {
      position: absolute;
      z-index: 3;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      content: "";
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .fg-line:not([class*="has-"]):after {
      background: #61a3d2;
  }
  .fg-line.readonly .form-control {
      color: #9d9d9d;
      background: 0 0;
  }
  .fg-line.fg-toggled:after {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .fg-float {
      margin-top: 2px;
      position: relative;
  }
  .fg-float .form-control {
      position: relative;
      background: 0 0;
      z-index: 1;
  }
  .fg-float .form-control::-moz-placeholder {
      color: #fff;
      opacity: 1;
  }
  .fg-float .form-control:-ms-input-placeholder {
      color: #fff;
  }
  .fg-float .form-control::-webkit-input-placeholder {
      color: #fff;
  }
  .fg-float .fg-label {
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      position: absolute;
      top: 5px;
      font-weight: 400;
      color: #959595;
      pointer-events: none;
      z-index: 0;
      left: 0;
      white-space: nowrap;
  }
  .fg-float .fg-toggled .fg-label {
      top: -20px;
      font-size: 11px;
  }
  .control-label {
      font-weight: 400;
  }
  .toggle-switch {
      display: inline-block;
      vertical-align: top;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  .toggle-switch .ts-label {
      display: inline-block;
      margin: 0 20px 0 0;
      vertical-align: top;
      -webkit-transition: color 0.56s cubic-bezier(0.4, 0, 0.2, 1);
      transition: color 0.56s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .toggle-switch .ts-helper {
      display: inline-block;
      position: relative;
      width: 40px;
      height: 16px;
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.26);
      -webkit-transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      vertical-align: middle;
      cursor: pointer;
  }
  .toggle-switch .ts-helper:before {
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      width: 24px;
      height: 24px;
      background: #fafafa;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28);
      border-radius: 50%;
      webkit-transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .toggle-switch:not(.disabled) .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  .toggle-switch input {
      position: absolute;
      z-index: 1;
      width: 46px;
      margin: 0 0 0 -4px;
      height: 24px;
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: pointer;
  }
  .toggle-switch input:checked + .ts-helper:before {
      left: 20px;
  }
  .toggle-switch:not([data-ts-color]) input:not(:disabled):checked + .ts-helper {
      background: rgba(0, 150, 136, 0.5);
  }
  .toggle-switch:not([data-ts-color]) input:not(:disabled):checked + .ts-helper:before {
      background: #009688;
  }
  .toggle-switch:not([data-ts-color]) input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
  .toggle-switch.disabled {
      opacity: 0.6;
      filter: alpha(opacity=60);
  }
  .toggle-switch[data-ts-color="red"] input:not(:disabled):checked + .ts-helper {
      background: rgba(244, 67, 54, 0.5);
  }
  .toggle-switch[data-ts-color="red"] input:not(:disabled):checked + .ts-helper:before {
      background: #f44336;
  }
  .toggle-switch[data-ts-color="red"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(244, 67, 54, 0.2);
  }
  .toggle-switch[data-ts-color="blue"] input:not(:disabled):checked + .ts-helper {
      background: rgba(33, 150, 243, 0.5);
  }
  .toggle-switch[data-ts-color="blue"] input:not(:disabled):checked + .ts-helper:before {
      background: #61a3d2;
  }
  .toggle-switch[data-ts-color="blue"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(33, 150, 243, 0.2);
  }
  .toggle-switch[data-ts-color="amber"] input:not(:disabled):checked + .ts-helper {
      background: rgba(255, 193, 7, 0.5);
  }
  .toggle-switch[data-ts-color="amber"] input:not(:disabled):checked + .ts-helper:before {
      background: #ffc107;
  }
  .toggle-switch[data-ts-color="amber"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(255, 193, 7, 0.2);
  }
  .toggle-switch[data-ts-color="purple"] input:not(:disabled):checked + .ts-helper {
      background: rgba(186, 104, 200, 0.5);
  }
  .toggle-switch[data-ts-color="purple"] input:not(:disabled):checked + .ts-helper:before {
      background: #ba68c8;
  }
  .toggle-switch[data-ts-color="purple"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(186, 104, 200, 0.2);
  }
  .toggle-switch[data-ts-color="pink"] input:not(:disabled):checked + .ts-helper {
      background: rgba(233, 30, 99, 0.5);
  }
  .toggle-switch[data-ts-color="pink"] input:not(:disabled):checked + .ts-helper:before {
      background: #e91e63;
  }
  .toggle-switch[data-ts-color="pink"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(233, 30, 99, 0.2);
  }
  .toggle-switch[data-ts-color="lime"] input:not(:disabled):checked + .ts-helper {
      background: rgba(205, 220, 57, 0.5);
  }
  .toggle-switch[data-ts-color="lime"] input:not(:disabled):checked + .ts-helper:before {
      background: #cddc39;
  }
  .toggle-switch[data-ts-color="lime"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(205, 220, 57, 0.2);
  }
  .toggle-switch[data-ts-color="cyan"] input:not(:disabled):checked + .ts-helper {
      background: rgba(0, 188, 212, 0.5);
  }
  .toggle-switch[data-ts-color="cyan"] input:not(:disabled):checked + .ts-helper:before {
      background: #00bcd4;
  }
  .toggle-switch[data-ts-color="cyan"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 188, 212, 0.2);
  }
  .toggle-switch[data-ts-color="green"] input:not(:disabled):checked + .ts-helper {
      background: rgba(76, 175, 80, 0.5);
  }
  .toggle-switch[data-ts-color="green"] input:not(:disabled):checked + .ts-helper:before {
      background: #4caf50;
  }
  .toggle-switch[data-ts-color="green"] input:not(:disabled):checked + .ts-helper:active:before {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(76, 175, 80, 0.2);
  }
  .has-error .checkbox .input-helper:before {
      border-color: #f99d97;
  }
  .has-error .checkbox .input-helper:after {
      border-bottom-color: #f77066;
      border-left-color: #f77066;
  }
  .has-error .fg-line:after {
      background: #f44336;
  }
  .has-success .checkbox .input-helper:before {
      border-color: #92cf94;
  }
  .has-success .checkbox .input-helper:after {
      border-bottom-color: #6ec071;
      border-left-color: #6ec071;
  }
  .has-success .fg-line:after {
      background: #4caf50;
  }
  .has-warning .checkbox .input-helper:before {
      border-color: #ffc166;
  }
  .has-warning .checkbox .input-helper:after {
      border-bottom-color: #ffad33;
      border-left-color: #ffad33;
  }
  .has-warning .fg-line:after {
      background: #ff9800;
  }
  .ie9-placeholder {
      color: #888 !important;
      font-weight: 400;
  }
  .lightbox .lightbox-item,
  .messages {
      overflow: hidden;
  }
  .pagination {
      border-radius: 0;
  }
  .pagination > li {
      margin: 0 2px;
      display: inline-block;
      vertical-align: top;
  }
  .lc-block,
  .login-content:before {
      vertical-align: middle;
      display: inline-block;
  }
  .pagination > li > a,
  .pagination > li > span {
      border-radius: 50% !important;
      padding: 0;
      width: 40px;
      height: 40px;
      line-height: 38px;
      text-align: center;
      font-size: 14px;
      z-index: 1;
      position: relative;
      cursor: pointer;
      background-clip: padding-box;
  }
  .pagination > li > a > .zmdi,
  .pagination > li > span > .zmdi {
      font-size: 22px;
      line-height: 39px;
  }
  .pagination > li.disabled {
      opacity: 0.5;
      filter: alpha(opacity=50);
  }
  .lg-pagination {
      width: 100%;
      text-align: center;
      padding: 40px 0;
      margin-top: 0;
  }
  .pager li > a,
  .pager li > span {
      padding: 5px 10px 6px;
      color: #7e7e7e;
  }
  .popover {
      box-shadow: 0 2px 30px rgba(0, 0, 0, 0.2);
  }
  .popover-title {
      border-bottom: 0;
      padding: 15px;
      font-size: 12px;
      text-transform: uppercase;
  }
  .popover-title + .popover-content {
      padding-top: 0;
  }
  .popover-content {
      padding: 15px;
  }
  .popover-content p {
      margin-bottom: 0;
  }
  .fw-container .tab-content {
      padding: 25px 0;
  }
  .fw-container .fw-footer {
      text-align: center;
      margin: 30px 0 0;
      width: 100%;
      border-top: 2px solid #eee;
      padding: 15px 0;
  }
  .alert {
      padding-left: 30px;
      font-size: 13px;
  }
  .alert span {
      cursor: pointer;
  }
  .alert:not(.alert-dismissible) {
      padding-right: 30px;
  }
  .alert.alert-dismissable {
      padding-right: 44px;
  }
  .alert-inverse {
      background-color: #333;
      border-color: transparent;
      color: #fff;
  }
  .alert-inverse hr {
      border-top-color: transparent;
  }
  .alert-inverse .alert-link {
      color: #e6e6e6;
  }
  .growl-animated.alert-inverse {
      box-shadow: 0 0 5px rgba(51, 51, 51, 0.5);
  }
  .growl-animated.alert-info {
      box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
  }
  .growl-animated.alert-success {
      box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
  .growl-animated.alert-warning {
      box-shadow: 0 0 5px rgba(255, 193, 7, 0.5);
  }
  .growl-animated.alert-danger {
      box-shadow: 0 0 5px rgba(244, 67, 54, 0.5);
  }
  .alert-link {
      color: #fff !important;
  }
  .lightbox .lightbox-item > img {
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      width: 100%;
      border-radius: 2px;
  }
  .lightbox .lightbox-item:hover {
      cursor: pointer;
  }
  .lightbox .lightbox-item:hover img {
      -webkit-transform: scale(1.35) rotate(10deg);
      -ms-transform: scale(1.35) rotate(10deg);
      -o-transform: scale(1.35) rotate(10deg);
      transform: scale(1.35) rotate(10deg);
  }
  .lightbox [data-src]:after,
  .lightbox [data-src]:before {
      content: " ";
      display: table;
  }
  .lightbox .lightbox-item:not(.p-item) {
      position: relative;
  }
  .carousel .carousel-control {
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
      opacity: 0;
      filter: alpha(opacity=0);
  }
  .carousel .carousel-control .zmdi {
      position: absolute;
      top: 50%;
      left: 50%;
      line-height: 100%;
  }
  @media screen and (min-width: 768px) {
      .carousel .carousel-control .zmdi {
          font-size: 60px;
          width: 60px;
          height: 60px;
          margin-top: -30px;
          margin-left: -30px;
      }
  }
  @media screen and (max-width: 991px) {
      .carousel .carousel-control .zmdi {
          width: 24px;
          height: 24px;
          margin-top: -12px;
          margin-left: -12px;
      }
      .carousel .carousel-caption {
          display: none;
      }
  }
  .carousel:hover .carousel-control {
      opacity: 1;
      filter: alpha(opacity=100);
  }
  .carousel .carousel-caption {
      background: rgba(0, 0, 0, 0.6);
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      padding-bottom: 50px;
  }
  .carousel .carousel-caption > h3 {
      color: #fff;
      margin: 0 0 5px;
      font-weight: 300;
  }
  .carousel .carousel-caption > p {
      margin: 0;
  }
  .carousel .carousel-indicators {
      margin: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0 0 6px;
      background: rgba(0, 0, 0, 0.6);
  }
  .carousel .carousel-indicators li {
      border-radius: 0;
      width: 15px;
      border: 0;
      background: #fff;
      height: 3px;
      margin: 0;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 250ms;
      transition-duration: 250ms;
  }
  .carousel .carousel-indicators li.active {
      width: 25px;
      height: 3px;
      background: #ff9800;
  }
  .modal .modal-footer .btn-link:hover,
  .modal:not([data-modal-color]) .modal-footer .btn-link:hover {
      background-color: #eee;
  }
  .modal .modal-content {
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.31);
      border-radius: 3px;
      border: 0;
  }
  .modal .modal-header {
      padding: 23px 26px;
  }
  .modal .modal-body {
      padding: 0 26px 10px;
  }
  .modal .modal-footer .btn-link {
      font-size: 14px;
      color: #000;
      font-weight: 500;
  }
  .modal:not([data-modal-color]) .modal-footer .btn-link {
      font-weight: 500;
  }
  .modal[data-modal-color],
  .modal[data-modal-color] .modal-footer .btn-link,
  .modal[data-modal-color] .modal-title {
      color: #fff;
  }
  .modal[data-modal-color] .modal-footer {
      background: rgba(0, 0, 0, 0.1);
  }
  .modal[data-modal-color] .modal-backdrop {
      background: #fff;
  }
  .modal[data-modal-color] .modal-footer .btn-link {
      font-weight: 400;
  }
  .modal[data-modal-color] .modal-footer .btn-link:hover {
      background-color: rgba(0, 0, 0, 0.1);
  }
  .modal[data-modal-color="blue"] .modal-content {
      background: #61a3d2;
  }
  .modal[data-modal-color="cyan"] .modal-content {
      background: #00bcd4;
  }
  .modal[data-modal-color="green"] .modal-content {
      background: #4caf50;
  }
  .modal[data-modal-color="lightgreen"] .modal-content {
      background: #8bc34a;
  }
  .modal[data-modal-color="lightblue"] .modal-content {
      background: #03a9f4;
  }
  .modal[data-modal-color="amber"] .modal-content {
      background: #ffc107;
  }
  .modal[data-modal-color="teal"] .modal-content {
      background: #009688;
  }
  .modal[data-modal-color="orange"] .modal-content {
      background: #ff9800;
  }
  .modal[data-modal-color="bluegray"] .modal-content {
      background: #607d8b;
  }
  .modal[data-modal-color="red"] .modal-content {
      background: #f44336;
  }
  .panel {
      box-shadow: none;
      border: 0;
  }
  .panel-heading {
      padding: 0;
  }
  .panel-title > a {
      padding: 10px 15px;
      display: block;
      font-size: 13px;
  }
  .panel-collapse .panel-heading {
      position: relative;
  }
  .panel-collapse .panel-heading .panel-title > a {
      padding: 8px 5px 16px 30px;
      color: #000;
      position: relative;
  }
  .panel-collapse .panel-heading .panel-title > a:after,
  .panel-collapse .panel-heading .panel-title > a:before {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      content: "";
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
  }
  .panel-collapse .panel-heading .panel-title > a:after {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
  }
  .panel-collapse .panel-heading:not(.active) .panel-title > a:before {
      background: #eee;
  }
  .panel-collapse .panel-heading:after,
  .panel-collapse .panel-heading:before {
      font-family: Material-Design-Iconic-Font;
      font-size: 17px;
      position: absolute;
      left: 0;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      backface-visibility: hidden;
      top: 4px;
  }
  .panel-collapse .panel-heading:before {
      content: "\f278";
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .panel-collapse .panel-heading:after {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
      content: "\f273";
  }
  .panel-collapse .panel-heading.active .panel-title > a:after {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .panel-collapse .panel-heading.active:before {
      -webkit-transform: scale(0) rotate(-90deg);
      -ms-transform: scale(0) rotate(-90deg);
      -o-transform: scale(0) rotate(-90deg);
      transform: scale(0) rotate(-90deg);
  }
  .panel-collapse .panel-heading.active:after {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .panel-collapse .panel-body {
      border-top: 0 !important;
      padding-left: 5px;
      padding-right: 5px;
  }
  .panel-group:not([data-collapse-color]) .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #61a3d2;
  }
  .panel-group[data-collapse-color="red"] .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #f44336;
  }
  .panel-group[data-collapse-color="green"] .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #4caf50;
  }
  .panel-group[data-collapse-color="amber"] .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #ffc107;
  }
  .panel-group[data-collapse-color="teal"] .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #009688;
  }
  .panel-group[data-collapse-color="black"] .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #000;
  }
  .panel-group[data-collapse-color="cyan"] .panel-collapse .panel-heading.active .panel-title > a:after {
      background: #00bcd4;
  }
  .tooltip-inner {
      padding: 5px 15px;
  }
  .breadcrumb {
      border-bottom: 1px solid #e5e5e5;
      border-radius: 0;
      margin-top: -27px;
      margin-bottom: 50px;
  }
  @media (min-width: 1280px) {
      .breadcrumb {
          padding: 10px 33px 11px 300px;
      }
  }
  @media (max-width: 1279px) {
      .breadcrumb {
          padding: 10px 33px 11px;
      }
  }
  .breadcrumb > li > a {
      color: #5e5e5e;
  }
  .breadcrumb > li > a:hover {
      color: #7c7c7c;
  }
  .messages {
      height: calc(100vh - 130px);
      position: relative;
  }
  .messages header {
      min-height: 55px;
  }
  .messages header .actions {
      position: absolute;
      top: 12px;
      right: 13px;
  }
  .m-sidebar {
      width: 300px;
      border-right: 1px solid #eee;
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1;
  }
  @media (max-width: 767px) {
      .m-sidebar {
          width: 60px;
      }
      .m-sidebar .list-group-item {
          padding: 10px !important;
      }
      .m-sidebar .ms-time {
          display: none;
      }
  }
  .m-sidebar header {
      background-color: #f7f7f7;
      padding: 20px;
  }
  .m-sidebar header h2 {
      line-height: 100%;
      font-size: 15px;
      margin: 0;
      text-transform: uppercase;
      font-weight: 400;
  }
  .m-sidebar .lgi-heading {
      max-width: 120px;
  }
  .m-sidebar .list-group {
      height: calc(100% - 130px);
  }
  .m-sidebar .mCSB_scrollTools {
      z-index: 2;
  }
  .ms-time {
      position: absolute;
      top: 16px;
      right: 25px;
      color: #777;
  }
  .ms-search {
      padding: 20px 25px;
      position: relative;
  }
  .ms-search .zmdi-search {
      position: absolute;
      left: 0;
      top: 8px;
      font-size: 20px;
  }
  .m-body,
  .mb-header,
  .mb-list,
  .mblm-item,
  .mblm-item > div {
      position: relative;
  }
  .ms-search input {
      padding-left: 25px !important;
  }
  .m-body {
      height: 100%;
  }
  @media (min-width: 768px) {
      .m-body {
          padding-left: 300px;
      }
  }
  @media (max-width: 767px) {
      .m-body {
          padding-left: 60px;
      }
  }
  .mb-header {
      background-color: #f7f7f7;
      box-shadow: 0 -1px 0 1px #eaeaea;
      z-index: 2;
  }
  .mbh-user {
      padding: 12px 20px;
  }
  .mbh-user > img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      float: left;
      margin-right: 15px;
  }
  .mb-list {
      height: calc(100% - 55px);
  }
  .mbl-messages {
      padding: 50px 50px 0;
      height: calc(100vh - 259px);
      overflow-x: hidden;
  }
  @media (max-width: 767px) {
      .mbl-messages {
          padding: 20px 20px 0;
      }
  }
  .mblm-item {
      margin-bottom: 10px;
  }
  .mblm-item > div {
      display: inline-block;
      max-width: 70%;
      padding: 15px 20px;
      border-radius: 2px;
  }
  .mblm-item small {
      display: block;
      color: #777;
      padding: 5px 20px;
  }
  .mblm-item-left > div {
      background-color: #eee;
  }
  .mblm-item-right {
      text-align: right;
  }
  .fz-block,
  .fzb-links > a {
      text-align: center;
      color: #ecf0f1;
  }
  .mblm-item-right > div {
      background-color: #ffc107;
      color: #fff;
  }
  .mblmi-img {
      margin: -10px -15px;
      cursor: pointer;
  }
  .mblmi-img img {
      max-width: 250px;
      border-radius: 2px;
  }
  .mbl-compose {
      border-top: 1px solid #eee;
      height: 70px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 15px 65px 15px 15px;
  }
  .mbl-compose textarea {
      height: 100%;
      width: 100%;
      border-radius: 2px;
      border: 0;
      resize: none;
      background: #eee;
      padding: 5px 10px;
      color: #5e5e5e;
      -webkit-transition: background-color;
      -o-transition: background-color;
      transition: background-color;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .mbl-compose button {
      position: absolute;
      top: 14px;
      right: 15px;
      background: 0 0;
      border: 0;
      font-size: 25px;
  }
  .mbl-compose button:hover {
      color: #333;
  }
  .four-zero {
      height: 100vh;
      background-color: #607d8b;
  }
  .fz-block {
      background: #557382;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      margin-top: -150px;
      padding: 25px;
      height: 300px;
      width: 500px;
      left: 50%;
      margin-left: -250px;
  }
  .fz-block h2 {
      font-size: 130px;
      line-height: 100%;
      color: #ecf0f1;
      font-weight: 100;
  }
  @media (max-width: 767px) {
      .fz-block {
          width: calc(100% - 40px);
          left: 20px;
          margin-left: 0;
          height: 260px;
          margin-top: -130px;
      }
      .fz-block h2 {
          font-size: 90px;
      }
  }
  .fz-block small {
      display: block;
      font-size: 26px;
      margin-top: -10px;
  }
  .fzb-links {
      margin-top: 20px;
  }
  .fzb-links > a {
      font-size: 16px;
      display: inline-block;
      margin: 0 1px;
      line-height: 30px;
      width: 30px;
      height: 30px;
      background: rgba(0, 0, 0, 0.09);
      border-radius: 50%;
  }
  .fzb-links > a:hover {
      background: rgba(0, 0, 0, 0.2);
  }
  .login-content {
      min-height: 100vh;
      text-align: center;
      background-color: #009688;
  }
  .login-content:before {
      content: "";
      height: 100vh;
      width: 1px;
  }
  .lc-block {
      max-width: 500px;
      padding: 20px 0;
      width: 80%;
      position: relative;
  }
  .lcb-navigation a,
  .lcb-navigation a i {
      vertical-align: top;
      display: inline-block;
  }
  .lc-block:not(.toggled) {
      display: none;
  }
  .lc-block.toggled {
      -webkit-animation-name: fadeInUp;
      animation-name: fadeInUp;
      -webkit-animation-duration: 0.3s;
      animation-duration: 0.3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      z-index: 10;
  }
  .lc-block:not(.lc-block-alt) .lcb-form {
      padding: 35px 55px 35px 25px;
  }
  .lc-block:not(.lc-block-alt) .btn-login {
      top: 50%;
      margin-top: -43px;
      right: -25px;
  }
  .lc-block .checkbox {
      margin: 5px 0 0 41px;
      text-align: left;
  }
  .lcb-form {
      background: #fff;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      border-radius: 2px;
  }
  .lcb-navigation {
      margin-top: 15px;
  }
  .lcb-navigation a,
  .lcb-navigation a span {
      -webkit-transition: width;
      -o-transition: width;
      transition: width;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
  }
  .lcb-navigation a {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
      margin: 0 1px;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      white-space: nowrap;
      text-align: left;
  }
  .lcb-navigation a i {
      width: 30px;
      font-style: normal;
      font-size: 16px;
      text-align: center;
      line-height: 30px;
  }
  .lcb-navigation a span {
      width: 0;
      overflow: hidden;
      display: inline-block;
      line-height: 29px;
      margin-left: -3px;
  }
  .lcb-navigation a:hover span {
      width: 100%;
  }
  .lcb-navigation a[data-ma-block="#l-register"]:hover {
      width: 95px;
  }
  .lcb-navigation a[data-ma-block="#l-forget-password"]:hover {
      width: 147px;
  }
  .lcb-navigation a[data-ma-block="#l-login"]:hover {
      width: 85px;
  }
  .lc-block-alt .lcb-form {
      padding: 70px 35px 60px;
  }
  .lc-block-alt .btn-login {
      bottom: 0;
      left: 50%;
      margin-left: -25px;
  }
  .lcb-user {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 5px solid #fff;
      position: absolute;
      top: -35px;
      left: 50%;
      margin-left: -50px;
      box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.18);
  }
  #profile-main {
      min-height: 500px;
      position: relative;
  }
  @media (min-width: 1200px) {
      #profile-main .pm-overview {
          width: 300px;
      }
      #profile-main .pm-body {
          padding-left: 300px;
      }
  }
  @media (min-width: 768px) and (max-width: 1200px) {
      #profile-main .pm-overview {
          width: 250px;
      }
      #profile-main .pm-body {
          padding-left: 250px;
      }
  }
  @media (min-width: 768px) {
      #profile-main .pm-overview {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #f8f8f8;
          border-right: 1px solid #eee;
      }
      #profile-main .pmo-pic img {
          width: 100%;
          border-radius: 2px 2px 0 0;
      }
  }
  #profile-main .pmo-pic {
      position: relative;
      margin: 20px;
  }
  @media (max-width: 767px) {
      #profile-main .pm-overview {
          width: 100%;
          background: #333;
          text-align: center;
      }
      #profile-main .pm-body {
          padding-left: 0;
      }
      #profile-main .pmo-pic img {
          width: 180px;
          display: inline-block;
          height: 180px;
          border-radius: 50%;
          border: 4px solid #fff;
          box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
      }
  }
  #profile-main .pmo-pic .pmo-stat {
      border-radius: 0 0 2px 2px;
      color: #fff;
      text-align: center;
      padding: 30px 5px 0;
  }
  @media (min-width: 768px) {
      #profile-main .pmo-pic .pmo-stat {
          background: #ffc107;
          padding-bottom: 15px;
      }
      #profile-main .pmo-pic .pmop-edit {
          width: 100%;
          opacity: 0;
          filter: alpha(opacity=0);
      }
      #profile-main .pmo-pic .pmop-edit i {
          margin-right: 4px;
      }
  }
  #profile-main .pmo-pic .pmop-edit {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      background: rgba(0, 0, 0, 0.38);
      text-align: center;
      padding: 10px 10px 11px;
  }
  #profile-main .pmo-pic .pmop-edit:hover {
      background: rgba(0, 0, 0, 0.8);
  }
  #profile-main .pmo-pic .pmop-edit i {
      font-size: 18px;
      vertical-align: middle;
      margin-top: -3px;
  }
  #profile-main .pmo-pic:hover .pmop-edit {
      opacity: 1;
      filter: alpha(opacity=100);
  }
  #profile-main .pmo-pic .pmop-message {
      position: absolute;
      bottom: 27px;
      left: 50%;
      margin-left: -25px;
  }
  #profile-main .pmo-pic .pmop-message .dropdown-menu {
      padding: 5px 0 55px;
      left: -90px;
      width: 228px;
      height: 150px;
      top: -74px;
      -webkit-transform-origin: center;
      -moz-transform-origin: center;
      -ms-transform-origin: center;
      transform-origin: center;
  }
  #profile-main .pmo-pic .pmop-message .dropdown-menu textarea {
      width: 100%;
      height: 95px;
      border: 0;
      resize: none;
      padding: 10px 19px;
  }
  #profile-main .pmo-pic .pmop-message .dropdown-menu button {
      bottom: 5px;
      left: 88px;
  }
  #profile-main .pmb-block {
      margin-bottom: 20px;
  }
  @media (min-width: 1200px) {
      #profile-main .pmb-block {
          padding: 40px 42px 0;
      }
  }
  @media (max-width: 1199px) {
      #profile-main .pmb-block {
          padding: 30px 20px 0;
      }
  }
  #profile-main .pmb-block:last-child {
      margin-bottom: 50px;
  }
  #profile-main .pmb-block .pmbb-header {
      margin-bottom: 25px;
      position: relative;
  }
  #profile-main .pmb-block .pmbb-header .actions {
      position: absolute;
      top: -2px;
      right: 0;
  }
  #profile-main .pmb-block .pmbb-header h2 {
      margin: 0;
      font-weight: 100;
      font-size: 20px;
  }
  #profile-main .pmb-block .pmbb-edit {
      position: relative;
      z-index: 1;
      display: none;
  }
  #profile-main .pmb-block .pmbb-edit,
  #profile-main .pmb-block .pmbb-view {
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
  }
  #profile-main .pmb-block.toggled .pmbb-edit {
      display: block;
  }
  #profile-main .pmb-block.toggled .pmbb-view {
      display: none;
  }
  .pmo-map,
  .t-view .tvh-user {
      display: block;
  }
  #profile-main .pmo-block {
      padding: 25px;
  }
  #profile-main .pmo-block > h2 {
      font-size: 16px;
      margin: 0 0 15px;
  }
  #profile-main .pmo-items .pmob-body {
      padding: 0 10px;
  }
  #profile-main .pmo-items a {
      display: block;
      padding: 4px;
  }
  #profile-main .pmo-items a img {
      width: 100%;
  }
  .pmo-contact ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  .pmo-contact ul li {
      position: relative;
      padding: 8px 0 8px 35px;
  }
  .pmo-contact ul li i {
      font-size: 18px;
      vertical-align: top;
      line-height: 100%;
      position: absolute;
      left: 0;
      width: 18px;
      text-align: center;
  }
  .t-view,
  .timeline {
      position: relative;
  }
  .pmo-map {
      margin: 20px -21px -18px;
  }
  .pmo-map img {
      width: 100%;
  }
  @media (min-width: 768px) {
      .timeline {
          padding: 50px 50px 50px 100px;
      }
  }
  .t-view {
      border: 1px solid #eee;
      margin-bottom: 35px;
  }
  @media (max-width: 767px) {
      .c-timeline {
          background: #edecec;
          box-shadow: none;
      }
      .c-timeline .tab-nav {
          background: #fff;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      }
      .timeline {
          margin-top: 30px;
      }
      .t-view {
          background: #fff;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      }
  }
  .t-view .tv-header {
      padding: 16px 18px;
      border-bottom: 1px solid #eee;
      background: #f9f9f9;
  }
  .t-view .tv-header .actions {
      position: absolute;
      top: 5px;
      right: 10px;
  }
  .t-view .tv-body {
      padding: 23px 25px;
  }
  .t-view .tv-body .tvb-lightbox {
      margin: 0 -8px 15px;
  }
  .t-view .tv-body .tvb-lightbox [data-src] {
      padding: 0 5px;
      margin-bottom: 5px;
  }
  .t-view .tvh-user img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
  }
  .t-view:before {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      left: -70px;
      top: 0;
      border: 3px solid #fff;
      text-align: center;
      font-size: 16px;
      line-height: 34px;
      color: #fff;
      z-index: 1;
  }
  .t-view:after {
      content: "";
      position: absolute;
      top: 0;
      left: -50px;
      width: 1px;
      height: calc(100% + 37px);
  }
  .t-view[data-tv-type="text"]:before {
      content: "\f24f";
      background: #00bcd4;
      box-shadow: 0 0 0 1px #00bcd4;
  }
  .t-view[data-tv-type="text"]:after {
      background: #00bcd4;
  }
  #calendar-widget .fc-day-number,
  #footer,
  #header .skin-switch,
  .actions > a,
  .actions > li > a,
  .ahs-close,
  .contacts .c-footer > button,
  .contacts .c-info,
  .load-more,
  .pt-inner,
  .pt-inner .pti-footer > a,
  .view-more,
  .wi-preview,
  .wp-media {
      text-align: center;
  }
  .ahs-close,
  .lg-slide em {
      font-style: normal;
  }
  .t-view[data-tv-type="image"]:before {
      content: "\f17f";
      background: #4caf50;
      box-shadow: 0 0 0 1px #4caf50;
  }
  .t-view[data-tv-type="image"]:after {
      background: #4caf50;
  }
  .t-view[data-tv-type="video"]:before {
      content: "\f3a9";
      background: #ffc107;
      box-shadow: 0 0 0 1px #ffc107;
  }
  .t-view[data-tv-type="video"]:after {
      background: #ffc107;
  }
  .t-view .tvb-stats {
      list-style: none;
      padding: 0;
      margin: 10px 0 20px;
  }
  .t-view .tvb-stats > li {
      display: inline-block;
      padding: 5px 10px 6px;
      border: 1px solid #ccc;
      margin-right: 2px;
  }
  .t-view .tvb-stats > li i {
      font-size: 15px;
      line-height: 100%;
      vertical-align: top;
      margin-top: 2px;
  }
  .t-view .tvb-stats > li.tvbs-comments {
      border-color: #4caf50;
      color: #4caf50;
  }
  .t-view .tvb-stats > li.tvbs-likes {
      border-color: #03a9f4;
      color: #03a9f4;
  }
  .t-view .tvb-stats > li.tvbs-views {
      border-color: #ff9800;
      color: #ff9800;
  }
  .tv-comments .tvc-lists {
      padding: 0;
      list-style: none;
      margin: 0;
  }
  .tv-comments .tvc-lists > li {
      padding: 15px 20px;
      margin: 0;
      border-top: 1px solid #eee;
  }
  .tvc-more {
      color: #333;
      display: block;
      margin-bottom: -10px;
  }
  .tvc-more:hover {
      color: #000;
  }
  .tvc-more i {
      vertical-align: middle;
      margin-right: 5px;
  }
  .p-header {
      position: relative;
      margin: 0 -7px;
  }
  .p-header .actions {
      position: absolute;
      top: -18px;
      right: 0;
  }
  .p-menu {
      list-style: none;
      padding: 0 5px;
      margin: 0 0 30px;
  }
  .p-menu > li {
      display: inline-block;
      vertical-align: top;
  }
  .p-menu > li > a {
      display: block;
      padding: 5px 20px 5px 0;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 15px;
  }
  .p-menu > li > a > i {
      margin-right: 4px;
      font-size: 20px;
      vertical-align: middle;
      margin-top: -5px;
  }
  .p-menu > li:not(.active) > a {
      color: #4285f4;
  }
  .p-menu > li:not(.active) > a:hover {
      color: #333;
  }
  .p-menu > li.active > a {
      color: #000;
  }
  @media (max-width: 991px) {
      .p-menu .pm-search {
          margin: 20px 2px 30px;
          display: block;
      }
      .p-menu .pm-search input[type="text"] {
          width: 100%;
          border: 1px solid #ccc;
      }
  }
  .p-menu .pms-inner {
      margin: -2px 0 0;
      position: relative;
      top: -2px;
      overflow: hidden;
      white-space: nowrap;
  }
  .p-menu .pms-inner i {
      vertical-align: top;
      font-size: 20px;
      line-height: 100%;
      position: absolute;
      left: 9px;
      top: 8px;
      color: #333;
  }
  .p-menu .pms-inner input[type="text"] {
      height: 35px;
      border-radius: 2px;
      padding: 0 10px 0 40px;
  }
  @media (min-width: 768px) {
      .p-menu .pms-inner input[type="text"] {
          border: 1px solid #fff;
          width: 50px;
          background: 0 0;
          position: relative;
          z-index: 1;
          -webkit-transition: all;
          -o-transition: all;
          transition: all;
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
      }
      .p-menu .pms-inner input[type="text"]:focus {
          border-color: #dfdfdf;
          width: 200px;
      }
  }
  .photos {
      margin: 2px 0 0;
  }
  .photos .lightbox {
      margin: 0 -8px;
  }
  .photos:not(.p-timeline) [data-src] {
      padding: 3px;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 150ms;
      transition-duration: 150ms;
  }
  .p-timeline {
      position: relative;
      padding-left: 80px;
      margin-bottom: 75px;
  }
  .p-timeline [data-src] {
      float: left;
      width: 70px;
      height: 70px;
      margin: 0 3px 3px 0;
  }
  .p-timeline:last-child .pt-line:before,
  .pt-line {
      height: 100%;
  }
  .ptb-title {
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 20px;
  }
  .pt-line {
      position: absolute;
      left: 0;
      top: 0;
      line-height: 14px;
  }
  .pt-line:after,
  .pt-line:before {
      content: "";
      position: absolute;
  }
  .pt-line:before {
      width: 1px;
      height: calc(100% + 63px);
      background: #e2e2e2;
      top: 14px;
      right: -20px;
  }
  .pt-line:after {
      top: 2px;
      right: -26px;
      width: 13px;
      height: 13px;
      border: 1px solid #c1c1c1;
      border-radius: 50%;
  }
  .contacts:not(.c-profile) {
      padding: 0 8px;
  }
  .contacts > [class*="col-"] {
      padding: 0 10px;
  }
  .contacts .c-item {
      border: 1px solid #e2e2e2;
      border-radius: 2px;
      margin-bottom: 24px;
  }
  .contacts .c-item .ci-avatar {
      display: block;
  }
  .contacts .c-item .ci-avatar img {
      width: 100%;
      border-radius: 2px 2px 0 0;
  }
  .contacts .ci-avatar {
      margin: -1px -1px 0;
  }
  .contacts .c-info {
      margin-top: 15px;
      padding: 0 5px;
  }
  .contacts .c-info strong {
      color: #000;
      font-size: 14px;
      font-weight: 500;
  }
  .contacts .c-info small {
      color: #999;
      margin-top: 3px;
  }
  .contacts .c-info small,
  .contacts .c-info strong {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
  }
  .contacts .c-footer {
      border-top: 1px solid #e2e2e2;
      margin-top: 18px;
  }
  .contacts .c-footer > button {
      padding: 7px 10px;
      color: #333;
      display: block;
      width: 100%;
      font-weight: 500;
      border-radius: 2px;
      background: #fff;
      border: 0;
  }
  .contacts .c-footer > button > i {
      font-size: 16px;
      vertical-align: middle;
      margin-top: -3px;
  }
  .z-depth-1 {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  }
  .z-depth-1-top {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  }
  .z-depth-1-bottom {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16);
  }
  .z-depth-2 {
      box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }
  .z-depth-2-top {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.19);
  }
  .z-depth-2-bottom {
      box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);
  }
  .z-depth-3 {
      box-shadow: 0 12px 15px rgba(0, 0, 0, 0.24), 0 17px 50px rgba(0, 0, 0, 0.19);
  }
  .z-depth-3-top {
      box-shadow: 0 17px 50px rgba(0, 0, 0, 0.19);
  }
  .z-depth-3-bottom {
      box-shadow: 0 12px 15px rgba(0, 0, 0, 0.24);
  }
  .z-depth-4 {
      box-shadow: 0 16px 28px rgba(0, 0, 0, 0.22), 0 25px 55px rgba(0, 0, 0, 0.21);
  }
  .z-depth-4-top {
      box-shadow: 0 25px 55px rgba(0, 0, 0, 0.21);
  }
  .z-depth-4-bottom {
      box-shadow: 0 16px 28px rgba(0, 0, 0, 0.22);
  }
  .z-depth-5 {
      box-shadow: 0 27px 24px rgba(0, 0, 0, 0.2), 0 40px 77px rgba(0, 0, 0, 0.22);
  }
  .z-depth-5-top {
      box-shadow: 0 40px 77px rgba(0, 0, 0, 0.22);
  }
  .z-depth-5-bottom {
      box-shadow: 0 27px 24px rgba(0, 0, 0, 0.2);
  }
  .z-depth-animation .z-depth-1,
  .z-depth-animation .z-depth-2,
  .z-depth-animation .z-depth-3,
  .z-depth-animation .z-depth-4,
  .z-depth-animation .z-depth-5 {
      transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .block-header {
      margin-bottom: 25px;
      position: relative;
  }
  @media screen and (min-width: 768px) {
      .block-header {
          padding: 0 22px;
      }
  }
  @media screen and (max-width: 991px) {
      .block-header {
          padding: 0 18px;
      }
  }
  .block-header > h2 {
      font-size: 15px;
      color: #777;
      margin: 0;
      font-weight: 400;
      text-transform: uppercase;
  }
  .block-header > h2 > small {
      display: block;
      text-transform: none;
      margin-top: 8px;
      margin-bottom: 20px;
      color: #9e9e9e;
      line-height: 140%;
  }
  .block-header .actions {
      position: absolute;
      right: 10px;
      top: -5px;
      z-index: 4;
  }
  .actions {
      list-style: none;
      padding: 0;
      z-index: 3;
      margin: 0;
  }
  .actions > li {
      display: inline-block;
      vertical-align: baseline;
  }
  .actions > a,
  .actions > li > a {
      width: 30px;
      height: 30px;
      display: inline-block;
      padding-top: 5px;
  }
  .actions > a > i,
  .actions > li > a > i {
      color: #adadad;
      font-size: 20px;
  }
  .actions.open > a > i,
  .actions > a:hover > i,
  .actions > li.open > a > i,
  .actions > li > a:hover > i {
      color: #000;
  }
  .actions.open > a:before,
  .actions > li.open > a:before {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
      opacity: 1;
      filter: alpha(opacity=100);
  }
  .actions.actions-alt > li.open > a > i,
  .actions.actions-alt > li > a > i,
  .actions.actions-alt > li > a > i:hover {
      color: #fff;
  }
  .actions.open {
      z-index: 4;
  }
  .line-wrap {
      width: 18px;
      height: 12px;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      margin: 12px 20px;
  }
  .line-wrap .line,
  .pt-inner .pti-footer > a {
      -webkit-transition: all;
      -o-transition: all;
  }
  .line-wrap .line {
      width: 18px;
      height: 2px;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      background-color: #fff;
  }
  .line-wrap .line.center {
      margin: 3px 0;
  }
  .toggled .line-wrap {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      transform: rotate(180deg);
  }
  .toggled .line-wrap .line.top {
      width: 12px;
      transform: translateX(8px) translateY(1px) rotate(45deg);
      -webkit-transform: translateX(8px) translateY(1px) rotate(45deg);
  }
  .toggled .line-wrap .line.bottom {
      width: 12px;
      transform: translateX(8px) translateY(-1px) rotate(-45deg);
      -webkit-transform: translateX(8px) translateY(-1px) rotate(-45deg);
  }
  .load-more {
      margin-top: 30px;
  }
  .load-more a {
      padding: 8px 10px 6px;
      display: inline-block;
      background-color: #f44336;
      color: #fff;
      border-radius: 2px;
      white-space: nowrap;
  }
  .load-more a i {
      font-size: 20px;
      vertical-align: middle;
      position: relative;
      margin-top: -2px;
  }
  .load-more a:hover {
      background-color: #ea1c0d;
  }
  .view-more {
      display: block;
      padding: 10px 10px 11px;
      line-height: 100%;
      font-size: 11px;
      margin-top: 20px;
      text-transform: uppercase;
      color: #777;
  }
  .ah-search,
  html.ismobile .page-loader {
      display: none;
  }
  .ah-label,
  .ahs-input {
      font-size: 15px;
  }
  .view-more:hover {
      color: #5e5e5e;
  }
  html:not(.ismobile) .page-loader {
      background: #fff;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
  }
  html:not(.ismobile) .page-loader .preloader {
      width: 50px;
      position: absolute;
      left: 50%;
      margin-left: -25px;
      top: 50%;
      margin-top: -55px;
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 3s;
      animation-duration: 3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
  }
  .ah-search,
  .ahs-input {
      height: 100%;
      width: 100%;
  }
  html:not(.ismobile) .page-loader .preloader p {
      white-space: nowrap;
      position: relative;
      left: -9px;
      top: 22px;
      color: #ccc;
  }
  .action-header {
      padding: 25px 30px;
      line-height: 100%;
      position: relative;
      z-index: 1;
      min-height: 65px;
      background-color: #f7f7f7;
  }
  .action-header .actions {
      position: absolute;
      top: 18px;
      right: 17px;
      z-index: 10;
  }
  .ah-search {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 11;
      background-color: #454e53;
  }
  .ahs-input {
      border: 0;
      padding: 0 26px;
      line-height: 60px;
      background-color: #f7f7f7;
  }
  .ahs-close,
  [class*="avatar-img"] {
      border-radius: 50%;
  }
  .ahs-close,
  .ie-warning p {
      font-size: 17px;
  }
  .ahs-close {
      position: absolute;
      top: 23px;
      right: 25px;
      line-height: 100%;
      cursor: pointer;
      background: #e2e2e2;
      width: 18px;
      height: 18px;
      color: #6b6b6b;
  }
  .ie-warning,
  .ma-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
  }
  .ahs-close:hover {
      opacity: 0.8;
  }
  .ma-backdrop {
      width: 100%;
      z-index: 9;
      cursor: pointer;
  }
  .avatar-img {
      width: 42px;
  }
  .ie-warning {
      z-index: 9999;
      background: #000;
      width: 100%;
      text-align: center;
      color: #fff;
      font-family: "Courier New", Courier, monospace;
      padding: 50px 0;
  }
  .ie-warning .iew-container {
      min-width: 1024px;
      width: 100%;
      height: 200px;
      background: #fff;
      margin: 50px 0;
  }
  .ie-warning .iew-download {
      list-style: none;
      padding: 30px 0;
      margin: 0 auto;
      width: 720px;
  }
  .ie-warning .iew-download > li {
      float: left;
      vertical-align: top;
  }
  .ie-warning .iew-download > li > a {
      display: block;
      color: #000;
      width: 140px;
      font-size: 15px;
      padding: 15px 0;
  }
  #footer,
  #footer .f-menu > li > a {
      color: #a2a2a2;
  }
  .ie-warning .iew-download > li > a > div {
      margin-top: 10px;
  }
  .ie-warning .iew-download > li > a:hover {
      background-color: #eee;
  }
  #footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 110px;
      padding-top: 35px;
      padding-bottom: 15px;
  }
  @media (min-width: 1280px) {
      #footer {
          padding-left: 268px;
      }
  }
  #footer .f-menu {
      display: block;
      width: 100%;
      padding-left: 0;
      list-style: none;
      margin-left: -5px;
      margin-top: 8px;
  }
  #footer .f-menu > li {
      display: inline-block;
      padding-left: 5px;
      padding-right: 5px;
  }
  #footer .f-menu > li > a:hover {
      color: #777;
  }
  .sidebar-toggled #footer {
      display: none;
  }
  .pt-inner .pti-header {
      padding: 45px 10px 70px;
      color: #fff;
      position: relative;
      margin-bottom: 15px;
  }
  .pt-inner .pti-header > h2 {
      margin: 0;
      line-height: 100%;
      color: #fff;
      font-weight: 100;
      font-size: 50px;
  }
  .pt-inner .pti-header > h2 small {
      color: #fff;
      letter-spacing: 0;
      vertical-align: top;
      font-size: 16px;
      font-weight: 100;
  }
  .pt-inner .pti-header .ptih-title {
      background-color: rgba(0, 0, 0, 0.1);
      padding: 8px 10px 9px;
      text-transform: uppercase;
      margin: 0 -10px;
      position: absolute;
      width: 100%;
      bottom: 0;
  }
  .pt-inner .pti-body {
      padding: 0 23px;
  }
  .pt-inner .pti-body .ptib-item {
      padding: 15px 0;
      font-weight: 400;
  }
  .pt-inner .pti-body .ptib-item:not(:last-child) {
      border-bottom: 1px solid #eee;
  }
  .pt-inner .pti-footer {
      padding: 10px 20px 30px;
  }
  .pt-inner .pti-footer > a {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: #fff;
      display: inline-block;
      line-height: 60px;
      font-size: 30px;
      transition: all;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
  }
  .pt-inner .pti-footer > a:hover {
      opacity: 0.85;
      filter: alpha(opacity=85);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 10px rgba(0, 0, 0, 0.12);
  }
  .invoice {
      min-width: 1100px;
      max-width: 1170px;
  }
  .i-logo {
      width: 150px;
  }
  .i-table .highlight {
      background-color: #eee;
      border-bottom: 1px solid #e6e6e6;
  }
  .i-table td.highlight {
      font-size: 14px;
      font-weight: 500;
  }
  .wp-text {
      border: 0;
      display: block;
      width: 100%;
      resize: none !important;
      padding: 20px 25px;
  }
  .wp-media {
      background: #f7f7f7;
      border: 1px solid #e4e4e4;
      padding: 12px 15px;
      margin: 10px 20px 20px;
  }
  .wp-actions {
      padding: 10px 15px 10px 20px;
      background-color: #f7f7f7;
  }
  .wpa-media-list > a {
      font-size: 20px;
      margin-right: 8px;
  }
  .wpa-media-list > a:hover {
      opacity: 0.7;
      filter: alpha(opacity=70);
  }
  .wis-numbers {
      float: left;
  }
  .wis-numbers > span {
      margin-right: -1px;
      padding: 7px 12px;
      border: 1px solid #e0e0e0;
      float: left;
      font-weight: 500;
  }
  .wis-numbers > span > i {
      line-height: 100%;
      vertical-align: top;
      position: relative;
      top: 3px;
      font-size: 15px;
      margin-right: 2px;
  }
  .wis-numbers > span.active {
      color: #4caf50;
  }
  .wis-commentors {
      float: right;
  }
  .wis-commentors > a {
      display: inline-block;
      margin-left: 2px;
  }
  .wis-commentors > a > img {
      width: 33px;
      height: 33px;
      border-radius: 50%;
  }
  .wis-commentors > a > img:hover {
      opacity: 0.85;
      filter: alpha(opacity=85);
  }
  @media screen and (min-width: 768px) {
      .wi-preview {
          margin: 0 -23px 20px;
      }
  }
  @media screen and (max-width: 991px) {
      .wi-preview {
          margin: 0 -16px 20px;
      }
  }
  .wi-preview .wip-item {
      display: block;
      float: left;
      position: relative;
      overflow: hidden;
      border: 2px solid #fff;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center;
      cursor: pointer;
  }
  .wi-preview .wip-item:hover {
      opacity: 0.9;
      filter: alpha(opacity=90);
  }
  .wi-preview .wip-item > img {
      display: none;
  }
  .wi-preview .wip-item:first-child:nth-last-child(2),
  .wi-preview .wip-item:first-child:nth-last-child(2) ~ div {
      width: 50%;
      padding-bottom: 40%;
  }
  .wi-preview .wip-item:first-child:nth-last-child(3),
  .wi-preview .wip-item:first-child:nth-last-child(3) ~ div,
  .wi-preview .wip-item:first-child:nth-last-child(4),
  .wi-preview .wip-item:first-child:nth-last-child(4) ~ div:not(:last-child),
  .wi-preview .wip-item:first-child:nth-last-child(5),
  .wi-preview .wip-item:first-child:nth-last-child(5) ~ div:not(:nth-last-of-type(-n + 2)),
  .wi-preview .wip-item:first-child:nth-last-child(6),
  .wi-preview .wip-item:first-child:nth-last-child(6) ~ div,
  .wi-preview .wip-item:first-child:nth-last-child(7) ~ div:nth-last-of-type(-n + 3) {
      width: 33.333333%;
      padding-bottom: 30%;
  }
  .wi-preview .wip-item:first-child:nth-last-child(5) ~ div:nth-last-of-type(-n + 2) {
      width: 50%;
      padding-bottom: 40%;
  }
  .wi-preview .wip-item:first-child:nth-last-child(7),
  .wi-preview .wip-item:first-child:nth-last-child(7) ~ div:not(:nth-last-of-type(-n + 3)),
  .wi-preview .wip-item:first-child:nth-last-child(n + 8),
  .wi-preview .wip-item:first-child:nth-last-child(n + 8) ~ div {
      width: 25%;
      padding-bottom: 22%;
  }
  .wi-preview .wip-item:first-child:nth-last-child(4) ~ div:nth-child(4),
  .wi-preview .wip-item:only-child {
      width: 100%;
      padding-bottom: 50%;
  }
  .wi-comments {
      background: #f7f7f7;
  }
  .wi-comments .list-group {
      margin-bottom: -10px;
      padding-top: 10px;
  }
  .wic-form {
      padding: 20px 23px;
  }
  .wic-form textarea {
      width: 100%;
      resize: none;
      border: 1px solid #e8e8e8;
      padding: 12px 15px;
      height: 45px;
  }
  #header .ss-skin,
  .ss-skin {
      border-radius: 50%;
      cursor: pointer;
  }
  .wic-form.toggled textarea {
      height: auto;
  }
  .wic-form.toggled .wicf-actions {
      display: block;
  }
  .wicf-actions {
      margin-top: 10px;
      display: none;
  }
  #header .skin-switch {
      padding: 10px 0 2px;
  }
  #header .ss-skin {
      width: 16px;
      height: 16px;
      display: inline-block;
      margin: 2px 3px;
  }
  @media (min-width: 992px) {
      #header-alt .skin-switch {
          position: absolute;
          right: 50px;
          bottom: 23px;
          z-index: 1;
      }
      #header-alt .skin-switch .btn {
          background: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 25px;
          z-index: 2;
      }
      #header-alt .skin-switch .dropdown-menu {
          display: block;
          min-width: 130px;
          height: 130px;
          border-radius: 50%;
          width: 130px;
          top: -42px;
          left: -40px;
          z-index: 1;
          -webkit-transform-origin: center;
          -moz-transform-origin: center;
          -ms-transform-origin: center;
          transform-origin: center;
          -webkit-transform: scale(0) rotate(-360deg);
          -ms-transform: scale(0) rotate(-360deg);
          -o-transform: scale(0) rotate(-360deg);
          transform: scale(0) rotate(-360deg);
          -webkit-transition-duration: 0.5s;
          transition-duration: 0.5s;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin {
          position: absolute;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-1 {
          margin-left: -8px;
          top: 12px;
          left: 50%;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-2 {
          right: 24px;
          top: 26px;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-3 {
          top: 50%;
          margin-top: -8px;
          right: 12px;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-4 {
          right: 24px;
          bottom: 26px;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-5 {
          margin-left: -8px;
          bottom: 12px;
          left: 50%;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-6 {
          left: 24px;
          bottom: 26px;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-7 {
          top: 50%;
          margin-top: -8px;
          left: 12px;
      }
      #header-alt .skin-switch .dropdown-menu .ss-skin.ss-8 {
          left: 24px;
          top: 26px;
      }
      #header-alt .skin-switch.open .dropdown-menu {
          -webkit-transform: scale(1) rotate(0);
          -ms-transform: scale(1) rotate(0);
          -o-transform: scale(1) rotate(0);
          transform: scale(1) rotate(0);
      }
  }
  @media (max-width: 991px) {
      #header-alt .skin-switch {
          display: none;
      }
  }
  .ss-skin {
      width: 16px;
      height: 16px;
  }
  .ss-skin:hover {
      opacity: 0.8;
      filter: alpha(opacity=80);
  }
  [data-ma-theme="lightblue"] {
      background-color: #03a9f4;
  }
  [data-ma-theme="lightblue"] .ss-icon {
      color: #03a9f4;
  }
  @media (max-width: 767px) {
      [data-ma-theme="lightblue"] .ha-menu {
          background: #03a9f4;
      }
      [data-ma-theme="bluegray"] .ha-menu {
          background: #607d8b;
      }
  }
  [data-ma-theme="bluegray"] {
      background-color: #607d8b;
  }
  [data-ma-theme="bluegray"] .ss-icon {
      color: #607d8b;
  }
  [data-ma-theme="blue"] {
      background-color: #61a3d2;
  }
  [data-ma-theme="blue"] .ss-icon {
      color: #61a3d2;
  }
  @media (max-width: 767px) {
      [data-ma-theme="blue"] .ha-menu {
          background: #61a3d2;
      }
      [data-ma-theme="purple"] .ha-menu {
          background: #ba68c8;
      }
  }
  [data-ma-theme="purple"] {
      background-color: #ba68c8;
  }
  [data-ma-theme="purple"] .ss-icon {
      color: #ba68c8;
  }
  [data-ma-theme="orange"] {
      background-color: #ff9800;
  }
  [data-ma-theme="orange"] .ss-icon {
      color: #ff9800;
  }
  @media (max-width: 767px) {
      [data-ma-theme="orange"] .ha-menu {
          background: #ff9800;
      }
      [data-ma-theme="cyan"] .ha-menu {
          background: #00bcd4;
      }
  }
  [data-ma-theme="cyan"] {
      background-color: #00bcd4;
  }
  [data-ma-theme="cyan"] .ss-icon {
      color: #00bcd4;
  }
  [data-ma-theme="green"] {
      background-color: #4caf50;
  }
  [data-ma-theme="green"] .ss-icon {
      color: #4caf50;
  }
  @media (max-width: 767px) {
      [data-ma-theme="green"] .ha-menu {
          background: #4caf50;
      }
      [data-ma-theme="teal"] .ha-menu {
          background: #009688;
      }
  }
  [data-ma-theme="teal"] {
      background-color: #009688;
  }
  [data-ma-theme="teal"] .ss-icon {
      color: #009688;
  }
  [data-ma-theme="pink"] {
      background-color: #e91e63;
  }
  [data-ma-theme="pink"] .ss-icon {
      color: #e91e63;
  }
  @media (max-width: 767px) {
      [data-ma-theme="pink"] .ha-menu {
          background: #e91e63;
      }
  }
  .preloader {
      position: relative;
      margin: 0 auto;
      display: inline-block;
  }
  .preloader:not([class*="pl-"]) {
      width: 40px;
  }
  .preloader:before {
      content: "";
      display: block;
      padding-top: 100%;
  }
  .preloader.pl-xs {
      width: 20px;
  }
  .preloader.pl-sm {
      width: 30px;
  }
  .preloader.pl-lg {
      width: 50px;
  }
  .preloader.pl-xl {
      width: 80px;
  }
  .preloader.pl-xxl {
      width: 100px;
  }
  .preloader:not([class*="pls-"]) .plc-path {
      animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  }
  .preloader[class*="pls-"] .plc-path {
      animation: dash 1.5s ease-in-out infinite;
  }
  .preloader.pls-red .plc-path {
      stroke: #f44336;
  }
  .preloader.pls-blue .plc-path {
      stroke: #61a3d2;
  }
  .preloader.pls-green .plc-path {
      stroke: #4caf50;
  }
  .preloader.pls-yellow .plc-path {
      stroke: #ffeb3b;
  }
  .preloader.pls-bluegray .plc-path {
      stroke: #607d8b;
  }
  .preloader.pls-amber .plc-path {
      stroke: #ffc107;
  }
  .preloader.pls-teal .plc-path {
      stroke: #009688;
  }
  .preloader.pls-gray .plc-path {
      stroke: #9e9e9e;
  }
  .preloader.pls-pink .plc-path {
      stroke: #e91e63;
  }
  .preloader.pls-purple .plc-path {
      stroke: #ba68c8;
  }
  .preloader.pls-white .plc-path {
      stroke: #fff;
  }
  .pl-circular {
      animation: rotate 2s linear infinite;
      height: 100%;
      transform-origin: center center;
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
  .plc-path {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      stroke-width: 2;
      stroke-miterlimit: 10;
      fill: none;
  }
  @keyframes rotate {
      100% {
          transform: rotate(360deg);
      }
  }
  @keyframes dash {
      0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
      }
      50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
      }
      100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
      }
  }
  @keyframes color {
      0%,
      100% {
          stroke: #f44336;
      }
      40% {
          stroke: #61a3d2;
      }
      66% {
          stroke: #4caf50;
      }
      80%,
      90% {
          stroke: #ffc107;
      }
  }
  @media print {
      .invoice .card-header,
      .invoice .highlight {
          background: #eee !important;
      }
      @page {
          margin: 0;
          size: auto;
      }
      body {
          margin: 0 !important;
          padding: 0 !important;
      }
      #chat,
      #footer,
      #header,
      #sidebar,
      .growl-animated,
      .m-btn {
          display: none !important;
      }
      .invoice {
          padding: 30px !important;
          -webkit-print-color-adjust: exact !important;
      }
      .invoice .card-header {
          padding: 20px;
          margin: -60px -30px 25px;
      }
      .invoice .block-header {
          display: none;
      }
  }
  .mejs-container {
      outline: 0;
  }
  .bootstrap-select .dropdown-toggle:focus,
  .mejs-container .mejs-controls .mejs-button button:focus {
      outline: 0 !important;
  }
  .mejs-container .mejs-controls {
      background: #ec592f;
      height: 50px;
      padding: 10px 5px 0;
  }
  .mejs-container .mejs-controls div {
      height: 5px;
  }
  .mejs-container .mejs-controls div.mejs-time-rail {
      position: absolute;
      left: 0;
      top: 0;
      padding: 0;
      width: 100% !important;
  }
  .mejs-container .mejs-controls div.mejs-time-rail .mejs-time-total {
      margin: 0;
      width: 100% !important;
      background: #ec592f;
  }
  .mejs-container .mejs-controls div.mejs-time-rail .mejs-time-loaded {
      background: #d04b25;
  }
  .mejs-container .mejs-controls div.mejs-time-rail .mejs-time-current {
      background: #ffea00;
  }
  .mejs-container .mejs-controls div.mejs-time-rail .mejs-time-buffering {
      background: #ec592f;
  }
  .mejs-container .mejs-controls div.mejs-time-rail a,
  .mejs-container .mejs-controls div.mejs-time-rail span:not(.mejs-time-float) {
      border-radius: 0;
      height: 3px;
  }
  .mejs-container .mejs-controls .mejs-button button {
      background-color: #ec592f;
      width: 15px;
      height: 15px;
      background-position: center;
  }
  .mejs-container .mejs-controls .mejs-volume-button {
      position: absolute;
      right: 35px;
  }
  .mejs-container .mejs-controls .mejs-play button {
      background-image: url(/img/icons/play.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .mejs-container .mejs-controls .mejs-play button {
          background-image: url(/img/icons/play@2x.png);
          background-size: 15px 15px;
      }
  }
  .mejs-container .mejs-controls .mejs-pause button {
      background-image: url(/img/icons/pause.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .mejs-container .mejs-controls .mejs-pause button {
          background-image: url(/img/icons/pause@2x.png);
          background-size: 15px 15px;
      }
  }
  .mejs-container .mejs-controls .mejs-mute button {
      background-image: url(/img/icons/speaker.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .mejs-container .mejs-controls .mejs-mute button {
          background-image: url(/img/icons/speaker@2x.png);
          background-size: 15px 15px;
      }
  }
  .mejs-container .mejs-controls .mejs-unmute button {
      background-image: url(/img/icons/speaker-2.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .mejs-container .mejs-controls .mejs-unmute button {
          background-image: url(/img/icons/speaker-2@2x.png);
          background-size: 15px 15px;
      }
  }
  .mejs-container .mejs-controls .mejs-fullscreen-button {
      position: absolute;
      right: 5px;
  }
  .mejs-container .mejs-controls .mejs-fullscreen-button button {
      background-image: url(/img/icons/fullscreen.png);
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .mejs-container .mejs-controls .mejs-fullscreen-button button {
          background-image: url(/img/icons/fullscreen@2x.png);
          background-size: 15px 15px;
      }
  }
  #fc-actions {
      position: absolute;
      bottom: 10px;
      right: 12px;
  }
  .fc td,
  .fc th {
      border-color: transparent;
  }
  .fc th {
      font-weight: 400;
      padding: 5px 0;
  }
  .fc table {
      background: 0 0;
  }
  .fc table tr > td:first-child {
      border-left-width: 0;
  }
  #calendar-widget .fc-toolbar h2 {
      font-size: 16px;
  }
  #calendar-widget .fc-day-number {
      color: #000;
  }
  #calendar-widget .fc-day-grid-event {
      margin: 1px 3px;
  }
  #calendar-widget .ui-widget-header,
  #calendar-widget .ui-widget-header th {
      border-width: 0;
  }
  #calendar .fc-toolbar {
      height: 300px;
      background-image: url(/img/cal-header.jpg);
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center;
      background-position: inherit;
  }
  #calendar .fc-toolbar h2 {
      font-size: 20px;
      color: #fff;
  }
  #calendar .fc-toolbar:before {
      content: "";
      height: 50px;
      width: 100%;
      background: rgba(0, 0, 0, 0.36);
      position: absolute;
      bottom: 0;
      left: 0;
  }
  #calendar .fc-toolbar .fc-center {
      margin-top: 238px;
      position: relative;
  }
  #calendar .fc-toolbar .ui-button {
      margin-top: 3px;
  }
  #calendar .fc-toolbar .ui-button span {
      color: #fff;
  }
  #calendar .fc-toolbar .ui-button:hover span {
      color: #333;
  }
  @media screen and (max-width: 991px) {
      #calendar .fc-toolbar {
          height: 200px;
      }
      #calendar .fc-toolbar .fc-center {
          margin-top: 138px;
      }
  }
  #calendar .fc-day-number {
      padding-left: 10px !important;
      color: #ccc;
      text-align: left !important;
  }
  @media screen and (min-width: 991px) {
      #calendar .fc-day-number {
          font-size: 25px;
          letter-spacing: -2px;
      }
  }
  #calendar .fc-day-header {
      color: #333 !important;
      text-align: left !important;
  }
  #calendar .fc-day-grid-event {
      margin: 1px 9px 0;
  }
  .fc-day-header {
      font-size: 0;
      padding-bottom: 20px !important;
  }
  .fc-day-header:first-letter {
      font-size: 14px;
      color: #c2c2c2;
      text-align: left;
      border-bottom-width: 0;
      border-right-color: #eee;
      padding: 10px 12px;
      text-transform: uppercase;
      font-weight: 700;
  }
  .fc-toolbar {
      margin-bottom: 0;
      padding: 20px 17px 19px;
      position: relative;
  }
  .fc-toolbar h2 {
      margin-top: 7px;
  }
  .fc-toolbar .ui-button {
      border: 0;
      background: 0 0;
      padding: 0;
      outline: 0 !important;
      text-align: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
  }
  .fc-toolbar .ui-button:hover {
      background: #efefef;
  }
  .fc-toolbar .ui-button > span {
      position: relative;
      font-family: Material-Design-Iconic-Font;
      font-size: 24px;
      line-height: 100%;
      width: 30px;
      display: block;
      margin-top: 2px;
  }
  .fc-toolbar .ui-button > span:before {
      position: relative;
      z-index: 1;
  }
  .fc-toolbar .ui-button > span.ui-icon-circle-triangle-w:before {
      content: "\f2fa";
  }
  .fc-toolbar .ui-button > span.ui-icon-circle-triangle-e:before {
      content: "\f2fb";
  }
  .fc-event {
      padding: 0;
      font-size: 11px;
      border-radius: 2px;
      border: 0;
  }
  .fc-event .fc-title {
      padding: 2px 8px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .fc-event .fc-time {
      float: left;
      background: rgba(0, 0, 0, 0.2);
      padding: 2px 6px;
      margin: 0 0 0 -1px;
  }
  .fc-view,
  .fc-view > table {
      border: 0;
      overflow: hidden;
  }
  .fc-view > table > tbody > tr > .ui-widget-content {
      border-top: 0;
  }
  div.fc-row {
      margin-right: 0 !important;
      border: 0 !important;
  }
  .fc-today {
      color: #ffc107 !important;
  }
  hr.fc-divider {
      border-width: 1px;
      border-color: #eee;
  }
  .fc-day-grid-container.fc-scroller {
      height: auto !important;
      overflow: hidden !important;
  }
  .event-tag {
      margin-top: 5px;
  }
  .event-tag > span {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin-right: 3px;
      position: relative;
      display: inline-block;
      cursor: pointer;
  }
  .event-tag > span:hover {
      opacity: 0.8;
      filter: alpha(opacity=80);
  }
  .event-tag > span.selected:before {
      font-family: Material-Design-Iconic-Font;
      content: "\f26b";
      position: absolute;
      text-align: center;
      top: 3px;
      width: 100%;
      font-size: 17px;
      color: #fff;
  }
  .bootgrid-footer .infoBar,
  .bootgrid-header .actionBar {
      text-align: left;
  }
  .bootgrid-footer .search,
  .bootgrid-header .search {
      vertical-align: top;
  }
  .bootgrid-header {
      padding: 0 25px 10px;
  }
  .bootgrid-header .search {
      border: 1px solid #e0e0e0;
  }
  .bootgrid-header .search .form-control,
  .bootgrid-header .search .input-group-addon {
      border: 0;
  }
  .bootgrid-header .search .glyphicon-search {
      vertical-align: top;
      padding: 9px 10px 0;
  }
  .bootgrid-header .search .glyphicon-search:before {
      content: "\f1c3";
      font-family: Material-Design-Iconic-Font;
      font-size: 17px;
      vertical-align: top;
      line-height: 100%;
  }
  @media (min-width: 480px) {
      .bootgrid-header .search {
          width: 300px;
      }
  }
  .bootgrid-header .actions {
      box-shadow: none;
  }
  .bootgrid-header .actions .btn-group {
      border: 1px solid #e0e0e0;
  }
  .bootgrid-header .actions .btn-group .btn {
      height: 35px;
      box-shadow: none !important;
      background: 0 0;
  }
  @media (min-width: 768px) {
      .bootgrid-header .actions .btn-group .dropdown-menu {
          left: 0;
          margin-top: 1px;
      }
  }
  .bootgrid-header .actions .btn-group .caret {
      display: none;
  }
  .bootgrid-header .actions .btn-group .zmdi {
      line-height: 100%;
      font-size: 18px;
      vertical-align: top;
  }
  @media (max-width: 480px) {
      .bootgrid-header .search {
          width: 100%;
          padding-right: 90px;
      }
      .bootgrid-header .actions {
          position: absolute;
          top: 0;
          right: 15px;
      }
  }
  .bootgrid-header .checkbox {
      margin: 10px 15px;
  }
  .bootgrid-table th > .column-header-anchor > .icon {
      top: 0;
      font-size: 20px;
      line-height: 100%;
  }
  .bootgrid-footer .col-sm-6 {
      padding: 10px 30px 20px;
  }
  @media (max-width: 768px) {
      .bootgrid-footer .col-sm-6 {
          text-align: center;
      }
      .bootgrid-footer .infoBar {
          display: none;
      }
  }
  .bootgrid-footer .infoBar .infos {
      border: 1px solid #e0e0e0;
      display: inline-block;
      float: right;
      padding: 7px 30px;
      font-size: 12px;
      margin-top: 5px;
  }
  .select-cell .checkbox {
      margin: 0;
  }
  .command-delete,
  .command-edit {
      background: #fff;
  }
  .bootgrid-table td.loading,
  .bootgrid-table td.no-results {
      background-color: #fff4c6;
  }
  .bootstrap-select {
      width: 100%;
  }
  .bootstrap-select .bs-caret {
      display: none;
  }
  .bootstrap-select > .btn-default {
      background: 0 0 !important;
      border-bottom: 1px solid #e0e0e0 !important;
      border-radius: 0;
      padding-left: 0;
      padding-right: 0;
  }
  .bootstrap-select > .btn-default:before {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      height: calc(100% - 2px);
      width: 30px;
      background-color: #fff;
      background-position: right calc(100% - 7px);
      background-repeat: no-repeat;
      background-image: url(/img/select.png);
      pointer-events: none;
      z-index: 5;
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .bootstrap-select > .btn-default:before {
          background-image: url(/img/select@2x.png);
          background-size: 12px 12px;
      }
  }
  .bootstrap-select .bs-searchbox {
      padding: 5px 5px 5px 40px;
      position: relative;
      background: #f7f7f7;
      margin-top: -10px;
  }
  .bootstrap-select .bs-searchbox:before {
      position: absolute;
      left: 0;
      top: 0;
      width: 40px;
      height: 100%;
      content: "\f1c3";
      font-family: Material-Design-Iconic-Font;
      font-size: 25px;
      padding: 4px 0 0 15px;
  }
  .bootstrap-select .check-mark:before,
  .chosen-container .chosen-results li.result-selected:before {
      content: "\f26b";
      font-family: Material-Design-Iconic-Font;
  }
  .bootstrap-select .bs-searchbox input {
      border: 0;
      background: 0 0;
  }
  .bootstrap-select.btn-group .dropdown-menu li a.opt {
      padding-left: 17px;
  }
  .bootstrap-select.btn-group .dropdown-menu .no-results {
      padding: 8px 8px 0;
      background-color: #fff;
  }
  .bootstrap-select .check-mark {
      margin-top: -5px !important;
      font-size: 19px;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
      display: block !important;
      position: absolute;
      top: 11px;
      right: 15px;
  }
  .bootstrap-select .selected .check-mark {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
  }
  .bootstrap-select .notify {
      bottom: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      border: 0 !important;
      background: #f44336 !important;
      color: #fff !important;
      text-align: center;
  }
  .bootstrap-select:not([class*="col-"]):not([class*="form-control"]):not(.input-group-btn) {
      width: 100%;
  }
  .chosen-container .chosen-drop {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      margin-top: 1px;
      border: 0;
      top: 0;
      border-radius: 2px;
  }
  .chosen-container .chosen-results {
      margin: 0;
      padding: 0;
      max-height: 300px;
  }
  .chosen-container .chosen-results li {
      padding: 10px 17px;
      width: 100%;
  }
  .chosen-container .chosen-results li.highlighted {
      background: rgba(0, 0, 0, 0.075);
      color: #333;
  }
  .chosen-container .chosen-results li.result-selected {
      background: 0 0;
      color: #5e5e5e;
      position: relative;
  }
  .chosen-container .chosen-results li.result-selected:before {
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 19px;
  }
  .chosen-container .chosen-results li.group-result {
      color: #b2b2b2;
      font-weight: 400;
      padding: 16px 15px 6px;
      margin-top: 9px;
  }
  .chosen-container .chosen-results li.group-result:not(:first-child) {
      border-top: 1px solid #eee;
  }
  .chosen-container-single .chosen-single {
      border-radius: 0;
      overflow: visible;
      height: 34px;
      padding: 6px 0;
      text-transform: uppercase;
      border: 0;
      border-bottom: 1px solid #e0e0e0;
      background: 0 0;
      box-shadow: none;
  }
  .chosen-container-single .chosen-single:before {
      position: absolute;
      top: 0;
      right: 0;
      content: "";
      height: calc(100% - 2px);
      width: 30px;
      background-color: #fff;
      background-position: right calc(100% - 7px);
      background-repeat: no-repeat;
      background-image: url(/img/select.png);
      pointer-events: none;
      z-index: 5;
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min--moz-device-pixel-ratio: 2),
      only screen and (-o-min-device-pixel-ratio: 2/1),
      only screen and (min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      .chosen-container-single .chosen-single:before {
          background-image: url(/img/select@2x.png);
          background-size: 12px 12px;
      }
  }
  .chosen-container-single .chosen-single div b {
      display: none;
  }
  .chosen-container-single .chosen-search {
      padding: 5px 5px 5px 40px;
      background: #f7f7f7;
  }
  .chosen-container-single .chosen-search:before {
      content: "\f1c3";
      font-family: Material-Design-Iconic-Font;
      position: absolute;
      left: 0;
      top: 0;
      width: 40px;
      height: 100%;
      font-size: 25px;
      padding: 5px 0 0 15px;
  }
  .chosen-container-single .chosen-search input[type="text"] {
      border: 0;
      height: 35px;
      line-height: 1.42857143;
      background-image: none !important;
  }
  .chosen-container-active.chosen-with-drop .chosen-single {
      border: 0;
      background: 0 0;
  }
  .chosen-container-multi .chosen-choices {
      padding: 0;
      border: 0;
      border-bottom: 1px solid #e0e0e0;
      background: 0 0;
      box-shadow: none;
  }
  .chosen-container-multi .chosen-choices li.search-choice {
      border-radius: 2px;
      margin: 4px 4px 0 0;
      background: #eaeaea;
      padding: 5px 23px 5px 8px;
      border: 0;
      box-shadow: none;
      font-size: 12px;
  }
  .chosen-container-multi .chosen-choices li.search-field input[type="text"] {
      padding: 0;
      height: 31px;
  }
  .search-choice-close {
      cursor: pointer;
  }
  .search-choice-close:before {
      display: inline-block;
      font-family: Material-Design-Iconic-Font;
      content: "\f135";
      position: relative;
      top: 1px;
      color: #9c9c9c;
      z-index: 2;
      background: #eaeaea;
      font-size: 12px;
  }
  .noUi-target {
      border-radius: 0;
      box-shadow: none;
      border: 0;
  }
  .noUi-background {
      background: #d4d4d4;
      box-shadow: none;
  }
  .noUi-horizontal {
      height: 3px;
  }
  .noUi-horizontal .noUi-handle {
      top: -8px;
  }
  .noUi-vertical {
      width: 3px;
  }
  .noUi-connect {
      background: #009688;
  }
  .noUi-horizontal .noUi-handle,
  .noUi-vertical .noUi-handle {
      width: 19px;
      height: 19px;
      border: 0;
      border-radius: 100%;
      box-shadow: none;
      -webkit-transition: box-shadow;
      -o-transition: box-shadow;
      transition: box-shadow;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      cursor: pointer;
      position: relative;
      background-color: #009688;
  }
  .noUi-horizontal .noUi-handle:after,
  .noUi-horizontal .noUi-handle:before,
  .noUi-vertical .noUi-handle:after,
  .noUi-vertical .noUi-handle:before {
      display: none;
  }
  .noUi-horizontal .noUi-active,
  .noUi-vertical .noUi-active {
      box-shadow: 0 0 0 13px rgba(0, 0, 0, 0.1);
  }
  .noUi-tooltip {
      border: 0;
      background: #d4d4d4;
      padding: 5px 10px;
  }
  .cp-container {
      position: relative;
  }
  .cp-container > .input-group input.cp-value {
      color: #000 !important;
      background: 0 0 !important;
  }
  .cp-container > .input-group .dropdown-menu {
      padding: 20px;
  }
  .cp-container i.cp-value {
      width: 25px;
      height: 25px;
      border-radius: 2px;
      position: absolute;
      top: 0;
      right: 15px;
  }
  .note-editor .note-toolbar,
  .note-editor .popover-content,
  .note-popover .note-toolbar,
  .note-popover .popover-content {
      background: #fff;
      border-color: #e4e4e4;
      margin: 0;
      padding: 10px 0 15px;
      text-align: center;
  }
  .note-editor .note-toolbar > .btn-group,
  .note-editor .popover-content > .btn-group,
  .note-popover .note-toolbar > .btn-group,
  .note-popover .popover-content > .btn-group {
      display: inline-block;
      float: none;
      box-shadow: none;
  }
  .note-editor .note-toolbar > .btn-group .btn,
  .note-editor .popover-content > .btn-group .btn,
  .note-popover .note-toolbar > .btn-group .btn,
  .note-popover .popover-content > .btn-group .btn {
      margin: 0 1px;
  }
  .note-editor .note-toolbar > .btn-group > .active,
  .note-editor .popover-content > .btn-group > .active,
  .note-popover .note-toolbar > .btn-group > .active,
  .note-popover .popover-content > .btn-group > .active {
      background: #00bcd4;
      color: #fff;
  }
  .note-editor .note-toolbar .btn,
  .note-editor .popover-content .btn,
  .note-popover .note-toolbar .btn,
  .note-popover .popover-content .btn {
      height: 40px;
      border-radius: 2px !important;
      box-shadow: none !important;
  }
  .note-editor .note-toolbar .btn:active,
  .note-editor .popover-content .btn:active,
  .note-popover .note-toolbar .btn:active,
  .note-popover .popover-content .btn:active {
      box-shadow: none;
  }
  .note-editor .note-toolbar .note-palette-title,
  .note-editor .popover-content .note-palette-title,
  .note-popover .note-toolbar .note-palette-title,
  .note-popover .popover-content .note-palette-title {
      margin: 0 !important;
      padding: 10px 0 !important;
      font-size: 13px !important;
      text-align: center !important;
      border: 0 !important;
  }
  .note-editor .note-toolbar .note-color-reset,
  .note-editor .popover-content .note-color-reset,
  .note-popover .note-toolbar .note-color-reset,
  .note-popover .popover-content .note-color-reset {
      padding: 0 0 10px !important;
      margin: 0 !important;
      background: 0 0;
      text-align: center;
  }
  .note-editor .note-toolbar .note-color .dropdown-menu,
  .note-editor .popover-content .note-color .dropdown-menu,
  .note-popover .note-toolbar .note-color .dropdown-menu,
  .note-popover .popover-content .note-color .dropdown-menu {
      min-width: 335px;
  }
  .note-editor .note-statusbar .note-resizebar,
  .note-popover .note-statusbar .note-resizebar {
      border-color: #e8e8e8;
  }
  .note-editor .note-statusbar .note-resizebar .note-icon-bar,
  .note-popover .note-statusbar .note-resizebar .note-icon-bar {
      border-color: #bcbcbc;
  }
  .note-editor .fa,
  .note-popover .fa {
      font-style: normal;
      font-size: 20px;
      vertical-align: middle;
  }
  .note-editor .fa:before,
  .note-popover .fa:before {
      font-family: Material-Design-Iconic-Font;
  }
  .note-editor .fa.fa-magic:before,
  .note-popover .fa.fa-magic:before {
      content: "\f16a";
  }
  .note-editor .fa.fa-bold:before,
  .note-popover .fa.fa-bold:before {
      content: "\f23d";
  }
  .note-editor .fa.fa-italic:before,
  .note-popover .fa.fa-italic:before {
      content: "\f245";
  }
  .note-editor .fa.fa-underline:before,
  .note-popover .fa.fa-underline:before {
      content: "\f24f";
  }
  .note-editor .fa.fa-font:before,
  .note-popover .fa.fa-font:before {
      content: "\f242";
  }
  .note-editor .fa.fa-list-ul:before,
  .note-popover .fa.fa-list-ul:before {
      content: "\f247";
  }
  .note-editor .fa.fa-list-ol:before,
  .note-popover .fa.fa-list-ol:before {
      content: "\f248";
  }
  .note-editor .fa.fa-align-left:before,
  .note-popover .fa.fa-align-left:before {
      content: "\f23b";
  }
  .note-editor .fa.fa-align-right:before,
  .note-popover .fa.fa-align-right:before {
      content: "\f23c";
  }
  .note-editor .fa.fa-align-center:before,
  .note-popover .fa.fa-align-center:before {
      content: "\f239";
  }
  .note-editor .fa.fa-align-justify:before,
  .note-popover .fa.fa-align-justify:before {
      content: "\f23a";
  }
  .note-editor .fa.fa-indent:before,
  .note-popover .fa.fa-indent:before {
      content: "\f244";
  }
  .note-editor .fa.fa-outdent:before,
  .note-popover .fa.fa-outdent:before {
      content: "\f243";
  }
  .note-editor .fa.fa-text-height:before,
  .note-popover .fa.fa-text-height:before {
      content: "\f246";
  }
  .note-editor .fa.fa-table:before,
  .note-popover .fa.fa-table:before {
      content: "\f320";
  }
  .note-editor .fa.fa-link:before,
  .note-popover .fa.fa-link:before {
      content: "\f18e";
  }
  .note-editor .fa.fa-picture-o:before,
  .note-popover .fa.fa-picture-o:before {
      content: "\f17f";
  }
  .note-editor .fa.fa-minus:before,
  .note-popover .fa.fa-minus:before {
      content: "\f22f";
  }
  .note-editor .fa.fa-arrows-alt:before,
  .note-popover .fa.fa-arrows-alt:before {
      content: "\f16d";
  }
  .note-editor .fa.fa-code:before,
  .note-popover .fa.fa-code:before {
      content: "\f13a";
  }
  .note-editor .fa.fa-question:before,
  .note-popover .fa.fa-question:before {
      content: "\f1f5";
  }
  .note-editor .fa.fa-eraser:before,
  .note-popover .fa.fa-eraser:before {
      content: "\f23f";
  }
  .note-editor .fa.fa-square:before,
  .note-popover .fa.fa-square:before {
      content: "\f279";
  }
  .note-editor .fa.fa-circle-o:before,
  .note-popover .fa.fa-circle-o:before {
      content: "\f26c";
  }
  .note-editor .fa.fa-times:before,
  .note-popover .fa.fa-times:before {
      content: "\f136";
  }
  .note-editor .note-air-popover .arrow,
  .note-popover .note-air-popover .arrow {
      left: 20px;
  }
  .note-editor {
      overflow: visible;
      border: 1px solid #e4e4e4;
  }
  .note-editor .note-editable {
      padding: 20px 23px;
  }
  .bootstrap-datetimepicker-widget {
      padding: 0 !important;
      margin: 0 !important;
      width: auto !important;
      bottom: auto !important;
      top: 0 !important;
  }
  .bootstrap-datetimepicker-widget:after,
  .bootstrap-datetimepicker-widget:before {
      display: none !important;
  }
  .bootstrap-datetimepicker-widget table td {
      text-shadow: none;
  }
  .bootstrap-datetimepicker-widget table td span {
      margin: 0;
  }
  .bootstrap-datetimepicker-widget table td span:hover {
      background: 0 0;
  }
  .bootstrap-datetimepicker-widget .glyphicon {
      font-family: Material-Design-Iconic-Font;
      font-size: 18px;
  }
  .bootstrap-datetimepicker-widget .glyphicon-chevron-left:before {
      content: "\f2ff";
  }
  .bootstrap-datetimepicker-widget .glyphicon-chevron-right:before {
      content: "\f301";
  }
  .bootstrap-datetimepicker-widget .glyphicon-time:before {
      content: "\f337";
  }
  .bootstrap-datetimepicker-widget .glyphicon-calendar:before {
      content: "\f32e";
  }
  .bootstrap-datetimepicker-widget .glyphicon-chevron-up:before {
      content: "\f1e5";
  }
  .bootstrap-datetimepicker-widget .glyphicon-chevron-down:before {
      content: "\f1e4";
  }
  .bootstrap-datetimepicker-widget a[data-action] {
      color: #009688;
  }
  .timepicker-picker .btn {
      box-shadow: none !important;
  }
  .timepicker-picker table tbody tr + tr:not(:last-child) {
      background: #009688;
      color: #fff;
  }
  .timepicker-picker table tbody tr + tr:not(:last-child) td {
      border-radius: 0;
  }
  .timepicker-picker .btn,
  .timepicker-picker .btn:hover {
      background: #fff;
      color: #333;
  }
  .datepicker table thead tr th {
      border-radius: 0;
      color: #fff;
  }
  .datepicker table thead tr th .glyphicon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      line-height: 29px;
  }
  .datepicker table thead tr th:hover .glyphicon {
      background: rgba(0, 0, 0, 0.2);
  }
  .datepicker table thead tr:first-child th {
      background: #009688;
      padding: 20px 0;
  }
  .datepicker table thead tr:first-child th:hover {
      background: #009688;
  }
  .datepicker table thead tr:first-child th.picker-switch {
      font-size: 16px;
      font-weight: 400;
      text-transform: uppercase;
  }
  .datepicker table thead tr:last-child th {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 11px;
  }
  .datepicker table thead tr:last-child th:first-child {
      padding-left: 20px;
  }
  .datepicker table thead tr:last-child th:last-child {
      padding-right: 20px;
  }
  .datepicker table thead tr:last-child:not(:only-child) {
      background: #00877a;
  }
  .datepicker table tbody tr:last-child td {
      padding-bottom: 25px;
  }
  .datepicker table tbody tr td:first-child {
      padding-left: 13px;
  }
  .datepicker table tbody tr td:last-child {
      padding-right: 13px;
  }
  .datepicker table td.day {
      width: 35px;
      height: 35px;
      line-height: 20px;
      color: #333;
      position: relative;
      padding: 0;
      background: 0 0;
  }
  .datepicker table td.day:hover {
      background: 0 0;
  }
  .datepicker table td.day:before {
      content: "";
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-bottom: -33px;
      display: inline-block;
      background: 0 0;
      position: static;
      text-shadow: none;
      border-bottom-color: transparent !important;
  }
  .datepicker table td.day.new,
  .datepicker table td.day.old {
      color: #cdcdcd;
  }
  .datepicker table td:not(.today):not(.active):hover:before {
      background: #f0f0f0;
  }
  .datepicker table td.today {
      color: #333;
  }
  .datepicker table td.today:before {
      background-color: #e2e2e2;
  }
  .datepicker table td.active {
      color: #fff;
  }
  .datepicker table td.active:before {
      background-color: #009688;
  }
  .datepicker-months .month,
  .datepicker-years .year,
  .timepicker-hours .hour,
  .timepicker-minutes .minute {
      border-radius: 50%;
  }
  .datepicker-months .month:not(.active):hover,
  .datepicker-years .year:not(.active):hover,
  .timepicker-hours .hour:not(.active):hover,
  .timepicker-minutes .minute:not(.active):hover {
      background: #f0f0f0;
  }
  .datepicker-months .month.active,
  .datepicker-years .year.active,
  .timepicker-hours .hour.active,
  .timepicker-minutes .minute.active {
      background: #009688;
  }
  .timepicker-hours .hour,
  .timepicker-minutes .minute {
      padding: 0;
  }
  .fileinput {
      position: relative;
      padding-right: 35px;
  }
  .fileinput .close {
      position: absolute;
      top: 5px;
      font-size: 12px;
      float: none;
      opacity: 1;
      font-weight: 500;
      border: 1px solid #ccc;
      width: 19px;
      text-align: center;
      height: 19px;
      line-height: 16px;
      border-radius: 50%;
      right: 0;
      visibility: hidden;
  }
  .fileinput .close:hover {
      background: #eee;
  }
  .fileinput .input-group-addon {
      padding: 0 10px;
      vertical-align: middle;
  }
  .fileinput .fileinput-preview {
      width: 200px;
      height: 150px;
      position: relative;
  }
  .fileinput .fileinput-preview img {
      display: inline-block;
      vertical-align: middle;
      margin-top: -13px;
  }
  .fileinput .fileinput-preview:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
  }
  .fileinput-exists .close {
      visibility: visible;
  }
  .lg-outer .lg-thumb-outer {
      background-color: #1d1d1d;
  }
  .lg-outer .lg-thumb-item {
      border-radius: 50%;
      width: 60px !important;
      display: inline-block;
      height: 60px;
      border: 0;
      float: none;
      margin: 0 5px;
  }
  .lg-outer .lg-thumb-item:hover {
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
  }
  .lg-outer .lg-image {
      border-radius: 3px;
  }
  .lg-outer .lg-toogle-thumb {
      border-radius: 50%;
      color: #333;
      height: 51px;
      width: 51px;
      line-height: 41px;
      background-color: #fff;
      -webkit-transition: all;
      -o-transition: all;
      transition: all;
      -webkit-transition-duration: 0.8s;
      transition-duration: 0.8s;
  }
  .lg-outer .lg-toogle-thumb:hover {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
      color: #000;
  }
  .lg-outer:not(.lg-thumb-open) .lg-toogle-thumb {
      top: -70px;
  }
  .lg-outer.lg-thumb-open .lg-toogle-thumb {
      top: -26px;
  }
  .lg-thumb.group {
      padding: 20px 0;
  }
  .lg-slide em h3 {
      color: #fff;
      margin-bottom: 5px;
  }
  .lg-slide .video-cont {
      box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }
  .lg-outer .lg-item {
      background-image: none !important;
  }
  .lg-outer .lg-item:before {
      content: "";
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-right-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      -webkit-animation-name: loader;
      animation-name: loader;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
  }
  .loading > i,
  .twitter-typeahead {
      width: 100%;
  }
  @-webkit-keyframes loader {
      0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
          transform: rotate(0);
      }
      100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
      }
  }
  .loading > i {
      height: 100%;
      display: block;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: loader 1.1s infinite linear;
      animation: loader 1.1s infinite linear;
      border-left-color: #fff;
      border-style: solid;
  }
  .sweet-alert {
      border-radius: 2px;
      padding: 35px;
      font-family: roboto;
  }
  .sweet-alert h2 {
      font-size: 16px;
      position: relative;
      z-index: 1;
      color: #333;
      line-height: 100%;
      margin: 0 0 15px;
      font-weight: 500;
  }
  .sweet-alert p {
      font-size: 13px;
      color: #777;
      font-weight: 400;
  }
  .sweet-alert button {
      padding: 6px 12px;
      border-radius: 2px;
      box-shadow: none !important;
      margin: 30px 1px 0;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 400;
  }
  .sweet-alert .sa-icon {
      margin-top: 0;
      margin-bottom: 30px;
  }
  .twitter-typeahead .tt-menu {
      min-width: 200px;
      background: #fff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      display: none;
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 0.3s;
      animation-duration: 0.3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
  }
  .twitter-typeahead .tt-menu.tt-open:not(.tt-empty) {
      display: block;
  }
  .twitter-typeahead .tt-suggestion {
      padding: 8px 17px;
      color: #333;
      cursor: pointer;
  }
  .twitter-typeahead .tt-cursor,
  .twitter-typeahead .tt-suggestion:hover {
      background-color: rgba(0, 0, 0, 0.075);
  }
  .twitter-typeahead .tt-hint {
      color: #818181 !important;
  }
  .mCSB_scrollTools {
      width: 5px;
  }
  .mCSB_scrollTools .mCSB_dragger_bar {
      border-radius: 0 !important;
  }
  .mCSB_scrollTools.mCSB_scrollTools_horizontal,
  .mCSB_scrollTools.mCSB_scrollTools_vertical {
      margin: 0 !important;
  }
  .mCSB_scrollTools.mCSB_scrollTools_horizontal {
      height: 10px;
  }
  html:not(.ie9) .mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
  html:not(.ie9) .mCS-minimal-dark.mCSB_scrollTools_onDrag .mCSB_dragger .mCSB_dragger_bar {
      background: rgba(0, 0, 0, 0.4);
  }
  html.ie9 .mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
  html.ie9 .mCS-minimal-dark.mCSB_scrollTools_onDrag .mCSB_dragger .mCSB_dragger_bar {
      background: #000;
  }
  .mCSB_inside > .mCSB_container {
      margin-right: 0;
  }
`