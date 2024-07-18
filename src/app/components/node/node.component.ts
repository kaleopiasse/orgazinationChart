import { Component, Input } from '@angular/core';
import { INode } from './node.interface';
import { OrgItemConfig } from 'ngx-basic-primitives';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent {
  @Input() node!: OrgItemConfig;
  // @Output() createChildrenEmitter: EventEmitter<any> = new EventEmitter();

  // let hierarquia = [
  //   {
  //       id: 1,
  //       parentId: '',
  //       name: 'Fund LP .-A',
  //       color: '00917C', //green
  //   },
  //   {
  //       id: 2,
  //       parentId: 1,
  //       name: 'VCP III A - BR1',
  //       color: '00AEEE',
  //   },
  //   {
  //       id: 3,
  //       parentId: 1,
  //       name: 'VCP III A - BR1',
  //       color: '00AEEE',
  //   },
  //   {
  //       id: 4,
  //       parentId: 1,
  //       name: 'VCP III A - BR3',
  //       color: '00AEEE',
  //   },
  //   {
  //       id: 5,
  //       parentId: 2,
  //       name: 'Domino\'s',
  //       color: '842E62',
  //   },
  // ];

  hierarquia = {
    id: 1,
    parentId: '',
    name: 'Fund LP .-A',
    color: '00917C', //green
  };

  createChildren() {
    console.log('oi');
    // this.createChildrenEmitter.emit(this.hierarchy.id);
  }
}
