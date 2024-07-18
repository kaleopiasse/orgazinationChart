import { Component } from '@angular/core';
import { Enabled, OrgItemConfig, OrientationType, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  OrientationType = OrientationType;

  orientationType = OrientationType.Top

  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "James Smith",
      description: "VP, Public Sector",
      templateName: "nodeTemplate",
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Ted Lucas",
      description: "VP, Human Resources",
      templateName: "nodeTemplate",
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Fritz Stuger",
      description: "Business Solutions, US",
      templateName: "nodeTemplate",
    }),
    new OrgItemConfig({
      id: 3,
      parent: null,
      title: "James Smith 2",
      description: "VP, Public Sector",
      templateName: "nodeTemplate",
    }),
    new OrgItemConfig({
      id: 4,
      parent: 3,
      title: "Ted Lucas 2",
      description: "VP, Human Resources",
      templateName: "nodeTemplate",
    }),
    new OrgItemConfig({
      id: 5,
      parent: 3,
      title: "Fritz Stuger 2",
      description: "Business Solutions, US",
      templateName: "nodeTemplate",
    })
  ]
}
