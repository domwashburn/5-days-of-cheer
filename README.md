# 5 Days of Cheer

In late October 2014 my development team and my company's marketing department began collaborating on and engaging multi-day promotion for Black Friday. After all ideas were on the table, we finally settled on an advent calender style promotion where a different offer is revealed each day the promotion was active.


## Why pure JavaScript?
The real world is messy and so is some of the code you inherrit as a developer; this can be a setback or an opportunity. 

### promo.js
Of course, writing the script would have been easier to do in jQuery as opposed to 100% JavaScript, but the website was running a highly customized version of jQuery that had proven to be a hassle in the past. As an added layer of complexity, the site I was developing the promotion for shared code and scripts with the company's other sites so it wasn't as simple as swapping out the jQuery file and seeing what needs fixing because a change to that file would have affected five other websites.

With the time frame I didn't have time to trouble shoot multiple sites for jQuery issues *and* develop a promo from scratch. I knew I could depend on `document.ready` and that's about it. 

I didn't want such an important promotion relying on code that I was uncertain of so I went through and created a promo script in pure JavaScript. The script validates the current date against the set promotion dates, revealing promotional infotmation, it's associated code and legal on the date it's active. The script also triggers UI animations.

Of course, showing and hiding the promotions was only half the battle. The promotion's design called for rich interactions and that meant custom animations.

### annimations
The Promotion had two main interations, a reveal to show the promotion hidden behind the tag and an indication that clicking a tag would not reveal the promotion. It was decided that the tags would slide up automatically when the dates were valid and if a date was not valid that tag would shake and temporarily reveal a message with the date the promotion would be revealed when clicked.

Initially I wanted to simply apply some css transitions that would be triggered by the javascript but because of the browsers I was required to support for the project I had to find another route. This lead to JQuery annimations which I quickly found to be clunly and cumbersome and, quite honestly, unable (or incredibly difficult) to execute my vision for the interations.

Enter [GreenSock](http://greensock.com/). The GSAP annimations allow for annimation of 

###### _* a note about css rotations and GSAP_
One word to describe animating context-based rotations (rotating based on the elements current rotation and returning it back to that position) in GSAP and TweenMax would be frustrating. It took some time and pleanty of really strange animations to find the fix. I wound up implimenting code that I found [on CSS Tricks](http://css-tricks.com/get-value-of-css-rotation-through-javascript). It wasn't necessarily intended to be used in this situation but I did what I could to get it implimented and it works nearly flawlessly.


## TL;DR
Worked with the marketing department to create an highly custom interactive promotion for Black Friday 2015.

The JQuery version on the site was unknown and unreliable due to a highly customized implementation.
 
The animations are created with [TweenMax](http://greensock.com/tweenmax) by [GreenSock](http://greensock.com/) because css transitions and annimations weren't supported in all the necessary browsers and JQuery was clunky.

The animations are created with [TweenMax](http://greensock.com/tweenmax) by [GreenSock](http://greensock.com/).

#### todos:

- separate the animation scripts from the main promo scripts
- alter the script so that even when the month is invalid any UI animations still trigger
- alter the script so that promotion can span multiple months
- move show/hide function
- investigate translating to CoffeeScript
- update gulp file and package.json

