import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-white shadow-sm border-b-4 sticky top-0 z-50" [style.borderColor]="dataService.content().theme.secondaryColor">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24">
          <div class="flex items-center">
            <a routerLink="/" class="flex-shrink-0 flex items-center hover:scale-105 transition-transform">
              <span class="text-3xl font-extrabold display-font tracking-wide" [style.color]="dataService.content().theme.primaryColor">Dhondhooni</span>
              <span class="ml-2 text-gray-600 font-bold hidden md:block mt-1 bg-yellow-100 px-3 py-1 rounded-full text-sm">Little Learners</span>
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-6">
            <a routerLink="/" routerLinkActive="bg-blue-100 text-blue-800" [routerLinkActiveOptions]="{exact: true}" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors">Home</a>
            <a routerLink="/about" routerLinkActive="bg-pink-100 text-pink-800" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors">About Us</a>
            <a routerLink="/programs" routerLinkActive="bg-green-100 text-green-800" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors">Programs</a>
            <a routerLink="/admissions" routerLinkActive="bg-yellow-100 text-yellow-800" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors">Admissions</a>
            <a routerLink="/blog" routerLinkActive="bg-purple-100 text-purple-800" class="px-4 py-2 rounded-full font-bold text-gray-600 hover:bg-gray-100 transition-colors">Parents</a>
            
            <a routerLink="/contact" class="px-6 py-3 ml-2 rounded-full text-white font-bold hover:shadow-lg hover:-translate-y-1 transform transition-all text-lg shadow-md" [style.backgroundColor]="dataService.content().theme.secondaryColor">
              Enroll Now ✨
            </a>
          </div>
          <!-- Mobile menu button (simplified) -->
          <div class="flex items-center md:hidden">
             <a routerLink="/contact" class="px-5 py-2 rounded-full text-white font-bold shadow-md" [style.backgroundColor]="dataService.content().theme.primaryColor">Menu</a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  dataService = inject(DataService);
}