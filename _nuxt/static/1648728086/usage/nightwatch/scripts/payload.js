__NUXT_JSONP__("/usage/nightwatch/scripts", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{document:{slug:"scripts",description:"",title:"Test Scripts",position:10,category:"Nightwatch",toc:[{id:U,depth:V,text:W},{id:X,depth:V,text:"The browser API"},{id:Y,depth:2,text:Z}],body:{type:"root",children:[{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:"\nThe following section describes standalone use of Nightwatch. A following section will discuss how Nightwatch interacts with Cucumber. However, that makes use of a package called Nightwatch API, and will have slightly different syntax.\n"}]},{type:a,value:g},{type:b,tag:_,props:{id:U},children:[{type:b,tag:G,props:{href:"#configuration",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:W}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"There is a file, named "},{type:b,tag:o,props:{},children:[{type:a,value:"nightwatch.conf.js"}]},{type:a,value:" that is created in your project root directory automatically when you first launch Nightwatch. You can make edits and additions to this file to suit your needs and style. For example, Nightwatch will launch Firefox by default (if you don't specify parameters while running), and you can change this by editing the configuration to launch Chrome. You can also supply parameters like "},{type:b,tag:o,props:{},children:[{type:a,value:"--headless"}]},{type:a,value:" under the desired section, to make Nightwatch perform all tests in the background, without actually launching the browser window."}]},{type:a,value:g},{type:b,tag:_,props:{id:X},children:[{type:b,tag:G,props:{href:"#the-browser-api",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:"The "},{type:b,tag:o,props:{},children:[{type:a,value:A}]},{type:a,value:" API"}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"The most basic Nightwatch test is a CommonJS module (a JavaScript file) containing a function. This function takes in an object called "},{type:b,tag:o,props:{},children:[{type:a,value:A}]},{type:a,value:" as an argument, and helps us to create all the magic. It is outside the scope of this tutorial to discuss "},{type:b,tag:$,props:{},children:[{type:a,value:"all"}]},{type:a,value:" the features this API offers, but just a few interesting ones are -"}]},{type:a,value:g},{type:b,tag:M,props:{},children:[{type:a,value:g},{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:aa}]},{type:a,value:": Tells the browser which URL to go to"}]},{type:a,value:g},{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:ab}]},{type:a,value:": Instruction to click on an element"}]},{type:a,value:g},{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:ac}]},{type:a,value:": Setting the value of an element, such as filling up a textbox on a form"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"It also exposes two important objects that help in testing."}]},{type:a,value:g},{type:b,tag:M,props:{},children:[{type:a,value:g},{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:B}]},{type:a,value:", which in turn, has functions under it that performs "},{type:b,tag:$,props:{},children:[{type:a,value:"assertions"}]},{type:a,value:", by checking whether test conditions are met. For example, if we want to make sure that the element with the id "},{type:b,tag:o,props:{},children:[{type:a,value:"main"}]},{type:a,value:" is visible, we would write"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,N]},children:[{type:b,tag:o,props:{},children:[{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:M,props:{},children:[{type:a,value:g},{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:ae}]},{type:a,value:", on the other hand, offers the same capability, but in a BDD-friendly format, helping you write tests that are almost in plain English."}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,N]},children:[{type:b,tag:o,props:{},children:[{type:a,value:A},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:b}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"to"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"be"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:O}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"h2",props:{id:Y},children:[{type:b,tag:G,props:{href:"#sample-script",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:Z}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"Let us consider the test scenario that we want to search for something on Google and verify that it takes us to the search results page. For that, we would have to perform two actions:"}]},{type:a,value:g},{type:b,tag:"ol",props:{},children:[{type:a,value:g},{type:b,tag:y,props:{},children:[{type:a,value:"Provide a text for the search box on "},{type:b,tag:G,props:{href:af,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:af}]}]},{type:a,value:g},{type:b,tag:y,props:{},children:[{type:a,value:"Click the Search button"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"You can tell Nightwatch how to find those elements by using one of two kinds of selector: either CSS or XPath. This tutorial will make use of CSS selectors."}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"If we peek into the developer tools for the textbox, we can see that it's HTML looks like this -"}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,ag]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:ai}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"gLFyf gsfi"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"jsaction"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"paste:puy29d;"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"maxlength"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"2048"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"q"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"aria-autocomplete"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"both"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"aria-haspopup"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"autocapitalize"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"autocomplete"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"autocorrect"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"autofocus"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"combobox"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"spellcheck"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"0ahUKEwiKk7f1nuj2AhUa7WEKHYHeCDoQ39UDCAQ"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:as}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"While this element does not have an "},{type:b,tag:o,props:{},children:[{type:a,value:"id"}]},{type:a,value:" attribute, we can see that it can be uniquely identified by the "},{type:b,tag:o,props:{},children:[{type:a,value:"title=\"Search\""}]},{type:a,value:" part, and so, the CSS selector for this element can be chosen as "},{type:b,tag:o,props:{},children:[{type:a,value:"input[title=Search]"}]},{type:a,value:", following rules of CSS."}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"Similarly, we can see that the HTML for the search button is"}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,ag]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ah}]},{type:a,value:ai}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"gNO89b"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"btnK"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"button"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"tabindex"}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"0"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"submit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:b,tag:c,props:{className:[d,e,l]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"0ahUKEwiKk7f1nuj2AhUa7WEKHYHeCDoQ4dUDCAs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:as}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"This one's easier because we can see a "},{type:b,tag:o,props:{},children:[{type:a,value:P}]},{type:a,value:" attribute assigned already. We'll use "},{type:b,tag:o,props:{},children:[{type:a,value:"input[name=btnK]"}]},{type:a,value:" as the selector."}]},{type:a,value:g},{type:b,tag:u,props:{},children:[{type:a,value:"With this information, we can write as very simple test as follows."}]},{type:a,value:g},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,N]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"module"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"exports"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,"string-property","property"]},children:[{type:a,value:"'NW test on Google'"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,au]},children:[{type:a,value:":"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"keyword"]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:"\n    browser\n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'http:\u002F\u002Fwww.google.com'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F tell NW to visit this URL"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'body'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F wait till body is loaded"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'Google'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F make sure the page title reads \"Google\""}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F make sure the text box is visible"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'Nightwatch JS'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F enter the search term"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F make sure the button is visible"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F click the button"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:"pause"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:"urlContains"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'search'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:"\u002F\u002F make sure we got to the right page"}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,s,p,n]},children:[{type:a,value:"end"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aA}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aA}]},{type:a,value:g}]}]}]}]},dir:"\u002Fen\u002Fusage\u002Fnightwatch",path:"\u002Fen\u002Fusage\u002Fnightwatch\u002Fscripts",extension:".md",createdAt:"2022-03-28T05:12:24.058Z",updatedAt:"2022-03-28T07:23:16.165Z",to:"\u002Fusage\u002Fnightwatch\u002Fscripts"},prev:{title:"Web Drivers",path:"\u002Fen\u002Fusage\u002Fnightwatch\u002Fwebdriver",to:"\u002Fusage\u002Fnightwatch\u002Fwebdriver"},next:{title:"Running Tests",path:"\u002Fen\u002Fusage\u002Fnightwatch\u002Frunning",to:"\u002Fusage\u002Fnightwatch\u002Frunning"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\"","\n"," ","=","attr-name","attr-value","attr-equals",".","property-access","code","function","(",")","method","string","p","\n      ","  ","comment","li"," \n","browser","assert","div","nuxt-content-highlight","pre","line-numbers","a","tag","true",-1,"icon","icon-link","ul","language-javascript","visible","name","off",",","number","1000","configuration",3,"Configuration","the-browser-api","sample-script","Sample Script","h3","em","url","click","setValue","'#main'","expect","https:\u002F\u002Fgoogle.com","language-html","\u003C","input","class","type","false","role","title","Search","value","aria-label","data-ved","\u003E","Google Search","operator","{","\n  ","waitForElementVisible","'input[title=Search]'","'input[name=btnK]'","}")));