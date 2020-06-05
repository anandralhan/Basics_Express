# Handlebars
* Used for dynamic HTML content.

te. Using a third-party theme starts with
taking the primary file (usually index.html) and renaming it to main.handlebars (or
whatever you choose to call your layout file), and placing any resources (CSS, JavaScript,
images) in the public directory you use for static files. Then you’ll have to edit the
template file and figure out where you want to put the ```{{{body}}}``` expression.