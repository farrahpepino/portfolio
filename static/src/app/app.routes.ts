import { Routes } from '@angular/router';
import { Home } from '../Components/Main/home/home';
import { About } from '../Components/Main/about/about';

export const routes: Routes = [
    {
        path: "work",
        component: Home
    },
    {
        path: "",
        component: About
    },
];
