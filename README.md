Javascript quiz-3 assignment

# Explain as much as you know about objects in javascript? (A long answer expected).

Objects are standalone entity in javascript that has properties with values and methods.
for example :customer object with firstName, lastName, and email properties, and a sendMessage method.
Create an object

```Javascript
  let obj={};
  obj.x=1;
  obj.y=1;

```

# Read the code :

// This is an object based vector template
var vector =
{\_x: 0,\_y: 0,
create: function(x,y)
{var obj = Object.create(this);
obj.setX(x);
obj.setY(y);
return obj;
}
,
}

# Can you make a “class” based alternative to it? Using Javascript OOP features.

```JavaScript
   class Vector{
      var x,y;
       constructor(x,y)
       {
           this.x=x;
           this.y=y;
       }
   }
   Vector v = new Vector(3,4);
```

# Do you think javascript is the language of the future?

- JavaScript is one of the leading programming languages.
- It is called the programming language of the web.
- Node.js enabled JS to extend its reaches to the server-side.
- 95.1% of the Internet is powered by JavaScript
- ES6 and related technologies are developed for modern web requirements, where speed is a must
- AngularJS, Ember.js Metero.js, ReactJS, and VueJS are few wide variety of frameworks available for JavaScript
- There is package for almost everything and that too is readily available.
- JavaScript is present on:
  - Front end (Browsers)
  - Back end (Node)
  - Android/iOS (React Native, NativeScript, etc.)
  - Desktop (Electron)
  - Hybrid (Ionic)
