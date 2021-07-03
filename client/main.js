import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './main.html';

FlowRouter.route('/start',{
  name: 'Character',
  action(params, queryParams){
    BlazeLayout.render("mainLayout", { main: "start"
    });     
  }
});

FlowRouter.route('/hope',{
  name: 'Hope',
  action(params, queryParams) {
    BlazeLayout.render("mainLayout", {
      main:"hope"
    });     
  }
});

if (Meteor.isClient) {

  Template.character.events({

     'submit form': function(event) {
        event.preventDefault();
        var v1 = event.target.v1.value;
        var v2 = event.target.v2.value;
        var v3 = event.target.v3.value;
        var v4 = event.target.v4.value;
        var v5 = event.target.v5.value;
        var v6 = event.target.v6.value;
        var v7 = event.target.v7.value;
        var v8 = event.target.v8.value;
        var v9 = event.target.v9.value;
        var v10 = event.target.v10.value;
        var v11 = event.target.v11.value;
        var v12 = event.target.v12.value;
        var v13 = event.target.v13.value;
        var v14 = event.target.v14.value;
        var v15 = event.target.v15.value;
        var v16 = event.target.v16.value;
        var v17 = event.target.v17.value;
        var v18 = event.target.v18.value;
        var v19 = event.target.v19.value;
        var v20 = event.target.v20.value;
        var v21 = event.target.v21.value;
        var v22 = event.target.v22.value;
        var v23 = event.target.v23.value;
        var v24 = event.target.v24.value;
        // put logic to determine life
        //satisfaction variables here
        // and list the page

        if ( v22>3.5) {

        }
        event.target.v22.value;
     }
  });
}