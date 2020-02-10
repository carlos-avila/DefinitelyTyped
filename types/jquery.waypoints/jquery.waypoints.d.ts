// Type definitions for Waypoints v4.0.0
// Project: https://github.com/imakewebthings/waypoints
// Definitions by: Carlos Avila <https://github.com/carlos-avila/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JQueryWaypoints {

    export interface WaypointsOptions {
        /**
         * Default: window
         * Possible Values: Any element that is an ancestor of the waypoint element.
         */
        context?:any;

        /**
         * Default: true
         * Possible Values: true or false.
         */
        continuous?:boolean;

        /**
         * Default: true
         * Possible Values: true or false.
         */
        enabled?:boolean;

        /**
         * Default: 'default'
         * Possible Values: Any string.
         */
        group?:string;

        /**
         * Default: A no-op function, function() {}.
         * Possible Values: Any function.
         */
        handler?:any;

        /**
         * Default: false
         * Possible Values: true or false.
         */
        horizontal?:boolean;

        /**
         * Default: 0
         * Possible Values:
         *  number: A number of pixels.
         *  percentage string: Ex: '50%'. A percentage of the viewport's height.
         *  function: The function must return a number of pixels, as if you were using a number offset.
         *      The function is re-evaluated whenever a trigger point is recalculated, allowing for changes in layout.
         *  'bottom-in-view' string: This is a shortcut, an alias for a function offset that will trigger the handler
         *      when the bottom of the element hits the bottom of the viewport.
         *  'right-in-view' string: This is a shortcut, an alias for a function offset that will trigger the handler
         *      when the right of the element hits the right of the viewport. This is only useful in conjunction with
         *      the horizontal option.
         */
        offset?:any;
    }

    interface WaypointContext {

        /**
         * Parameters: None.
         * Returns: undefined.
         *
         * This destroys every waypoint in the context, and consequently unbinds any scroll and resize handlers
         * attached to this context's element.
         */
        destroy():void;

        /**
         * Parameters: None.
         * Returns: undefined.
         *
         * This method forces a recalculation of the trigger point for every waypoint in this context. This method
         * ends up being called automatically during a resize event and when new waypoints are created.
         */
        refresh():void;

        /**
         * Parameters:
         *  element: The scrollable HTMLElement of the context object you wish to find.
         * Returns: Context instance, or undefined if no context is associated with the provided element.
         */
        findByElement(element:any):WaypointContext;

    }

    interface WaypointGroup {
        /**
         * Parameters: None.
         * Returns: A Waypoint instance.
         *
         * This method returns the first waypoint in the group. "First" is determined by the trigger point of the
         * waypoints in the group, where "first" is the waypoint with the top-most (or left-most for horizontal
         * waypoints) trigger point.
         */
        first():Waypoint;

        /**
         * Parameters: None.
         * Returns: A Waypoint instance.
         *
         * This method returns the last waypoint in the group. "Last" is determined by the trigger point of the
         * waypoints in the group, where "last" is the waypoint with the bottom-most (or right-most for horizontal
         * waypoints) trigger point.
         */
        last():Waypoint;
    }

    interface Waypoint {

        /**
         * Parameters: None.
         * Returns: The same Waypoint instance, allowing chained method calls.
         *
         * Destroys the waypoint, preventing the handler from triggering ever again.
         */
        destroy():Waypoint;

        /**
         * Parameters: None.
         * Returns: The same Waypoint instance, allowing chained method calls.
         *
         * Disables the waypoint, preventing the handler function from triggering.
         */
        disable():Waypoint;

        /**
         * Parameters: None.
         * Returns: The same Waypoint instance, allowing chained method calls.
         *
         * Enables the waypoint, allowing the handler function to trigger.
         */
        enable():Waypoint;

        /**
         * Parameters: None.
         * Returns: The next waypoint in this waypoint's group. If this method is called on the last waypoint in a
         *      group, null is returned instead.
         *
         * When you're inside a waypoint handler, it is sometimes useful to know what the previous or next waypoint
         * is in relation to the current one being triggered. The next and previous functions servce that purpose.
         */
        next():Waypoint;

        /**
         * Parameters: None.
         * Returns: The previous waypoint in this waypoint's group. If this method is called on the first waypoint
         *      in a group, null is returned instead.
         *
         * When you're inside a waypoint handler, it is sometimes useful to know what the previous or next waypoint
         * is in relation to the current one being triggered. The next and previous functions servce that purpose.
         */
        previous():Waypoint;

        /**
         * Parameters: None.
         * Returns: undefined.
         *
         * Destroys all Waypoints. This is the same as calling destroy on every waypoint, or calling destroy on
         * every context.
         */
        destroyAll():void;

        /**
         * Parameters: None.
         * Returns: undefined.
         *
         * Disables all waypoints. This has the same effect as calling the disable method on every waypoint individually.
         */
        disableAll():void;

        /**
         * Parameters: None.
         * Returns: undefined.
         *
         * Enables all waypoints. This has the same effect as calling the enable method on every waypoint individually.
         */
        enabledAll():void;

        /**
         * Parameters: None.
         * Returns: undefined.
         *
         * This method forces a recalculation of the trigger point for every waypoint. It is the same as individually
         * calling refresh on every context.
         */
        refreshAll():void;

        /**
         * Parameters: None.
         * Returns: The height of the window in px.
         *
         * This is a convenience method for retrieving the height of the window. It also works around inconsistencies
         * in iOS with window height reporting when the URL bar is present on screen.
         */
        viewportHeight():number;

        /**
         * Parameters: None.
         * Returns: The height of the window in px.
         *
         * This is a convenience method for retrieving the width of the window. Unlike its viewportHeight complement,
         * this method does not need to work around iOS inconsistencies.
         */
        viewportWidth():number;
    }


}

interface JQuery {
    waypoint(options?:JQueryWaypoints.WaypointsOptions):JQueryWaypoints.Waypoint;
}