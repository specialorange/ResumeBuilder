// Attach the application to window
window.RB = Ember.Application.create({});

// Define the main application controller. This is automatically picked up by
// the application and initialized.
RB.ApplicationController = Ember.Controller.extend({

});
RB.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

// Router
RB.Router = Ember.Router.extend({

});
RB.Router.map(function(){

});

// Home
RB.HomeController = Ember.Controller.extend({
});
RB.HomeView = Ember.View.extend({
  templateName: 'home',
});
// Resume
RB.ResumeController = Ember.ObjectController.extend({
});
RB.ResumeView = Ember.View.extend({
  templateName: 'resume'
});

// Tooltable
RB.TooltableController = Ember.ObjectController.extend({
});
RB.TooltableView = Ember.View.extend({
  templateName: 'tooltable'
});

// Abstract
RB.AbstractController = Ember.ObjectController.extend({
});
RB.AbstractView = Ember.View.extend({
  templateName: 'abstract'
});

// Approach
RB.ApproachController = Ember.ObjectController.extend({
});
RB.ApproachView = Ember.View.extend({
  templateName: 'approach'
});

// Work
RB.WorkController = Ember.ObjectController.extend({
});
RB.WorkView = Ember.View.extend({
  templateName: 'work'
});

// Academic
RB.AcademicController = Ember.ObjectController.extend({
});
RB.AcademicView = Ember.View.extend({
  templateName: 'academic'
});

// Skills
SkillsController = Ember.ObjectController.extend({
});
RB.SkillsView = Ember.View.extend({
  templateName: 'skills'
});
RB.SkillsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['angular.js', 'backbone.js', 'ember.js']);
  }
});

// Community
RB.CommunityController = Ember.ObjectController.extend({
});
RB.CommunityView = Ember.View.extend({
  templateName: 'community'
});

//Traditional
RB.TraditionalController = Ember.ObjectController.extend({
});
RB.TraditionalView = Ember.View.extend({
  templateName: 'traditional'
});

//Defer the start until advanceReadiness() is complete
// cant init RB manually, must use advanceReadiness(), which needs defer...
RB.deferReadiness();
// var test = function() {
  RB.advanceReadiness();
// });
