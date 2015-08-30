var forismatic = require("forismatic-node");




  forismatic.getQuote(function(error, quote) {
    if (!error) {
      console.log(quote);
    } else {
      console.error(error);
    }
  });

