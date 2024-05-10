import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

   {path: "", component:HomeComponent},
   {path: "contact", component:ContactComponent},


];
