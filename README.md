# Toc.js
Small library to compile html templates.

#Install 

    npm install toc

Toc uses rollup to generate a CommonJS bundle or a global variable, choose the one wich best fit your project.
    
# Usage

Write your html wrapping variables between curly braces `{{}}`. remember to remove whitespace!

    <h1 id="demo"> Hello {{name}}<h1>

Then in your javascript call `render` with the proper parameters.    
    
    var element = document.querySelector('#demo');
    Toc.render(element, {
      name: 'World'
    }));
    
This will output:

    <h1 id="demo"> Hello World <h1>


If you want to use a template in a `<img  src={{url}} >` tag use `t-src` instead, this will prevent the browser to request an invalid url.

So instead doing:
    
    <img  src={{url}} >
    
Use:

    <img  t-src={{url}} >
    
# License
MIT
