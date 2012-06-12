/* =============================================================================
   HTML5 Boilerplate CSS: h5bp.com/css
   ========================================================================== */

aside{ display: block; }
header { display: block; width: 100%; }

.chromeframe { margin: 0.2em 0; background: #ccc; color: black; padding: 0.2em 0; }


/* ===== Initializr Styles =====================================================
   Author: Jonathan Verrecchia - verekia.com/initializr/responsive-template
   ========================================================================== */

/*body{ font:16px/26px Helvetica, Helvetica Neue, Arial; }*/

.wrapper{
	width:90%;
/*	margin:0 5%; */
}

/* ===================
    ALL: Orange Theme
   =================== */

#header-container{ border-bottom: 20px solid #e44d26; }
#footer-container{ border-top:    20px solid #e44d26; }
#main aside      { border-top:    20px solid #e44d26; background:#f16529;}
#header-container,
#footer-container,
::-moz-selection { background: #f16529; color: #fff; text-shadow: none; }
::selection      { background: #f16529; color: #fff; text-shadow: none; }

/* ===============
    ALL: IE Fixes
   =============== */
.ie7 header h1 { padding-top:20px; }
/
/* ====================
    WIDE: CSS3 Effects
   ==================== */
	#header-container,
	#main aside{
		-webkit-box-shadow:0 5px 10px #aaa;
		   -moz-box-shadow:0 5px 10px #aaa;
		        box-shadow:0 5px 10px #aaa;
	}
/* ============
    WIDE: Menu
   ============ */

	header h1 {
		float:left;
	}
	nav{
		float:right;
		width:38%;
	}
/* ============
    WIDE: Main
   ============ */

	#main article{
		float:left;
		width:70%;
	}
	#main aside{
		float:right;
		width:25%;
	}
}
@media only screen and (min-width: 1140px) {
/* ===============
    Maximal Width
   =============== */

	.wrapper{
		width:90%; /* 1140px - 10% for margins */
		margin:0 auto;
	}
}

/*chris's crap*/
.mydiv { }
.mydiv p1 {
	margin: 1px; 
	margin-left: 0px;
}
.generatedcontent {
	width:100%;
}
aside h1 {
	margin: 1px; 
	font-size: 14px;
}
aside p {
	margin: 1px; 
	margin-left: 50px;
	font-size: 8px;
}
aside h2 {
	margin: 1px; 
	margin-left: 25px; 
	font-size: 12px;
}
aside h3 {
	margin: 1px; 
	margin-left: 25px;
	font-size: 10px;
}
aside ol {
	margin: 1px; 
	font-size: 14px;
}
#main aside article {
	float:left;
	width:100%;
}
p {
	margin: 1px; 
	margin-left: 50px;
}
h1 {
	margin: 0; 
	font-size: 14px;
}
h2 {
	margin: 0;  
	font-weight:normal;
	margin-left: 15px; 
	font-size: 12px;
}
h3 {
	margin: 0; 
	font-weight:normal;
	margin-left: 30px; 
	font-size: 10px;
}
h4 {
	margin: 0; 
	font-weight:normal;
	margin-left: 45px; 
	font-size: 8px;
}
li {
	font-size: 10px;
}
.button {
   border-top: 1px solid #ffffff;
   background: #ff4d00;
   background: -webkit-gradient(linear, left top, left bottom, from(#ff4d00), to(#ff4d00));
   background: -webkit-linear-gradient(top, #ff4d00, #ff4d00);
   background: -moz-linear-gradient(top, #ff4d00, #ff4d00);
   background: -ms-linear-gradient(top, #ff4d00, #ff4d00);
   background: -o-linear-gradient(top, #ff4d00, #ff4d00);
   padding: 2px 4px;
   -webkit-border-radius: 4px;
   -moz-border-radius: 4px;
   border-radius: 4px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: #ffffff;
   font-size: 12px;
   font-family: Georgia, Serif;
   text-decoration: none;
   vertical-align: middle;
   }
.button:hover {
   border-top-color: #275700;
   background: #275700;
   color: #ffffff;
   }
.button:active {
   border-top-color: #0000ff;
   background: #0000ff;
   }
.button-vert {
   border-top: 1px solid #ffffff;
   background: #ff4d00;
   background: -webkit-gradient(linear, left top, left bottom, from(#ff4d00), to(#ff4d00));
   background: -webkit-linear-gradient(top, #ff4d00, #ff4d00);
   background: -moz-linear-gradient(top, #ff4d00, #ff4d00);
   background: -ms-linear-gradient(top, #ff4d00, #ff4d00);
   background: -o-linear-gradient(top, #ff4d00, #ff4d00);
   padding: 2px 4px;
   -webkit-border-radius: 4px;
   -moz-border-radius: 4px;
   border-radius: 4px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: #ffffff;
   font-size: 8px;
   font-family: georgia, serif;
   text-decoration: none;
   vertical-align: middle;
   }
.button-vert:hover {
   border-top-color: #275700;
   background: #275700;
   color: #ffffff;

   }
.button-vert:active {
   border-top-color: #0000ff;
   background: #0000ff;
   }
.btn {
	background-color: transparent;
	border: 0;
	padding: 0;
	color: white;
}
aside .hover {
	cursor: pointer;
	font-color: blue;
	font-weight: bold;
}
.technical td {
	margin: 0;  
	font-weight:normal;
	margin-left: 15px; 
	font-size: 12px;
}
.type {
	visibility: hidden
}
@font-face {
    font-family: 'Desyrel';
    src: url('/Users/chrisfrisina/Documents/CP/Projects/ResumeBuilder/_css/desyrel.eot');
    src: url('/Users/chrisfrisina/Documents/CP/Projects/ResumeBuilder/_css/desyrel.eot?#iefix') format('embedded-opentype'),
         url('/Users/chrisfrisina/Documents/CP/Projects/ResumeBuilder/_css/desyrel.woff') format('woff'),
         url('/Users/chrisfrisina/Documents/CP/Projects/ResumeBuilder/_css/desyrel.ttf') format('truetype'),
         url('/Users/chrisfrisina/Documents/CP/Projects/ResumeBuilder/_css/desyrel.svg#Desyrel') format('svg');
    font-weight: normal;
    font-style: normal;

}
.namefont {
	font-family: Desyrel;
	font-size: 50px;
}