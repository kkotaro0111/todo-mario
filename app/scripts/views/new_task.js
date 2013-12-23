define([
  'backbone',
  'communicator',
  'models/task'
],
function(Backbone, Communicator, Task){
    'use strict';

  return Backbone.View.extend({
    events: {
      "keypress": "postTask"
    },
    postTask: function(event){
      if(event.keyCode == 13){
        var task = new Task({title: this.$el.val()});
        task.save();
        Communicator.command.execute("todo:add-new-task", task);
        this.$el.val('');
      }
    }
  });
});
