import { Routes } from '@angular/router';
import { Home } from '../Components/Main/home/home';
import { About } from '../Components/Main/about/about';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "about",
        component: About
    },
];
