import { Component, OnInit } from '@angular/core';
import { SELECT_CHECKBOX, SELECT_RADIO, SELECT_NONE, CHECKED, UNCHECKED, INDETERMINATE, TreeLevelConfig, Config, Node, SpTreeviewNodeTemplateContext } from 'sp-treeview-v2';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {

  public SELECT_CHECKBOX = SELECT_CHECKBOX;
  public SELECT_RADIO = SELECT_RADIO;
  public SELECT_NONE = SELECT_NONE;

  public CHECKED = CHECKED;
  public UNCHECKED = UNCHECKED;
  public INDETERMINATE = INDETERMINATE;

  config = new Config(new TreeLevelConfig(false, SELECT_CHECKBOX, true, true, true));
  simpleConfig = new Config(new TreeLevelConfig(true, SELECT_NONE, false, false, true));
  radioConfig = new Config(new TreeLevelConfig(true, SELECT_RADIO, false, false, false));
  checkboxConfig = new Config(new TreeLevelConfig(true, SELECT_CHECKBOX, false, false, false));
  addChildConfig = new Config(new TreeLevelConfig(true, SELECT_NONE, false, true, false));
  deleteConfig = new Config(new TreeLevelConfig(true, SELECT_NONE, true, false, false));
  nodes: Node[] = [];

  _dataSource = [
    { id: 1, parent: '0', node: new Node('India', '91', []) },
    { id: 2, parent: '91', node: new Node('Madhya Pradesh', 'MP', []) },
    { id: 3, parent: 'MP', node: new Node('Indore', '731') },
    { id: 4, parent: 'MP', node: new Node('Bhopal', '755') },
    { id: 5, parent: '91', node: new Node('Maharashtra', 'MH', []) },
    { id: 6, parent: 'MH', node: new Node('Mumbai', '22') },
    { id: 7, parent: 'MH', node: new Node('Pune', '20') },
    { id: 8, parent: '0', node: new Node('USA', '1', []) },
    { id: 9, parent: '1', node: new Node('California', 'CA', []) },
    { id: 10, parent: 'CA', node: new Node('Los Angeles', '310') },
    { id: 11, parent: 'CA', node: new Node('San Francisco', '415') },
    { id: 13, parent: '1', node: new Node('Nevada', 'NV', []) },
    { id: 14, parent: 'NV', node: new Node('Las Vegas', '702') },
    { id: 15, parent: 'NV', node: new Node('Carson City', '775') },
  ];
  count = 16;
  contextPrototype = SpTreeviewNodeTemplateContext.prototype;

  selectedNodes: string[] = [];
  addForm = false;
  parent: Node;

  constructor() {
    this.nodes = this._dataSource.filter(d => d.parent === '0').map(d => d.node);
  }

  ngOnInit() {

  }

  onLoadChildren(node: Node) {
    setTimeout(() => {
      node.children = this._dataSource.filter(d => d.parent === node.value).map(d => d.node);
    }, 2000);
  }

  onDelete(node: Node) {
    console.log("Delete" + JSON.stringify(node.name));
    let index = -1
    for (let i = 0; i < this._dataSource.length; i++) {
      if (this._dataSource[i].node.value === node.value) {
        index = i;
        break;
      }
    }
    if (index >= 0) {
      this._dataSource.splice(index, 1);
    }
  }

  onAddChild(node: Node) {
    console.log("AddChild" + JSON.stringify(node.name));
    this.addForm = true;
    this.parent = node;
  }

  onAddChildSubmit(form) {
    this.addForm = false;
    const node = new Node(form.value.name, form.value.value);
    this._dataSource.push({ id: this.count++, parent: this.parent.value, node: node })
    this.parent.addChild(node);
  }

  onChange(nodes: Node[]) {
    console.log(nodes);
    this.selectedNodes = nodes.map(node => node.name);
  }
}
