import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProjectPage } from '../project/project';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  addedProject:any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addedProject = navParams.get("addedProject");


    // FOR Testing
    //this.addedProject = {};
    //this.openProject("mobile_project");
  }

  openProject(projectName) {
    this.addedProject["description"] = "Mobile application to give customers access to our rewards system";
    this.addedProject["title"] = "Customer Rewards App";
    this.addedProject["type"] = "Mobile Development";
    this.addedProject["skills"] = ["JavaScript", "HTML", "CSS"];
    this.addedProject["duration"] =  "1 to 3 months";
    this.addedProject["time"] = "20-30 hrs/week";
    this.addedProject["level"] = "Intermediate";
    this.addedProject["img"] = "../../assets/imgs/mobile_project.jpg";

    this.navCtrl.push(ProjectPage, {
      projectData:this.addedProject,
  });
  }

}
