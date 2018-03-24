import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
/**
 * Define qual a implementacao do pipe iremos utilizar no app
 *
 * @author maycon
 */

@NgModule({
	declarations: [SearchPipe],
	imports: [],
	exports: [SearchPipe]
})
export class PipesModule {}
