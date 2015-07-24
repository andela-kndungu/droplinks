$(document).ready(function() {

  var validUrl = require('valid-url');

  var options = {
    // Success is called once all files have been successfully added to the user's
    // Dropbox, although they may not have synced to the user's devices yet.
    success: function () {
        // Indicate to the user that the files have been saved.
        alert("Success! Files saved to your Dropbox.");
    },

    // Progress is called periodically to update the application on the progress
    // of the user's downloads. The value passed to this callback is a float
    // between 0 and 1. The progress callback is guaranteed to be called at least
    // once with the value 1.
    progress: function (progress) {},

    // Cancel is called if the user presses the Cancel button or closes the Saver.
    cancel: function () {},

    // Error is called in the event of an unexpected response from the server
    // hosting the files, such as not being able to find a file. This callback is
    // also called if there is an error on Dropbox or if the user is over quota.
    error: function (errorMessage) {
      alert("Oops! Something went wrong. Please try again");
    }
  };

  $("#link-form").submit(function(e){
    e.preventDefault();
    var url = $("#url").val();
    if (validUrl.isWebUri(url))
    {
      Dropbox.save(url, options);
    } else {
      alert('Please enter a valid link');
    }
  })
});
