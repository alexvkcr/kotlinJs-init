if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlinJs'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinJs'.");
}
var kotlinJs = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello JS World!');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlinJs', _);
  return _;
}(typeof kotlinJs === 'undefined' ? {} : kotlinJs, kotlin);
