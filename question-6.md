## Question

What is difference between framework base website and normal website (none
framework)

### Answer

If you build a website without framework, it ususally means the site would be made up of several html/css/js files, and if the site scales, it might be difficult to manage the files, for example, the loading order and dependencies between js scripts.

Frameworks split a website into modules/components, so the dependencies among files are clear. Also, using a frontend framework usually means you have a build step, so the code loaded in the browser would be much more light weight and loads faster.
