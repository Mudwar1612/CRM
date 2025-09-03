import { Routes } from '@angular/router';
import { Landingpage } from "./pages/landingpage/landingpage";
import { Minimap } from "./pages/minimap/minimap";
import { Menu } from "./pages/menu/menu";
import { Feedback } from "./pages/feedback/feedback";

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'Minimap', component: Minimap },
    { path: 'Menu', component: Menu },
    { path: 'Feedback', component: Feedback },
];
