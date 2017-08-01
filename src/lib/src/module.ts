import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { LibComponent } from './components/lib.component';
import { LibService } from './services/lib.service';

@NgModule({
  imports: [CoreModule],
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent, CoreModule]
})
export class LibModule { }
