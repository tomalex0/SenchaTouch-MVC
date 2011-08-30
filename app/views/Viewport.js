


/**
 * @class twitter.Viewport
 * @extends Ext.Panel
 * 
 * The viewport is the application's shell - the parts of the UI that don't change. In the Twitter app, we only ever
 * render a single view at a time, so we use a fullscreen card layout here. The other part of the UI is the search list
 * on the left, which we add as a docked item.
 * 
 * Because the searchesList created below bubbles its selectionchange event, the object that creates this Viewport 
 * (the Application instance created in app/app.js) can attach a listener to that event to initiate a new search.
 * 
 */
Contacts.Viewport = Ext.extend(Ext.Panel, {
    layout    : 'card',
    id:'viewport',
    fullscreen: true
});

