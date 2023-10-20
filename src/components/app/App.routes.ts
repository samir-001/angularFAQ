import { Route} from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { WebsiteComponent } from '../website/website.component';
import { CreateQuestionFormComponent } from '../create-question-form/create-question-form.component';

export const APP_ROUTE: Route[] = [
    { path:'site',component:WebsiteComponent},
    { path:'admin',component:AdminComponent},
    { path:'add',component:CreateQuestionFormComponent,pathMatch:'full'},
    { path:'edit/:id',component:CreateQuestionFormComponent},
    { path:'',redirectTo:'/site',pathMatch:'full'},
    { path:'**',redirectTo:'/site'},
];
