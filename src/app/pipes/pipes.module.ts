import { NgModule }            from '@angular/core';

import { TruncatePipe }        from '@app-pipes/truncate/truncate.pipe';
import { ReverseTruncatePipe } from '@app-pipes/reverse-truncate/reverse-truncate.pipe';


@NgModule({
    declarations: [ TruncatePipe, ReverseTruncatePipe ],

    exports: [ TruncatePipe, ReverseTruncatePipe ]
})
export class PipesModule {}