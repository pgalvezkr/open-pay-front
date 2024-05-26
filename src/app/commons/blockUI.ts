// Template component

import { Component } from '@angular/core';

// Use block-ui-template class to center div if desired
@Component({
    styleUrls: ['./blockUI.css'],
    template: `
      <div class="block-ui-template block-ui-eccargo">
        <svg class="splash-loader" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="splash-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
        <div style="font-weight: 500">  </div>
      </div>
    `,
  })
export class BlockUIComponent {}