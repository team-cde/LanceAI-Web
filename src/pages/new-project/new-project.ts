import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-new-project',
  templateUrl: 'new-project.html'
})
export class NewProjectPage {
  newProject = {"title":"", "description":"", "type":"", "skills":"",
                "duration":"", "time":"", "level":"",
                "img":""};
  work = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.work["types"] = ["Mobile Development", "Desktop Development",
      "Web Development", "Game Development", "QA/Testing", "WordPress",
      "Ecommerce", "Other"]

    this.work["skills"] = ["Ionic Framework", "React Framework", "jQuery",
      "JavaScript", "HTML", "CSS", "I don’t know"]

    this.work["durations"] = ["More than 6 months", "3 to 6 months",
      "1 to 3 months", "Less than 1 month", "Less than 1 week"]

    this.work["times"] = ["More than 30 hrs/week", "20-30 hrs/week",
      "10-20 hrs/week", "0-10 hrs/week"]

    this.work["levels"] = ["Entry level", "Intermediate", "Expert"]

  }

  newProjectForm(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(HomePage, {
      addedProject:this.newProject,
  });
  }
}
