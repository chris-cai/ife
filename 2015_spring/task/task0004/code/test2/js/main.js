/**
 * Created by Chris Cai on 2016/12/15.
 */
require.config({
    baseUrl: 'js'
});

require(['selector'], function(query) {
    var els = query('#wrapper');
    console.log(els)
});