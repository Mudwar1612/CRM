import { Routes } from '@angular/router';
import { Landingpage } from "./pages/landingpage/landingpage";
import { Minimap } from "./pages/minimap/minimap";

export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'Minimap', component: Minimap }
];
