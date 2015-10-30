'use strict';

import base from './base.js';

export default class extends base {
  /**
   * homepage
   * @return {} []
   */
  indexAction(){
    //this.expires(86400);
    return this.display();
  }
  /**
   * changelog page
   * @return {} []
   */
  changelogAction(){
    this.assign('currentNav', 'changelog');
    this.assign('title', this.locale('title-changelog'));
    return this.display();
  }
  /**
   * demo list
   * @return {} []
   */
  demoAction(){
    this.assign('currentNav', 'demo');
    this.assign('title', this.locale('title-demo'));
    //this.assign('hasBootstrap', true);
    return this.display();
  }

  pluginAction(){
    this.assign('currentNav', 'plugin');
    this.assign('title', this.locale('title-plugin'));
    //this.assign('hasBootstrap', true);
    return this.display();
  }

  ipAction(){
    this.success(this.ip());
  }
}