Javascript quiz-3 assignment

# Explain as much as you know about objects in javascript? (A long answer expected).

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
       constructor(x,y)
       {
           this.x=x;
           this.y=y;
       }
   }
   Vector v = new Vector(3,4);
```

# Do you think javascript is the language of the future?
