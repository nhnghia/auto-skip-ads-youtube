// this is the code which will be injected into a given page...

(function() {
   console.log("Hi from HN");

   function clickButton( className ){
      var btn = document.getElementsByClassName( className );
      if( btn && btn.length > 0 ){
         btn[0].click();
      }
   }

   function checkSkipButton(  ){
      clickButton("ytp-ad-skip-button ytp-button");
      clickButton("ytp-ad-overlay-close-button");
   }

   setInterval( checkSkipButton, 1000 );
})();
