  import {
    TYPE_ERROR,
    TYPE_LOG,
    TYPE_WARN
  }from './constant.js';
  //module
  function loggerTest(log, type=TYPE_WARN){
   console[type](log);
}
export default loggerTest;