App.Views.Song = Backbone.View.extend({
  tagName: 'div',
  className: 'song',

initialize: function() {

 this.template = HandlebarsTemplates ["songs/show"] (this.model.toJSON());
 this.render()
},

render: function() {
    this.$el.html(this.template)
  },
})
