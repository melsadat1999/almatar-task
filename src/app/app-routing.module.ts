import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/shared/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tasks' },
 
  {
    path: '', component: LayoutComponent, children: [
     {path:'tasks',loadChildren:() => import('src/app/modules/tasks/tasks.module').then(m=> m.TasksModule)}
    ]
  },


  { path: '**', pathMatch: 'full', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
