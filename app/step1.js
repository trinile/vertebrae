/* This is meant to be a super bare bones Backbone example.
 * It only has one model, and has no views or collections.
 * It is all in one file.
 *
 * This is the first in a series of three steps toward understanding Backbone.
 * First, we'll tackle models, then we will move onto views,
 * and then onto collections. Along the way, reference the documentation;
 * when you get to the real deal mytunes app,
 * you will need to read the documentation many many times.
 */

 /* - Backbone MODEL ----------------------------------------------------------
  * Backbone is organized into models, views, and collections; these components
  * communicate with each other to make a functional and organized application.
  *
  * We'll start with models: extend the Backbone.model class to contain
  * properties/methods for any extra special bits about the specific model
  * that we are working on.  This is where we would store information
  * about what each model looks like in HTML. It's also where any functionality
  * about that model would be stored.
  *
  * NOTE: a 'model' is just an object. 'Model' is a technical term in backbone
  * (and other similar frameworks) used to talk about the objects that we
  * are going to be using in our application to store data.
  */
  var Tweet = Backbone.Model.extend({  
    // This is just a bare bones Backbone model. No extra special bits to add.
  });

  /* Backbone models are created using the 'new' keyword.
   * Here we are creating an instance of the Tweet class.
   * The lines above and the below lines could be compressed to one expression.
   * Do so before you continue to step 2.
   * If you're not sure how, use the help desk.
   */
  var myNewTweet = new Tweet();

  /* - Backbone EVENTS --------------------------------------------------------
   * One of the biggest things Backbone gives us is the ability to
   * 'listen' for 'events'.  For example, if something in our model changes,
   * we can 'listen' for that change and do something
   * after the 'event' happens.  When we want to register a 'listener',
   * we use the method `model.on`.
   *
   * `model.on` takes two arguments:
   * 1. The event.
   * 2. A function that does the thing you want to do when the 'event' happens.
   *
   * Backbone gives you a couple of events for free.  Most importantly,
   * it gives you 'change', which means that your model changed somehow.
   * This event is triggered if, for example,
   * an attribute is added to the model, is deleted, or is changed.
   */

  // Listen for our model's `change` event:
  myNewTweet.on('change',
    function(/* this event holds information about the change: */ e) {
      // Let ourselves know that something was changed:
      console.info('Something in this tweet model was changed!');
      console.log(e);
    }
  );

  /* Now you have all of the important bits to fire the
   * registered backbone event that is already registered fire.
   * How are you going to do that?
   *
   * We know that if we 'change' the myNewTweet object/model,
   * it will fire the event.
   * We just need to change that object/model...somehow.
   *
   * Backbone models act a little differently than normal javascript objects.
   * One of the biggest things is that they have all sorts of baked in methods
   * that you can call on them.
   * The one we are going to want to use is called `model.set`.
   * Before you try to use it, read up on it
   * [in the documentation](http://backbonejs.org/#Model-set).
   *
   * After you've read about `model.set`, write the one-liner that will change
   * this model/object and fire the `change` event listener.
   *
   * Can't figure it out? Help desk it!

  /* Your code here: */


  /* Once you have the `change` event firing, move on to step 2! */